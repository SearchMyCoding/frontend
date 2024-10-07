import { HttpMethod, MBTI_SINGLE_CODE_TYPE, MBTI_TEST_TYPE, request } from "src/pkg";
import { isAbsolute } from 'path';
import { GetDelayDuration, Sleep } from "src/pkg/utils";
import { TestResponseDto } from "src/pkg/request/dto";

interface TestListInput {
  path?: string;
};

interface MbtiTest {
  get Path(): string;
  get Length(): number;
  get Current(): MBTI_TEST_TYPE<MBTI_SINGLE_CODE_TYPE>;
  Get(sequence: number): MBTI_TEST_TYPE<MBTI_SINGLE_CODE_TYPE>;
  Reset(): void;
  Next(): void;
  Revert(): void;
};

export class TestList implements MbtiTest {
  private static maxAttempt: number = 5;
  private static defaultDuration: number = 100; // 100ms
  private static defaultPath: string = "/api";

  public static readonly Key: string = "MbtiTest";
  public static readonly ErrorNameFailedFetchMbtiTestList: string = "ERROR/FAILED-FETCH-MBTI-TEST-LIST";
  public static readonly ErrorMessageFailedFetchMbtiTestList: string = "Fail to fetch mbti test list.";
  public static readonly ErrorFailedFetchMbtiTestList: Error = {
    name: TestList.ErrorNameFailedFetchMbtiTestList,
    message: TestList.ErrorMessageFailedFetchMbtiTestList
  };

  private list: MBTI_TEST_TYPE<MBTI_SINGLE_CODE_TYPE>[];
  private path: string;
  private current: number;

  public static New(option? : TestListInput): MbtiTest {
    const path: string = option?.path ?? TestList.defaultPath;
    return new TestList({ path });
  }
  
  constructor({ path } : TestListInput) {
    this.path = path ?? "/";
    this.list = Array.from({ length: 0 });
    this.fetch();
    this.current = 0;
  }

  set Path(path: string) {
    if(!isAbsolute(path) && !URL.canParse(path)){
      throw new Error("Invalid path");
    }
    this.path = path;
  }

  get Path(): string {
    return this.path;
  }

  get Length(): number {
    return this.list.length;
  }

  get Current():  MBTI_TEST_TYPE<MBTI_SINGLE_CODE_TYPE> {
    return this.list[this.current];
  }

  private async fetch(): Promise<void>{
    let attempt: number = 0;
    let isRightLength: boolean = false;
    do {
      try {
        let testList: TestResponseDto<MBTI_SINGLE_CODE_TYPE>[] = await request<MBTI_TEST_TYPE<MBTI_SINGLE_CODE_TYPE>[]>(this.path, HttpMethod.GET);
        
        if(testList.length !== 0 && testList.length % 4 === 0) {
          isRightLength = true;
          break;
        }
      }
      catch(err){
        const delayDuration: number = GetDelayDuration(attempt) * TestList.defaultDuration;
        await Sleep(delayDuration);
      }
    }while(attempt < TestList.maxAttempt)

    if(!isRightLength){
      throw TestList.ErrorFailedFetchMbtiTestList;
    }
  }

  public Get(sequence: number): MBTI_TEST_TYPE<MBTI_SINGLE_CODE_TYPE> {
    return this.list[sequence];
  }

  public async Reset(): Promise<void>{
    await this.fetch();
    this.current = 0;
  }

  public Next(): void {
    this.current++;
  }

  public Revert(): void {
    if(this.current > 0) {
      this.current--;
    }
  }
}
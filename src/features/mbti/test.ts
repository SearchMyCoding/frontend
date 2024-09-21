import { HttpMethod, MBTI_SINGLE_TEMPLATE_TYPE, MBTI_TEST_TYPE, request } from "src/pkg";
import { isAbsolute } from 'path';
import { GetDelayDuration, Sleep } from "src/pkg/utils";

interface MbtiTest {
  get Path(): string;
  get Length(): number;
  Get(sequence: number): MBTI_TEST_TYPE<MBTI_SINGLE_TEMPLATE_TYPE>;
  Reset(): void;
}

export class TestList implements MbtiTest {
  private static maxAttempt: number = 5;
  private static defaultDuration: number = 100; // 100ms

  public static readonly Key: string = "MbtiTest";
  public static readonly ErrorNameFailedFetchMbtiTestList: string = "ERROR/FAILED-FETCH-MBTI-TEST-LIST";
  public static readonly ErrorMessageFailedFetchMbtiTestList: string = "Fail to fetch mbti test list.";
  public static readonly ErrorFailedFetchMbtiTestList: Error = {
    name: TestList.ErrorNameFailedFetchMbtiTestList,
    message: TestList.ErrorMessageFailedFetchMbtiTestList
  };

  private list: MBTI_TEST_TYPE<MBTI_SINGLE_TEMPLATE_TYPE>[];
  private path: string;

  public static New(): MbtiTest {
    return new TestList();
  }
  
  constructor() {
    this.list = Array.from({ length: 0 });
    this.fetch();
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

  private async fetch(): Promise<void>{
    let attempt: number = 0;
    let isRightLength: boolean = false;
    do {
      let testList: MBTI_TEST_TYPE<MBTI_SINGLE_TEMPLATE_TYPE>[] = await request<MBTI_TEST_TYPE<MBTI_SINGLE_TEMPLATE_TYPE>[]>(this.path, HttpMethod.GET);
      
      if(testList.length !== 0 && testList.length % 4 === 0) {
        isRightLength = true;
        break;
      }

      const delayDuration: number = GetDelayDuration(attempt) * TestList.defaultDuration;
      await Sleep(delayDuration);
    }while(attempt < TestList.maxAttempt)

    if(!isRightLength){
      throw TestList.ErrorFailedFetchMbtiTestList;
    }
  }

  public Get(sequence: number): MBTI_TEST_TYPE<MBTI_SINGLE_TEMPLATE_TYPE> {
    return this.list[sequence];
  }

  public async Reset(): Promise<void>{
    await this.fetch();
  }
}
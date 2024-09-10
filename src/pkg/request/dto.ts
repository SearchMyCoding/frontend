import { MbtiPairMapping, MbtiSingleType } from "src/mbti";

interface Choice<T extends MbtiSingleType> {
  context: string;
  type: T;
}

interface TestTemplate <T extends MbtiSingleType> {
  question: string;
  answers: [Choice<T>, Choice<MbtiPairMapping<T, keyof T>>]
}

export class TestResponseDto<T extends MbtiSingleType> implements TestTemplate<T>{
  readonly question: string;
  readonly answers: [Choice<T>, Choice<MbtiPairMapping<T, keyof T>>];
}
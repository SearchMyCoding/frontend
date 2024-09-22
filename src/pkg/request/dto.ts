import { Invert, MBTI_SINGLE_TEMPLATE_TYPE } from 'src/pkg';

interface Choice<T extends MBTI_SINGLE_TEMPLATE_TYPE> {
  context: string;
  type: T;
}

interface TestTemplate <T extends MBTI_SINGLE_TEMPLATE_TYPE> {
  question: string;
  answers: [Choice<T>, Choice<Invert<T>>]
}

export class TestResponseDto<T extends MBTI_SINGLE_TEMPLATE_TYPE> implements TestTemplate<T>{
  readonly question: string;
  readonly answers: [Choice<T>, Choice<Invert<T>>];
}
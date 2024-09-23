import { MBTI_CHOICE_TYPE, MBTI_SINGLE_TEMPLATE_TYPE, MBTI_TEST_TYPE, QUESTION_TYPE } from 'src/pkg';

export class TestResponseDto<T extends MBTI_SINGLE_TEMPLATE_TYPE> implements MBTI_TEST_TYPE<T>{
  readonly testImage: string;
  readonly question: string;
  readonly questionType: QUESTION_TYPE;
  choices: MBTI_CHOICE_TYPE<T>;
}
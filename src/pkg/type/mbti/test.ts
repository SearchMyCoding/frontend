import { RecoilState, atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { INVERT_TYPE, MBTI_SINGLE_TEMPLATE_TYPE, RESULT, UNKOWN, UNKOWN_TYPE } from 'src/pkg';

export type QUESTION_TYPE = keyof typeof RESULT | UNKOWN_TYPE;
export type ANSWER_TYPE<T extends MBTI_SINGLE_TEMPLATE_TYPE> = T;
export type QUESTION_SENDER_TYPE = {
  type: QUESTION_TYPE;
  contents: string;
};

export type CHOICE_TYPE<T extends MBTI_SINGLE_TEMPLATE_TYPE> = {
  type: ANSWER_TYPE<T>;
  text: string;
};


export type MBTI_TEST_TYPE<T extends MBTI_SINGLE_TEMPLATE_TYPE> = {
  testImage: string;
  question: string;
  questionType: QUESTION_TYPE;
  choices: MBTI_CHOICE_TYPE<T>;
};

export type MBTI_CHOICE_TYPE<T extends MBTI_SINGLE_TEMPLATE_TYPE> = [CHOICE_TYPE<T>, CHOICE_TYPE<INVERT_TYPE<T>>];

const MbtiTest: MBTI_TEST_TYPE<MBTI_SINGLE_TEMPLATE_TYPE>[] = [];
export const MbtiTestStateKey: string = 'MbtiTest';
export const MbtoSingleTestKey: string = 'MbtiSingleTest';

const prepareTest: string = "준비중입니다.";
export const defaultTest: MBTI_TEST_TYPE<MBTI_SINGLE_TEMPLATE_TYPE> = {
  testImage: "",
  question: prepareTest,
  questionType: UNKOWN.UNKOWN,
  choices: [
    {
      text: prepareTest,
      type: UNKOWN.UNKOWN
    },
    {
      text: prepareTest,
      type: UNKOWN.UNKOWN
    }
  ]
};

const { persistAtom } = recoilPersist();

export const MbtiTestState: RecoilState<MBTI_TEST_TYPE<MBTI_SINGLE_TEMPLATE_TYPE>[]> = atom({
  key: MbtiTestStateKey,
  default: MbtiTest,
  effects_UNSTABLE: [persistAtom],
})

export const MbtiSingleTest = atom<MBTI_TEST_TYPE<MBTI_SINGLE_TEMPLATE_TYPE>>({
  key: MbtoSingleTestKey,
  default: defaultTest
});

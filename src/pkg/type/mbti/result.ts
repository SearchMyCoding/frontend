import { RecoilState, atom } from "recoil";
import { recoilPersist } from 'recoil-persist';

export interface ATTENTION_FOCUS_RESULT {
  EXTRAVERTED: number;
  INTROVERTED: number;
};

export interface PERCEPTION_FUNCTION_RESULT {
  SENSING: number;
  INTUITION: number;
};

export interface JUDGMENT_FUNCTION_RESULT {
  THINKING: number;
  FEELING: number;
};
export interface LIFESTYLE_RESULT {
  JUDGING: number;
  PERCEIVING: number;
};

export interface TestResult {
  ATTENTION_FOCUS: ATTENTION_FOCUS_RESULT;
  PERCEPTION_FUNCTION: PERCEPTION_FUNCTION_RESULT;
  JUDGMENT_FUNCTION: JUDGMENT_FUNCTION_RESULT;
  LIFESTYLE: LIFESTYLE_RESULT; 
}

const DefaultMbtiTestResult: TestResult = {
  ATTENTION_FOCUS: {
    EXTRAVERTED: 0,
    INTROVERTED: 0,
  },
  PERCEPTION_FUNCTION: {
    SENSING: 0,
    INTUITION: 0,
  },
  JUDGMENT_FUNCTION: {
    THINKING: 0,
    FEELING: 0,
  },
  LIFESTYLE: {
    JUDGING: 0,
    PERCEIVING: 0,
  },
};

export const MbtiTestResultStateKey: string = 'MbtiTestResult';

const { persistAtom } = recoilPersist();

export const MbtiTestResultState: RecoilState<TestResult> = atom({
  key: MbtiTestResultStateKey,
  default: DefaultMbtiTestResult,
  effects_UNSTABLE: [persistAtom],
})

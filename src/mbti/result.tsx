import { RecoilState, atom } from "recoil";
import { MbtiParentType } from "src/mbti";
import { recoilPersist } from 'recoil-persist';

export interface IATTENTION_FOCUS {
  EXTRAVERTED: number;
  INTROVERTED: number;
};

export interface IPERCEPTION_FUNCTION {
  SENSING: number;
  INTUITION: number;
};

export interface IJUDGMENT_FUNCTION {
  THINKING: number;
  FEELING: number;
};
export interface ILIFESTYLE {
  JUDGING: number;
  PERCEIVING: number;
};

export interface ITestResult {
  ATTENTION_FOCUS: IATTENTION_FOCUS;
  PERCEPTION_FUNCTION: IPERCEPTION_FUNCTION;
  JUDGMENT_FUNCTION: IJUDGMENT_FUNCTION;
  LIFESTYLE: ILIFESTYLE; 
}

const MbtiTestResult: ITestResult = {
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
export const MbtiMainType: MbtiParentType[] = Object.keys(MbtiTestResult) as MbtiParentType[];

const { persistAtom } = recoilPersist();

export const MbtiTestResultState: RecoilState<ITestResult> = atom({
  key: MbtiTestResultStateKey,
  default: MbtiTestResult,
  effects_UNSTABLE: [persistAtom],
})

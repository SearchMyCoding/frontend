import { RecoilState, atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { MbtiChildType, MbtiOppositeType, MbtiParentType } from 'src/mbti';

export interface IMbtiQuestion{
  type: MbtiParentType;
  contents: string;
}

export interface IMbtiAnswer<T extends MbtiParentType, G extends MbtiChildType<T>>{
  type: G;
  contents: string;
}

export interface IMbtiTest<T extends MbtiParentType, G extends MbtiChildType<T>>{
  question: IMbtiQuestion;
  answer: [IMbtiAnswer<T, G>, IMbtiAnswer<T, MbtiOppositeType<T, G>>];
};

const MbtiTest: IMbtiQuestion[] = [];
export const MbtiTestStateKey: string = 'MbtiTest';

const { persistAtom } = recoilPersist();

export const MbtiTestState: RecoilState<IMbtiQuestion[]> = atom({
  key: MbtiTestStateKey,
  default: MbtiTest,
  effects_UNSTABLE: [persistAtom],
})

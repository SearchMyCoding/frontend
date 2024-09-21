import { atom, RecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";
import { Result, TestList } from "src/features/mbti";

const { persistAtom } = recoilPersist();

export const MbtiResultState: RecoilState<Result> = atom({
  key: Result.Key,
  default: Result.New(),
  effects_UNSTABLE: [persistAtom],
})

export const MbtiTestState: RecoilState<TestList> = atom({
  key: TestList.Key,
  default: TestList.New(),
  effects_UNSTABLE: [persistAtom]
});
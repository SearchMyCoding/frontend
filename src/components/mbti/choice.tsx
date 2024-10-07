import { SetterOrUpdater, useRecoilState } from "recoil";
import { MbtiResultState, Result } from "src/features/mbti";
import { MBTI_CHOICE_TYPE, MBTI_SINGLE_CODE_TYPE } from "src/pkg";
import { LeftButton, RightButton, TakeOrNotGridLayout } from "src/components";

export function TwoChoiceTemplate<T extends MBTI_SINGLE_CODE_TYPE>({ choices }:{ choices: MBTI_CHOICE_TYPE<T>}): JSX.Element {
  const [state, setTestResult]: [Result, SetterOrUpdater<Result>] = useRecoilState(MbtiResultState);
  const [left, right] = choices;

  return (
  <TakeOrNotGridLayout>
    <LeftButton context={left.text} onClick={() => {
      state.Add(left.type);
      setTestResult(state);
    }}/>
    <RightButton context={right.text} onClick={() => {
      state.Add(right.type);
      setTestResult(state);
    }}/>
  </TakeOrNotGridLayout>
  )
}
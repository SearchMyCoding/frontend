import { useRecoilState } from "recoil";
import { RGBtn } from "src/components";
import { ITestResult, MbtiChildType, MbtiParentType, MbtiTestResultState } from "src/mbti";

interface IAnswerType<T extends MbtiParentType>{
  main: T;
  sub: MbtiChildType<T>;
}

interface ISelectButtonInput<T extends MbtiParentType> {
  contents: string;
  type: IAnswerType<T>
}

export function SelectBtn<T extends MbtiParentType>({ contents, type }: ISelectButtonInput<T>): JSX.Element {
  const [mbtiTestResult, setMbtiTestResult] = useRecoilState(MbtiTestResultState);
  
  return (
    <RGBtn onClick={()=>{}}>
      {contents}
    </RGBtn>
  )
}
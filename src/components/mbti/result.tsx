import { useRecoilValue } from "recoil";
import { MbtiResultState, Result } from "src/features/mbti";

export function MbitResultTemplate(): JSX.Element{
  const result: Result = useRecoilValue(MbtiResultState);
  const title: string = `Result of Mbti Test`;

  return (
    <div title={title}>
      <p>{result.MbtiCode}</p>
    </div>
  )  
}
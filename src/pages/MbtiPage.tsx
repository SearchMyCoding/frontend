// import { useRecoilState } from "recoil";
// import { Button } from "src/components";
// import { ITestResult, MbtiChildType, MbtiMainType, MbtiParentType, MbtiTestResultState } from "src/mbti";

export function MbtiPage(): JSX.Element {
  // const [mbtiTestResult, setMbtiTestResult] = useRecoilState(MbtiTestResultState);
  
  return (
    <>
      <p>MBTI 페이지입니다.</p>
      {/* {
        MbtiMainType.map((mainType: MbtiParentType) => {
          const subType: string[] = Object.keys(mbtiTestResult[mainType]);
          const buttons = subType.map((value: string) => {
            return <Button key={value} buttonName={value} onClick={() => {
              setMbtiTestResult((mbtiResult: ITestResult) => {
                const newResult: ITestResult = JSON.parse(JSON.stringify(mbtiResult));
                newResult[mainType][`${value as MbtiChildType<`${typeof mainType}`>}`]++;
                return newResult;
              })
            }}></Button>
          });
          return (<div key={mainType} className="my-3 flex">{...buttons}</div>)
        })
      } */}
      {/* <p>{`${JSON.stringify(mbtiTestResult)}`}</p> */}
    </>
  );
}

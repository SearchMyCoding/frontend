import { FlexTestTemplate, TakeOrNotGridTemplate } from "src/components";

const test = {
  question: {
    contents: "쉬는 날 무엇을 더 하고 싶나요?",
    type: "ATTENTION_FOCUS"
  },
  answers: [
    {
      contents: "친구를 만나서 시간을 보낸다",
      type: "EXTRAVERTED"
    },
    {
      contents: "혼자 시간을 보낸다",
      type: "INTROVERTED"
    }
  ]
}

export function MbtiPage(): JSX.Element {
  return (
    <div>
      <FlexTestTemplate>
        <div className="flex flex-col">
          <div className="flex flex-col justify-center mx-auto h-full w-7/12 rounded-lg shadow-xl border-black border-2">
            <img src="/confusedface.jpg" className="object-contain rounded-lg"/>
            <div className="content-center text-center h-16">
              <p>{test.question.contents}</p>
            </div>
          </div>
        </div>
        <TakeOrNotGridTemplate>
          <div className="flex w-full h-12 text-left">
            <button className="border-black border-2 rounded-lg w-full"> {test.answers[0].contents}</button>
          </div>
          <div className="flex justify-end w-full h-12 text-right">
            <button className="border-black border-2 rounded-lg w-full"> {test.answers[1].contents}</button>
          </div>
        </TakeOrNotGridTemplate>
      </FlexTestTemplate>
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
    </div>
  );
}

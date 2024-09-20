import { TwBtn, TwBtnDiv } from "src/components";
import tw from 'tailwind-styled-components';

const LeftBtnDiv: TwBtnDiv = tw.div`
  flex
  w-full
  h-12
  text-left
`

const RightBtnDiv: TwBtnDiv = tw.div`
  flex
  justify-end
  w-full
  h-12
  text-right
`

const Btn: TwBtn = tw.button`
  hover:scale-105
  active:scale-90
  shadow-2xl
  trasition-all
  border-black
  border-2
  rounded-lg
  w-full
`

export interface ChoiceButtonInput{
  context: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export function LeftButton({ context, onClick }: ChoiceButtonInput): JSX.Element{
  return (
    <LeftBtnDiv>
      <Btn onClick={onClick}>
        {context}
      </Btn>
    </LeftBtnDiv>
  )
}

export function RightButton({ context, onClick }: ChoiceButtonInput): JSX.Element{
  return (
    <RightBtnDiv>
      <Btn onClick={onClick}>
        {context}
      </Btn>
    </RightBtnDiv>
  )
}
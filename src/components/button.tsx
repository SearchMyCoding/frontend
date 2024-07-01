import { ButtonHTMLAttributes, DOMAttributes, DetailedHTMLProps } from "react";
import { ILink, Link } from "src/components";
import tw from 'tailwind-styled-components';
import { TailwindComponent } from "tailwind-styled-components/dist/tailwind";

export type TwBtn = TailwindComponent<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {} >;
export type TwBtnMargin = TailwindComponent<DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;

export const WtBtn: TwBtn = tw.button`
  text-white
  font-bold
`;

export const StyledBtn: TwBtn = tw(WtBtn)`
  bg-gray-500
  hover:bg-gray-700
  py-4
  px-6
  rounded
`;

export const BtnMargin: TwBtnMargin = tw.div`
  mx-0
  my-3
`;

export interface IButtonInput extends DOMAttributes<HTMLButtonElement>{
  buttonName: string;
};

export interface ILinkButton extends ILink, IButtonInput {}

export function Button({ buttonName, onClick = undefined }: IButtonInput): JSX.Element {

  return (
    <StyledBtn onClick={onClick}>
      { buttonName }
    </StyledBtn>
  );
}

export function LinkButton({ link, buttonName, onClick}: ILinkButton): JSX.Element {
  return (
    <BtnMargin>
      <Link link={link}>
        <Button buttonName={buttonName} onClick={onClick}/>
      </Link>
    </BtnMargin>
  )
}
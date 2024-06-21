import { DOMAttributes } from "react";
import { ILink, Link } from "src/components";

type ButtonColor = 'blue' | 'red' | 'green' | 'yellow' | 'gray';
type TextColor = 'black' | 'white';

export interface IButtonInput extends DOMAttributes<HTMLButtonElement>{
  buttonName: string;
  buttonColor?: ButtonColor;
  textColor?: TextColor;
  fontBold?: boolean;
};

export interface ILinkButton extends ILink, IButtonInput {
  marginX?: number;
  marginY?: number;
}

export function Button({ buttonName, buttonColor = 'blue', textColor = 'white', onClick = undefined, fontBold = true }: IButtonInput): JSX.Element {
  const button_color: string = `bg-${buttonColor}-500 hover:bg-${buttonColor}-700`;
  const text_color: string = `text-${textColor}`;
  const font_bold: string = fontBold ? 'font-bold' : '';
  const classNameOption: string = `${button_color} ${text_color} ${font_bold} py-4 px-6 rounded`

  return (
    <button type="button" onClick={onClick} className={classNameOption}>
      { buttonName }
    </button>
  );
}

export function LinkButton({ link, buttonName, onClick, buttonColor, marginX = 0, marginY = 3 }: ILinkButton): JSX.Element {
  const marginOption: string = `mx-${marginX} my-${marginY}`;

  return (
    <div className={marginOption}>
      <Link link={link}>
        <Button buttonName={buttonName} onClick={onClick} buttonColor={buttonColor}/>
      </Link>
    </div>
  )
}
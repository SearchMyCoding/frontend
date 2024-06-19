import { DOMAttributes } from "react";
import { ILink, Link } from "src/components";

type Color = 'blue' | 'red' | 'green' | 'yellow' | 'gray';
type TextColor = 'black' | 'white';

export interface ButtonInput extends DOMAttributes<HTMLButtonElement>{
  buttonName: string;
  buttonColor?: Color;
  textColor?: TextColor;
};

export function Button({ buttonName, buttonColor = 'blue', textColor = 'white', onClick = undefined }: ButtonInput): JSX.Element {
  const className: string = `bg-${buttonColor}-500 hover:bg-${buttonColor}-700 text-${textColor} font-bold py-2 px-4 rounded`

  return (
    <button type="button" onClick={onClick} className={className}>
      { buttonName }
    </button>
  );
}

export function LinkButton({link, buttonName, onClick, buttonColor}: ILink & ButtonInput): JSX.Element {
  return (
    <Link link={link}>
      <Button buttonName={buttonName} onClick={onClick} buttonColor={buttonColor}/>
    </Link>
  )
}
import { ButtonHTMLAttributes, DetailedHTMLProps, DOMAttributes, HTMLAttributes } from "react";
import { TailwindComponent } from "tailwind-styled-components/dist/tailwind";
import { ILink } from "src/components";

export type TwBtn = TailwindComponent<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {} >;
export type TwBtnMargin = TailwindComponent<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;

export interface ISingleButtonProps extends ILink, DOMAttributes<HTMLButtonElement>{
  buttonName: string;
};
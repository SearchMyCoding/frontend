import { ReactNode } from "react";

export interface ILink{
  link?: string;
  className?: string;
  children?: ReactNode;
}

export function Link({ link, className, children }: ILink): JSX.Element {
  return <a href={link} className={className}>{children}</a>
}
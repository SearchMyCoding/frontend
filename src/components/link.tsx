import { ReactNode } from "react";
import { BaseComponent } from "src/components";

export interface ILink extends BaseComponent{
  link?: string;
  children?: ReactNode;
}

export function Link({ link, className, children }: ILink): JSX.Element {
  return <a href={link} className={className}>{children}</a>
}
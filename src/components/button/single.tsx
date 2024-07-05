import { IMainButtonProps, Link, MfBtn, RGBtn } from "src/components";

/**
 * Single Linked Button
 */
export function SLbtn({ link, buttonName, onClick = undefined }: IMainButtonProps): JSX.Element {
  return (
    <MfBtn>
      <Link link={link}>
        <RGBtn onClick={onClick}>
          { buttonName }
        </RGBtn>
      </Link>
    </MfBtn>
  );
};
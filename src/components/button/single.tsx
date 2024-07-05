import { ISingleButtonProps, Link, MfBtn, RGBtn } from "src/components";

/**
 * Single Linked Button
 */
export function SingleBtn({ link, buttonName, onClick = undefined }: ISingleButtonProps): JSX.Element {
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
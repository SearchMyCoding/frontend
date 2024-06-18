import { Link } from "./link";

export interface IImage{
  imageSrc: string;
  imageHref: string;
};

export function Image({ imageSrc, imageHref }: IImage){
  return (
    <Link link={imageHref}>
      <img src={imageSrc} className="object-cover" alt="/"></img>
    </Link>
  );
}
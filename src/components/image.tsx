import { BaseComponent, Link } from "src/components";

export interface IImage extends BaseComponent{
  imageSrc: string;
  imageDes?: string;
};

export interface ILinkImage extends IImage{
  imageHref: string;
}

export function Image({ imageSrc, imageDes, className }: IImage){
  const tailwindClass: string = className ?? `object-cover`;
  
  return (
    <img src={imageSrc} className={tailwindClass} alt={imageDes}></img>
  );
}

export function LinkImage({ imageSrc, imageHref, imageDes }: ILinkImage){
  return (
    <Link link={imageHref}>
      <Image imageSrc={imageSrc} imageDes={imageDes} />
    </Link>
  );
}
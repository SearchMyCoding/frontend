import { ILink, Link } from "src/components";

export interface ITab extends ILink{
  tabName: string;
}

export function SideBarLinkTab({link, tabName}: ITab){
  return (
    <Link link={link} className="p-4 text-black font-bold hover:bg-gray-300">
      { tabName }
    </Link>
  )
}
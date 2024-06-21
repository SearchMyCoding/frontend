import { ITab, LinkImage, SideBarLinkTab } from 'src/components';

export interface ISideBar {
  isMenuOpen?: boolean;
}

const tabs: ITab[] = [
  {
    link: '/',
    tabName: 'Home'
  },
  {
    link: '/course',
    tabName: '전체강좌'
  },
  {
    link: '/mbti',
    tabName: 'MBTI 검사'
  },
];

export function SideBar({ isMenuOpen = true }: ISideBar) {
  const className: string = `h-screen w-64 bg-white text-black border-r-2 border-black flex flex-col ${isMenuOpen ? 'block' : 'hidden'}`;
  
  return (
    <div className={className}>
      <nav className="flex flex-col mt-4 flex-grow text-black">
        {
          tabs.map(({ link, tabName } : ITab): JSX.Element => {
            return <SideBarLinkTab key={tabName} link={link} tabName={tabName} />
          })
        }
      </nav>
      <div className="text-2xl font-bold p-4 text-black">
        <LinkImage imageSrc='/searchmycoding.jpg' imageHref='/'/>
      </div>
    </div>
  );
};

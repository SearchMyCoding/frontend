export interface IMobileNavigation{
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export function MobileNavigation({ onClick }: IMobileNavigation){
  return (
    <div className="md:hidden bg-gray-800 text-white p-4 flex justify-between items-center">
      <span className="text-xl font-bold">Logo</span>
      <button onClick={onClick} className="text-xl">
        ☰
      </button>
    </div>
  );
}
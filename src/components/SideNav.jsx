import Logo from "./Logo";
import MoreDropDown from "./MoreDropDown";
import NavLinks from "./NavLinks";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <div className="!flex flex-row md:flex-col border-t md:border-none -ml-3 md:ml-0 bg-white dark:bg-neutral-950 h-16 md:h-full bottom-0 justify-evenly md:justify-between fixed z-50 flex-1 w-full md:relative space-x-2 md:space-x-0 md:space-y-2 p-2">
        <Logo />
        <NavLinks />

        <div className="hidden md:flex relative md:mt-auto flex-1 items-end w-full">
          <MoreDropDown />
        </div>
        
      </div>
    </div>
  ) 
}

import Link from "next/link";
import ReusableNav from "./ReusableNav";
import { Home, Clock3, ChartNoAxesColumn } from "lucide-react";
import MobileMenu from "./MobileMenu";


const NavItems = [
  { path: "/", text: "Home", icon: Home },
  { path: "/Timeline", text: "Timeline", icon: Clock3 },
  { path: "/Stats", text: "Stats", icon: ChartNoAxesColumn },
]

const Navbar = () => {
  return (
    <nav className="navbar bg-white px-6 shadow-sm">
      <div className="flex-1">
        <Link href="/"
          className="text-2xl font-bold tracking-tight text-primary">KeenKeeper
        </Link>
      </div>
      <div className="hidden md:flex gap-10 ">
        {

          NavItems.map((NavItem, index) => {
            const Icon = NavItem.icon;
            return (
              <ReusableNav href={NavItem.path} key={index}>
                <div className="flex items-center gap-1">
                  <Icon size={18} />{NavItem.text}
                </div>
              </ReusableNav>
            )})
          
        }
      </div>
      {/* For small device */}
      <MobileMenu></MobileMenu>
    </nav>
  );
};

export default Navbar;
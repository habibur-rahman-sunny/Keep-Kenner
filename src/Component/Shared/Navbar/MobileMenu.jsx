"use client"
import { Home, Clock3, ChartNoAxesColumn, Menu } from "lucide-react";
import ReusableNav from "./ReusableNav";
import { useState } from "react";

const NavItems = [
  { path: "/", text: "Home", icon: Home },
  { path: "/timeline", text: "Timeline", icon: Clock3 },
  { path: "/stats", text: "Stats", icon: ChartNoAxesColumn },
]

const MobileMenu = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div>
            <button className="md:hidden" onClick={() => setShowMenu(!showMenu)}>
                <Menu />
            </button>

            {showMenu && (
                <div className="absolute right-0 top-16 bg-white flex flex-col gap-4 shadow-md p-5 md:hidden">
                    {

                        NavItems.map((NavItem, index) => {
                            const Icon = NavItem.icon;
                            return (
                                <ReusableNav href={NavItem.path} key={index}>
                                    <div className="flex items-center gap-1">
                                        <Icon size={18} />{NavItem.text}
                                    </div>
                                </ReusableNav>
                            )
                        })

                    }
                </div>
            )}
        </div>
    )
};

export default MobileMenu;
import Cross from "@components/Icons/global/Cross";
import { navItems} from "@config/constants";
import React, { MouseEventHandler } from "react";
import MobileNavItem from "./MobileNavItem";

type Props = {
    handleSideNav: MouseEventHandler<HTMLButtonElement>;
    setShowSideNav: (showSideNav: boolean) => void;
    showSideNav: boolean;
};

const MobileMenu = ({ handleSideNav, setShowSideNav }: Props) => {
    return (
        <>
            <div className="navbar-backdrop block lg:!hidden fixed inset-0 bg-gray-800 opacity-25"></div>

            <div className="fixed top-0 left-0 bottom-0 w-full bg-[rgba(0,0,0,0.3)] flex justify-end ">

                <nav className="flex flex-col w-[285px] h-full py-[40px] bg-white overflow-y-auto relative ">
                    <div className="md:mt-[60px] mt-[30px]">
                        <ul>
                            {navItems.map((item: any, index: number) => (
                                <MobileNavItem
                                    key={index}
                                    item={item}
                                    setShowSideNav={setShowSideNav}
                                />
                            ))}
                        </ul>
                    </div>
                </nav>

                {/* Mobile Close Button */}
                <div
                    className="lg:hidden block absolute right-3 top-[10px] cursor-pointer"
                    onClick={() => setShowSideNav(false)}
                >
                    <Cross />
                </div>
            </div>
        </>
    );
};

export default MobileMenu;

"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const ReusableNav = ({ children, href }) => {
    const pathname = usePathname()
    return (
        <Link href={href}
        className={`p-1 rounded-sm font-medium px-4 *
        ${pathname === href ? "bg-green-800 text-white": "bg-gray-300 text-black"}`}>
            {children}
        </Link>

    );
};

export default ReusableNav;
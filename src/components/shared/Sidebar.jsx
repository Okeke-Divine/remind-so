"use client"
import Link from 'next/link';
import Logo from "./Logo";
import { usePathname } from 'next/navigation';

const userInitial = "DI";

const teamSlug = "me";

const links = [
    {
        icon: "flaticon fi fi-tr-rectangle-list",
        url: `/t/${teamSlug}`
    },
    {
        icon: "flaticon fi fi-tr-calendar-day",
        url: `/calendar`
    },
    {
        icon: "flaticon fi fi-tr-customization-cogwheel",
        url: `/settings`
    },
];

export default function Sidebar() {

    const pathname = usePathname();

    return (
        <>
            <div className="fixed top-0 -left-full md:left-0 h-full w-[80px] px-3 py-10 bg-gray-100 flex flex-col">
                <Logo />
                <div className="divider"></div>
                <div className="flex flex-col gap-3">
                    {links.map((link, index) => (
                        <Link href={link.url} key={index} className={`btn ${link.url == pathname ? 'active-sidebar-link' : ''}`}>
                            <i className={`${link.icon} text-2xl`}></i>
                        </Link>
                    ))}
                </div>
                <div className="h-full"></div>
                {/* Avatar at the bottom */}
                <div className="h-fit mt-auto">
                    <div className="flex justify-center items-center w-12 h-12 rounded-full bg-black text-white text-xl">
                        {userInitial}
                    </div>
                </div>
            </div>
        </>
    )
}
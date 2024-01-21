"use client"

import {
    Clapperboard,
    Compass,
    Heart,
    Home,
    MessageCircle,
    PlusSquare,
    Search,
} from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const links = [
    { name: "Home", href: "/dashboard", icon: Home },
    {
        name: "Search",
        href: "/dashboard/search",
        icon: Search,
        hideOnMobile: true,
    },
    { name: "Explore", href: "/dashboard/explore", icon: Compass },
    {
        name: "Reels",
        href: "/dashboard/reels",
        icon: Clapperboard,
    },
    {
        name: "Messages",
        href: "/dashboard/messages",
        icon: MessageCircle,
    },
    {
        name: "Notifications",
        href: "/dashboard/notifications",
        icon: Heart,
        hideOnMobile: true,
    },
    {
        name: "Create",
        href: "/dashboard/create",
        icon: PlusSquare,
    },
];

export default function NavLinks() {

    const pathname = usePathname();  //gets the current pathname
    //console.log(pathname);

    return (
        <div className="md:mb-32">
            {
                links.map((link, index) => {
                    const LinkIcon = link.icon;
                    const isActive = pathname === link.href;  //if pathname matches(true or false) the "link.href" property

                    return (
                        <Link href={link.href} key={index}
                            className={buttonVariants({
                                variant: isActive ? "secondary" : "ghost",
                                className: cn("navLink", {"hidden md:flex": link.hideOnMobile }),
                                size: "lg"
                            })}
                        >
                            <LinkIcon className="w-6" />
                            <p className={`${cn("hidden lg:block", {"font-extrabold": isActive})}`}>
                                {link.name}
                            </p>
                        </Link>
                    )
                })
            }
        </div>
    )
}

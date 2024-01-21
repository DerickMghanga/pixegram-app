"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"

export default function MoreDropDown() {

    const [open, setOpen] = useState(false);

    return (
        <DropdownMenu open={open}>
            <DropdownMenuTrigger asChild>
                <Button onClick={() => setOpen(!open)}
                    variant={"ghost"}
                    size={"lg"}
                    className="md:w-full !justify-start space-x-2 !px-3"
                >
                    <Menu />
                    <div className="hidden lg:block">More</div>

                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
                <DropdownMenuItem>
                    <DropdownMenuLabel>Settings</DropdownMenuLabel>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <DropdownMenuLabel>Help</DropdownMenuLabel>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <DropdownMenuLabel>Logout</DropdownMenuLabel>
                </DropdownMenuItem>
            </DropdownMenuContent>

        </DropdownMenu>
    )
}

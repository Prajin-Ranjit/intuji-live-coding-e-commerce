"use client"

import Link from "next/link"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ThemeToggleButton } from "./ThemeToggleButton"

export function NavigationBar() {
    return (
        <div className="flex flex-row justify-between p-2">
            <NavigationMenu>
                <NavigationMenuList className="flex-wrap w-full">

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link href="/">Home</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>

            <ThemeToggleButton />
        </div>
    )
}

"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
	NavigationMenuViewport,
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";

const components: { title: string; href: string; description: string }[] = [
	{
		title: "Alert Dialog",
		href: "/docs/primitives/alert-dialog",
		description:
			"A modal dialog that interrupts the user with important content and expects a response.",
	},
	{
		title: "Hover Card",
		href: "/docs/primitives/hover-card",
		description:
			"For sighted users to preview content available behind a link.",
	},
	{
		title: "Progress",
		href: "/docs/primitives/progress",
		description:
			"Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
	},
	{
		title: "Scroll-area",
		href: "/docs/primitives/scroll-area",
		description: "Visually or semantically separates content.",
	},
	{
		title: "Tabs",
		href: "/docs/primitives/tabs",
		description:
			"A set of layered sections of content—known as tab panels—that are displayed one at a time.",
	},
	{
		title: "Tooltip",
		href: "/docs/primitives/tooltip",
		description:
			"A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
	},
];

export function Header() {
	return (
		<div className="flex justify-between  py-4   bg-slate-200 sticky  top-0">
			<NavigationMenu className="   ">
				<NavigationMenuList className="   place-items-start grid  grid-cols-12 border-blue-500 ">
					<NavigationMenuItem className=" col-span-1 ">
						<Link href="/docs" legacyBehavior passHref>
							<NavigationMenuLink className=" bg-transparent p-4 ml-4 ">
								Home
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem className=" col-span-2  bg-transparent ">
						<Link href="/docs" legacyBehavior passHref>
							<NavigationMenuLink className=" bg-transparent p-4 ml-4">
								Getting Started
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem className=" col-span-2   ">
						<Link href="/docs" legacyBehavior passHref>
							<NavigationMenuLink className=" bg-transparent p-4 ml-4">
								About
							</NavigationMenuLink>
						</Link>

						<NavigationMenuContent>
							<ul className="   "></ul>
							{/* fix nav movement  */}
						</NavigationMenuContent>
					</NavigationMenuItem>
					{/* <NavigationMenuItem className=" col-span-2  border-2 ">
						<Link href="/docs" legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Documentation
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem> */}
				</NavigationMenuList>
				<NavigationMenuViewport isTriggerOnRight={false} />
			</NavigationMenu>
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem className=" ">
						<NavigationMenuLink className=" bg-transparent mx-5 cursor-pointer">
							Login
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem className=" ">
						<NavigationMenuLink className=" mx-5 bg-transparent cursor-pointer">
							Sign up
						</NavigationMenuLink>
					</NavigationMenuItem>

					<NavigationMenuItem className="">
						<NavigationMenuTrigger className=" bg-transparent    hover:text-accent-foreground data-[active]:bg-transparent data-[state=open]:bg-transparent	 focus:bg-transparent  hover:bg-transparent ml-5 ">
							<svg
								width="15"
								height="15"
								viewBox="0 0 15 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z"
									fill="currentColor"
									fillRule="evenodd"
									clipRule="evenodd"></path>
							</svg>
						</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid w-[200px] grid-rows-3 gap-3 p-4 md:w-[300px] md:grid-cols-1 lg:w-[300px] ">
								<ListItem
									key={"Settings"}
									title={"Settings"}
									href={"/settings"}></ListItem>
								<ListItem
									key={"Profile"}
									title={"Profile"}
									href={"/settings"}></ListItem>
								<ListItem
									key={"Change Password"}
									title={"Change Password"}
									href={"/settings"}></ListItem>
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
				</NavigationMenuList>
				<NavigationMenuViewport isTriggerOnRight={true} />
			</NavigationMenu>
		</div>
	);
}

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className,
					)}
					{...props}>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";

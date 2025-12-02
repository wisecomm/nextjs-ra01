"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    CreditCard,
    FileText,
    Image as ImageIcon,
    LogOut,
    ChevronLeft,
    ChevronRight,
    Info,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

const sidebarItems = [
    {
        title: "결제 관리",
        href: "/payments",
        icon: CreditCard,
    },
    {
        title: "게시글 관리",
        href: "/posts",
        icon: FileText,
    },
    {
        title: "사진 관리",
        href: "/photos",
        icon: ImageIcon,
    },
    {
        title: "소개",
        href: "/about",
        icon: Info,
    },
];

export function Sidebar() {
    const pathname = usePathname();
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <TooltipProvider>
            <div
                className={cn(
                    "hidden border-r bg-slate-50/40 dark:bg-slate-950/40 md:block transition-all duration-300",
                    isCollapsed ? "w-[70px]" : "md:w-64 lg:w-72"
                )}
            >
                <div className="flex h-full flex-col gap-2">
                    <div className={cn(
                        "flex h-14 items-center border-b px-4 font-semibold lg:h-[60px]",
                        isCollapsed ? "justify-center" : "justify-between"
                    )}>
                        {!isCollapsed && (
                            <Link href="/" className="flex items-center gap-2 font-bold truncate">
                                <span className="">NextGen 관리자</span>
                            </Link>
                        )}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => setIsCollapsed(!isCollapsed)}
                        >
                            {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
                        </Button>
                    </div>
                    <div className="flex-1 overflow-auto py-2">
                        <nav className="grid items-start px-2 text-sm font-medium">
                            {sidebarItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <Tooltip key={item.href}>
                                        <TooltipTrigger asChild>
                                            <Link
                                                href={item.href}
                                                className={cn(
                                                    "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
                                                    pathname === item.href
                                                        ? "bg-slate-100 text-primary dark:bg-slate-800"
                                                        : "text-muted-foreground",
                                                    isCollapsed && "justify-center px-2"
                                                )}
                                            >
                                                <Icon className="h-4 w-4" />
                                                {!isCollapsed && <span>{item.title}</span>}
                                            </Link>
                                        </TooltipTrigger>
                                        {isCollapsed && (
                                            <TooltipContent side="right">
                                                {item.title}
                                            </TooltipContent>
                                        )}
                                    </Tooltip>
                                );
                            })}
                        </nav>
                    </div>
                    <div className="mt-auto p-4 border-t">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="/logout"
                                    className={cn(
                                        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-all hover:text-primary",
                                        isCollapsed && "justify-center px-2"
                                    )}
                                >
                                    <LogOut className="h-4 w-4" />
                                    {!isCollapsed && <span>로그아웃</span>}
                                </Link>
                            </TooltipTrigger>
                            {isCollapsed && (
                                <TooltipContent side="right">
                                    로그아웃
                                </TooltipContent>
                            )}
                        </Tooltip>
                    </div>
                </div>
            </div>
        </TooltipProvider>
    );
}

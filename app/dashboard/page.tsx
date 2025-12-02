"use client";

import { useAppStore } from "@/store/useAppStore";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  LayoutDashboard,
  Users,
  Settings,
  Bell,
  Search,
  Menu,
  DollarSign,
  Activity,
  CreditCard,
  Image as ImageIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Dashboard() {
  const { userName } = useAppStore();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transition-all duration-300 flex flex-col fixed h-full z-20`}
      >
        <div className="p-4 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 h-16">
          <div
            className={`font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-cyan-600 ${!isSidebarOpen && "hidden"}`}
          >
            Nexus
          </div>
          <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <Button
            variant="secondary"
            className={`w-full justify-start ${!isSidebarOpen && "justify-center px-2"}`}
          >
            <LayoutDashboard className="w-5 h-5 mr-2" />
            {isSidebarOpen && <span>Dashboard</span>}
          </Button>
          <Button
            variant="ghost"
            className={`w-full justify-start ${!isSidebarOpen && "justify-center px-2"}`}
          >
            <Users className="w-5 h-5 mr-2" />
            {isSidebarOpen && <span>Users</span>}
          </Button>
          <Link href="/posts" className="w-full">
            <Button
              variant="ghost"
              className={`w-full justify-start ${!isSidebarOpen && "justify-center px-2"}`}
            >
              <Activity className="w-5 h-5 mr-2" />
              {isSidebarOpen && <span>Posts</span>}
            </Button>
          </Link>
          <Link href="/photos" className="w-full">
            <Button
              variant="ghost"
              className={`w-full justify-start ${!isSidebarOpen && "justify-center px-2"}`}
            >
              <ImageIcon className="w-5 h-5 mr-2" />
              {isSidebarOpen && <span>Photos</span>}
            </Button>
          </Link>
          <Link href="/payments" className="w-full">
            <Button
              variant="ghost"
              className={`w-full justify-start ${!isSidebarOpen && "justify-center px-2"}`}
            >
              <CreditCard className="w-5 h-5 mr-2" />
              {isSidebarOpen && <span>Payments</span>}
            </Button>
          </Link>
          <Button
            variant="ghost"
            className={`w-full justify-start ${!isSidebarOpen && "justify-center px-2"}`}
          >
            <Settings className="w-5 h-5 mr-2" />
            {isSidebarOpen && <span>Settings</span>}
          </Button>
        </nav>

        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <div className={`flex items-center gap-3 ${!isSidebarOpen && "justify-center"}`}>
            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
              {userName.charAt(0)}
            </div>
            {isSidebarOpen && (
              <div className="text-sm">
                <p className="font-medium">{userName}</p>
                <p className="text-xs text-muted-foreground">Admin</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-20"}`}>
        {/* Header */}
        <header className="h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-10 px-6 flex items-center justify-between">
          <div className="flex items-center gap-4 w-full max-w-md">
            <Search className="w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="bg-transparent border-none focus-visible:ring-0 pl-0"
            />
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <div className="flex items-center gap-2">
              <Button>Download Report</Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2350</div>
                <p className="text-xs text-muted-foreground">+180.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sales</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12,234</div>
                <p className="text-xs text-muted-foreground">+19% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-muted-foreground">+201 since last hour</p>
              </CardContent>
            </Card>
          </div>

          {/* Charts/Recent Activity Area */}
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
            <Card className="col-span-1 lg:col-span-4">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[200px] flex items-center justify-center text-muted-foreground border-2 border-dashed rounded-lg">
                  Chart Placeholder
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-1 lg:col-span-3">
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
                <CardDescription>You made 265 sales this month.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center">
                      <div className="h-9 w-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                        {i}
                      </div>
                      <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">User {i}</p>
                        <p className="text-sm text-muted-foreground">user{i}@example.com</p>
                      </div>
                      <div className="ml-auto font-medium">+$1,999.00</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

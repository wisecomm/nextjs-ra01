"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, LayoutDashboard, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-4">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="relative z-10 max-w-4xl w-full text-center space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
            <Sparkles className="w-3 h-3 mr-1 text-indigo-500" />
            <span>Next.js 16 + Tailwind 4</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-cyan-600 dark:from-indigo-400 dark:to-cyan-400">
            Modern Dashboard
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A premium starting point built with the latest technologies. Experience the power of
            Next.js 16, Tailwind 4, and shadcn/ui.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <Card className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-indigo-100 dark:border-indigo-900/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LayoutDashboard className="w-5 h-5 text-indigo-500" />
                Dashboard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Interactive dashboard with real-time data visualization and responsive layout.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-indigo-100 dark:border-indigo-900/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-500" />
                Modern UI
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Beautifully designed components using shadcn/ui and Tailwind CSS 4.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-indigo-100 dark:border-indigo-900/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-purple-500" />
                Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Optimized for speed and SEO with Next.js 16 server components.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="pt-8">
          <Link href="/dashboard">
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-lg bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

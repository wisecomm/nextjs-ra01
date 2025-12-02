import { Sidebar } from "@/components/dashboard/sidebar";
import { Header } from "@/components/dashboard/header";
import { Footer } from "@/components/dashboard/footer";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40 md:flex-row">
            <Sidebar />
            <div className="flex flex-col flex-1 min-h-screen transition-all duration-300 ease-in-out">
                <Header />
                <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    );
}

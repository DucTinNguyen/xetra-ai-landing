"use client";

import Outlet from "@/components/outlet";
import SideBar from "@/components/sidebar";
import { SidebarProvider } from "@/providers/side-bar.provider";

export default function Home() {

  return (
    <SidebarProvider>
      <main className="flex fixed w-full">
        <SideBar />
        <Outlet />
      </main>
    </SidebarProvider>
    
  );
}

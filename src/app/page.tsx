"use client";
import InformationSocial from "@/components/sub-header";
import Header from "@/components/header";
import { SidebarProvider } from "@/providers/side-bar.provider";

export default function Home() {

  return (
    <main>
      <InformationSocial />
      <Header />
    </main>
  );
}

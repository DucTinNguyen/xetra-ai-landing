"use client";
import InformationSocial from "@/components/sub-header";
import Header from "@/components/header";
import { SidebarProvider } from "@/providers/side-bar.provider";
import Discover from "@/components/discover";
import KeyFeature from "@/components/key-feature";

export default function Home() {

  return (
    <main>
      <InformationSocial />
      <Header />
      <Discover />
      <KeyFeature />
    </main>
  );
}

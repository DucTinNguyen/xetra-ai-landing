"use client";
import InformationSocial from "@/components/sub-header";
import Header from "@/components/header";
import { SidebarProvider } from "@/providers/side-bar.provider";
import Discover from "@/components/discover";
import KeyFeature from "@/components/key-feature";
import Ecosystem from "@/components/ecosystem";
import Unleashing from "@/components/unleashing";
import EarnReward from "@/components/earn-reward";
import Explore from "@/components/explore";
import Decentralize from "@/components/decentralize";
import Footer from "@/components/footer";
import Banner from "@/components/banner";

export default function Home() {

  return (
    <main>
      <InformationSocial />
      <Header />
      <Banner />
      <Discover />
      <KeyFeature />
      <Ecosystem />
      <Decentralize />
      <Explore />
      <Unleashing />
      <EarnReward />
      <Footer />
    </main>
  );
}

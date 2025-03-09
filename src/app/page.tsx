import React from "react";
import Hero from "@/components/Home/Hero";
import People from "@/components/Home/People";
import Features from "@/components/Home/Features";
import Business from "@/components/Home/Business";
import Payment from "@/components/Home/Payment";
import Team from "@/components/Home/Team";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Skillify",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <People />
      <Features />
      <Business />
      <Payment />
      <Team />
    </main>
  );
}

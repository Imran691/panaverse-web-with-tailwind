import CoreTracks from "@/components/widgets/CoreTracks";
import Hero from "@/components/widgets/Hero";
import SpecializedTracks from "@/components/widgets/SpecializedTracks";
import React from "react";

export default function Home() {
  return (
    <div>
      <Hero />
      <CoreTracks/>
      <SpecializedTracks/>
    </div>
  );
}

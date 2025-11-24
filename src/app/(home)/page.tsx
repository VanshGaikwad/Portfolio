
import { SpotlightPreview } from "@/components/SpotlightPreview";
import "../globals.css";
import { TabsDemo } from "@/components/TabsPreview";

import { BentoGridDemo } from "@/components/BentoGrid";
import { BackgroundBeamsDemo } from "@/components/BackgroundBeam";
import { NavbarDemo } from "@/components/Navbar";


export default function Home() {
  return(
  <> 
  <NavbarDemo/>
    <SpotlightPreview/>
    <TabsDemo/>
    <BentoGridDemo/>
    <BackgroundBeamsDemo />
    </>
  );
}

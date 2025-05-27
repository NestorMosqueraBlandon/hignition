import Image from "next/image";
import styles from "./page.module.css";
import { Banner } from "@/sections/Home";
import Services from "@/sections/Home/Services";
import Frequent from "@/sections/Home/Frequent";
import Growth from "@/sections/Home/Growth";
import Sales from "@/sections/Home/Sales";
import CeroToMillion from "@/sections/CeroToMillion";
import Why from "@/sections/Home/Why";
import Timeline from "@/sections/Home/Timeline";

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <Sales />
      <Services />
      <CeroToMillion />
      <Why />
      <Timeline />
      <Frequent />
      <Growth />
    </main>
  );
}

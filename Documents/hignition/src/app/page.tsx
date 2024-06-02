import Image from "next/image";
import styles from "./page.module.css";
import { Banner } from "@/sections/Home";
import Services from "@/sections/Home/Services";
import Frequent from "@/sections/Home/Frequent";
import Growth from "@/sections/Home/Growth";

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <Services />
      <Frequent />
      <Growth />
    </main>
  );
}

"use client";
import styles from "./page.module.css";
import NavBar from "../components/NavBar";

import "./page.module.css";
import { HomeScreen } from "@/components/HomeScreen";
import About from "@/components/About";
import ServiceWeDo from "@/components/ServiceWeDo";
import ProjectsWork from "@/components/ProjectsWork";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar styles={styles}></NavBar>
      <HomeScreen></HomeScreen>
      <About></About>
      <ServiceWeDo> </ServiceWeDo>
      <ProjectsWork> </ProjectsWork>
    </main>
  );
}

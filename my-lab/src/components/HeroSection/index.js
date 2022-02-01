import styles from "./styles.module.css";

import { Header } from "../Header";

export function HeroSection() {
  return (
    <div className={styles.herosection}>
      <Header />
      <h1>Say hello to ReactJS</h1>
      <p>
        You will learn how to use the most popular front-end library, and become
        a super Ninja developer.
      </p>
    </div>
  );
}

import DeclarativeImage from "./assets/images/icon1.png";

import { HeroSection } from "./components/HeroSection";
import { Card } from "./components/Card";
import styles from "./App.module.css";
function App() {
  function duvidaDoBruno() {
    window.alert("To aqui");
  }

  return (
    <>
      <HeroSection />
      <div className={styles.container}>
        <Card
          description="Alguma coisa"
          image={DeclarativeImage}
          title="Declarative"
          function={duvidaDoBruno}
        />

        <Card
          description="coisa alguma"
          image={DeclarativeImage}
          title="Declarative"
        />
        <Card
          description="Treco"
          image={DeclarativeImage}
          title="Declarative"
        />
        <Card
          description="Tapa na pantera"
          image={DeclarativeImage}
          title="Declarative"
        />
      </div>
    </>
  );
}

export default App;

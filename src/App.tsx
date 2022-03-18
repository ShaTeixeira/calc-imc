import styles from "./App.module.css";
import poweredImage from "./assets/powered.png";

const App = () => {
  return(
    <>
    <div className={styles.main}>testando</div>
    <header>
      <div className={styles.headerContainer}>
        <img src={poweredImage} alt="" width={150} />
      </div>
    </header>
    </>
  );
}

export default App;
import styles from "./FirstAba.module.scss";
import { MdTouchApp } from "react-icons/md";

function FirstAba() {
  return (
    <section className={styles.firstAba} id="firstAba">
      <div className={styles.book}>
        <p className={styles.book__text}>
          Aqui traremos o resultado de quando mente e coração se misturam!
        </p>
        <p className={styles.book__text}>
          Criaremos um oceano de possibilidades, e daremos assas a imaginação...
        </p>
        <div className={styles.cover}>
          <p className={styles.firstAba__titulo}>
            Bem Vindo ao <span>Mind.txt</span>
          </p>
          <MdTouchApp />      
        </div>
      </div>
    </section>
  );
}

export default FirstAba;

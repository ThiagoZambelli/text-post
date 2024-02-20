import styles from "./FirstAba.module.scss";

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
          <p className={styles.cover__titulo}>
            Bem Vindo ao <span>Mind.txt</span>
          </p>              
        </div>
      </div>
    </section>
  );
}

export default FirstAba;

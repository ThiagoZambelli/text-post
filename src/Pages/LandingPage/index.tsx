import styles from './LandingPage.module.scss';
import Entrada from './Entrada';
import FirstAba from './FirstAba';

function LandingPage() {
  return (
    <section className={styles.LandingPage}>
        <Entrada />
        <FirstAba />
    </section>
  )
}

export default LandingPage
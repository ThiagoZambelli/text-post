import styles from './LandingPage.module.scss';
import Entrada from './Entrada';
import FirstAba from './FirstAba';
import Footer from '../../components/Footer';

function LandingPage() {
  return (
    <section className={styles.LandingPage}>
        <Entrada />
        <FirstAba />
        <Footer />
    </section>
  )
}

export default LandingPage
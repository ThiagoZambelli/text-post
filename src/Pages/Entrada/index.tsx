import LogoPrincipal from "../../components/LogoPrincipal";
import styles from './Entrada.module.scss';

function Entrada() {
  return (
    <section className={styles.entrada}>
        <LogoPrincipal />
        <span className={styles.entrada__textoLogo}>Mind.txt</span>
    </section>
  )
}

export default Entrada
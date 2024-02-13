import LogoPrincipal from "../../../components/LogoPrincipal";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import styles from "./Entrada.module.scss";

function Entrada() {

  const scrollToId = (id:string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.entrada}>
      <div className={styles.entrada__principal}>
        <LogoPrincipal />
        <span className={styles.entrada__principal__textoLogo}>Mind.txt</span>
      </div>
      <div className={styles.entrada__footer}>
        <i onClick={() => scrollToId('firstAba')}>
          <MdKeyboardDoubleArrowDown />
        </i>
      </div>
    </section>
  );
}

export default Entrada;

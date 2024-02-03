import logo from "../../assets/svg/maind-txt-logo.svg"
import styles from './LogoPrincipal.module.scss';

function LogoPrincipal() {
  return (
    <span className={styles.logo}><img src={logo} alt="Logo do projeto" /></span>
  )
}

export default LogoPrincipal
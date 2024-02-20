import styles from "./Footer.module.scss";
import logo from "../../assets/svg/maind-txt-logo.svg";
import { FaRegCopyright } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Footer() {
    const ir = useNavigate();


  return (
    <footer className={styles.footer}>
      <div className={styles.footer__header}>
        <h2 className={styles.footer__logo} onClick={() => ir('/')}>
          <img src={logo} alt="Logo" />
          Mind.txt
        </h2>
      </div>
      <hr></hr>
      <div className={styles.footer__footer}>
        <FaRegCopyright />
        2024 All rights reserved
      </div>
    </footer>
  );
}

export default Footer;

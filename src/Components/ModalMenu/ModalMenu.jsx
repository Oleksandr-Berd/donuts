import { createPortal } from "react-dom";

import styles from "./ModalMenu.module.css"
import { ReactComponent as LogoSvg } from "../../Utils/images/logo.svg"
import { ReactComponent as CloseSvg } from "../../Utils/images/close.svg";
import NavBar from "../NavBar/NavBar";

const modalRoot = document.querySelector("#modal-root")

const ModalMenu = ({toggleModal}) => {
    return createPortal(
      <div className={styles.content}>
        <div className={styles.menuCon}>
          <LogoSvg className={styles.logo} />
          <button type="button" className={styles.btn} onClick={toggleModal}>
            <CloseSvg className={styles.close } />
          </button>
        </div>
        <NavBar toggleModal={toggleModal} />
      </div>,
      modalRoot
    );
}
 
export default ModalMenu;
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

import styles from "./SocIcons.module.css";

const SocIcons = () => {
  return (
    <div className={styles.socIconsCon}>
      <AiOutlineTwitter size={16} className={styles.icon} />
      <AiOutlineInstagram size={16} className={styles.icon} />
      <FaFacebookF size={16} className={styles.icon} />
    </div>
  );
};

export default SocIcons;

import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

import styles from "./SocIcons.module.css";

const SocIcons = () => {
  return (
    <div className={styles.socIconsCon}>
      <a href="https://twitter.com/UaBerd" className={styles.icon}>
        <AiOutlineTwitter size={20} />
      </a>
      <a
        href="https://www.facebook.com/sasha.berdichevsky"
        className={styles.icon}
      >
        <AiOutlineInstagram size={20} />
      </a>
      <a href="https://www.instagram.com/berd__man/" className={styles.icon}>
        <FaFacebookF size={20} />
      </a>
    </div>
  );
};

export default SocIcons;

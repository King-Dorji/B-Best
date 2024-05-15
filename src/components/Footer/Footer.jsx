import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        <div className={css.left}>
          <span className="primaryText">
            Let's do something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:Info@beyourbest.co.ke">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">
              For More information: 0733432525 | Info@beyourbest.co.ke
            </span>
            <p></p>
          </div>
          <ul className={css.menu}>
            <li>
              <a href="#experties">Home</a>
            </li>
            <li>
              <a href="#work">BTalk</a>
            </li>
            <li>
              <a href="#portfolio">About Us</a>
            </li>
            <li>
              <a href="#people">Executive</a>
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;

import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";

const Footer = () => {
  const handleEmailClick = (e) => {
    e.preventDefault();
    const email = "Info@beyourbest.co.ke";
    const subject = "Inquiry from Be Your Best Website";
    const body = "Hello,\n\nI am reaching out regarding...";

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, "_blank");
  };

  const copyPhoneNumberAndNavigate = () => {
    navigator.clipboard.writeText("+254733432525");
    alert("Phone number copied to clipboard!");
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpened(false);
  };

  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      id="footer"
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
            Start by{" "}
            <a href="mailto:Info@beyourbest.co.ke" onClick={handleEmailClick}>
              saying hi
            </a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">
              For More information call:{" "}
              <span onClick={copyPhoneNumberAndNavigate} className={css.phone}>
                0733432525 |{" "}
              </span>
              <a onClick={handleEmailClick} href="mailto:Info@beyourbest.co.ke">
                Info@beyourbest.co.ke
              </a>
            </span>
          </div>
          <ul className={css.menu}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#portfolio">BTalk</a>
            </li>
            <li>
              <a href="#work">Join</a>
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

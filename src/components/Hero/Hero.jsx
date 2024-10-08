import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";

const Hero = () => {
  const handleEmailClick = (e) => {
    e.preventDefault();
    const email = "Info@beyourbest.co.ke";
    const subject = "Inquiry from Be Your Best Website";
    const body = "Hello,\n\nI am reaching out regarding...";

    // Gmail-specific URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open Gmail in a new tab
    window.open(gmailUrl, "_blank");
  };

  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span
            className="primaryText"
            variants={fadeIn("right", "tween", 0.2, 1)}
          >
            Hey There,
            <br />
            Welcome to Be Your Best
          </motion.span>
          <motion.span
            className="secondaryText"
            variants={fadeIn("left", "tween", 0.4, 1)}
          >
            Building a generation of confident, competent,
            <br />
            and committed young leaders!
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img
            variants={slideIn("up", "tween", 0.5, 1.3)}
            src="./splash.png"
            alt=""
          />
        </motion.div>

        <motion.a
          className={css.email}
          href="mailto:Info@beyourbest.co.ke"
          onClick={handleEmailClick}
          variants={fadeIn("up", "tween", 0.3, 1)}
        >
          Info@beyourbest.co.ke
        </motion.a>

        <div className={css.lowerElements}>
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            className={css.experience}
          >
            <img src="./heartemoji.png" alt="" />
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={css.certificate}
          >
            <img src="./certificate.png" alt="" />
            <span>BRING OUT THE</span>
            <span>BEST IN YOU</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

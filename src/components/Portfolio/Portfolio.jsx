import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import {
  fadeIn,
  staggerChildren,
  textVariant,
  textVariant2,
} from "../../utils/motion";
const Portfolio = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        <motion.div
          variants={textVariant(0.4)}
          className={`flexCenter ${css.heading}`}
        >
          <div>
            <span className="primaryText">Our Latest Articles</span>
            <p style={{ marginTop: "10px" }}>Discover our blogs</p>
          </div>
          <span className="secondaryText">Explore More Articles</span>
        </motion.div>

        <div className={`flexCenter ${css.showCase}`}>
          <motion.img
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            src="MD.jpg"
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            src="Reg.jpg"
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            src="bg.jpg"
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            src="byb.svg"
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.7, 0.6)}
            src="byb.svg"
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.9, 0.6)}
            src="byb.svg"
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.9, 0.6)}
            src="byb.svg"
            alt="project"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;

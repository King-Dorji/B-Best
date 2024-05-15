import React from "react";
import { projectExperience, WhatDoIHelp, Message } from "../../utils/data";
import css from "./Experties.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion.js";
const Experties = () => {
  return (
    <section className={css.wrapper}>
      <a className="anchor" id="experties"></a>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings yPaddings innerWidth flexCenter ${css.container}`}
      >
        {/* left side */}
        <div className={css.leftSide}>
          <div className={css.showCase}>
            <motion.img
              variants={fadeIn("up", "tween", 0.5, 0.6)}
              src="kandie.png"
              alt="project"
            />
          </div>

          {/* {projectExperience.map((exp, i) => {
            return (
              <motion.div
                variants={fadeIn("right", "tween", (i + 1) * 0.2, 1)}
                className={css.exp}
                key={i}
              >
                <div style={{ background: exp.bg }} className="flexCenter">
                  <exp.icon size={25} color="white" />
                </div>
                <div>
                  <span>{exp.name}</span>
                  <span className="secondaryText">{exp.projects} Projects</span>
                </div>
              </motion.div>
            );
          })} */}
        </div>

        {/* right */}
        <motion.div variants={textVariant(0.5)} className={css.rightSide}>
          <span className="primaryText">
            Eng. Kandie`s Message Project manager at Safer Power Ltd (BYB Gold
            Member){" "}
          </span>
        </motion.div>
        {WhatDoIHelp.map((paragraph, i) => (
          <span className="secondaryText" key={i}>
            {paragraph}
          </span>
        ))}
        {Message.map((paragraph, i) => (
          <span className="secondaryText" key={i}>
            {paragraph}
          </span>
        ))}
      </motion.div>
    </section>
  );
};

export default Experties;

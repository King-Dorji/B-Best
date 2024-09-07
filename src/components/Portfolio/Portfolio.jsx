import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant } from "../../utils/motion";
import useWindowSize from "../../hooks/useWindowSize";
import { article } from "../../utils/article";

const Barner = ({ articleData, containerWidth, containerHeight }) => {
  const encodeArticleData = (data) => {
    return encodeURIComponent(JSON.stringify(data));
  };

  const handleClick = (e) => {
    e.preventDefault();
    const section = document.getElementById("experties");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    window.history.pushState(
      null,
      "",
      `#experties?data=${encodeArticleData(articleData)}`
    );
    // Dispatch a custom event to notify the Experties component
    window.dispatchEvent(new CustomEvent("articleDataUpdated"));
  };

  return (
    <div className={css.articleLarge}>
      <a
        className={css.articleLink}
        style={{ height: "24em" }}
        href={`#experties?data=${encodeArticleData(articleData)}`}
        onClick={handleClick}
      >
        <div
          className={css.overlay}
          style={{
            backgroundImage:
              "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
          }}
        />
        <motion.img
          variants={fadeIn("up", "tween", 0.5, 0.6)}
          src={articleData.img}
          className={css.image}
          style={{
            borderRadius: "10px",
            width: `${containerWidth}px`,
            height: `${containerHeight}px`,
            objectFit: "cover",
          }}
          alt={articleData.title}
        />
        <div className={css.articleName}>
          <h2 className={css.articleH2}>{articleData.title}</h2>
          <div className={css.profile}>
            <img
              src={articleData.authorPic}
              style={{
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                objectFit: "cover",
              }}
              className={css.authorImage}
              alt={articleData.author}
            />
            <span className={css.articleSpan}>{articleData.author}</span>
          </div>
        </div>
      </a>
    </div>
  );
};

const Portfolio = () => {
  const [width] = useWindowSize();
  const containerWidth = width < 480 ? 300 : width < 768 ? 500 : 700;
  const containerHeight = width < 480 ? 200 : width < 768 ? 350 : 500;

  return (
    <motion.section
      variants={staggerChildren}
      initial={false}
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
          <a href="#people" className={`secondaryText ${css.anc}`}>
            Explore More Articles
          </a>
        </motion.div>
        <div className={`flexCenter ${css.banner}`}>
          {article.map((articleData, i) => (
            <Barner
              key={i}
              articleData={articleData}
              containerWidth={containerWidth}
              containerHeight={containerHeight}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;

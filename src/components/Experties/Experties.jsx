// import React, { useEffect, useState } from "react";
// import css from "./Experties.module.scss";

// const Experties = () => {
//   const [article, setArticle] = useState(null);

//   const updateArticle = () => {
//     const params = new URLSearchParams(
//       window.location.hash.replace("#experties?", "")
//     );
//     const data = params.get("data");
//     if (data) {
//       try {
//         const parsedData = JSON.parse(decodeURIComponent(data));
//         setArticle(parsedData);
//       } catch (error) {
//         console.error("Error parsing article data:", error);
//       }
//     }
//   };

//   useEffect(() => {
//     updateArticle();
//     window.addEventListener("articleDataUpdated", updateArticle);
//     return () => {
//       window.removeEventListener("articleDataUpdated", updateArticle);
//     };
//   }, []);

//   return (
//     <section id="experties" className={css.wrapper}>
//       <div
//         className={`paddings yPaddings innerWidth flexCenter ${css.container}`}
//       >
//         <div className={css.leftSide}></div>
//         <div className={css.rightSide}>
//           {article ? (
//             <>
//               <div className={css.heading}>
//                 <span className={`primaryText ${css.h1}`}>{article.title}</span>
//                 <div className={css.showCase}>
//                   <img
//                     src={article.authorPic}
//                     alt="project"
//                     style={{
//                       borderRadius: "50%",
//                       width: "200px",
//                       height: "200px",
//                       objectFit: "cover",
//                       boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)",
//                       border: "3px solid rgba(0, 28, 34)",
//                     }}
//                   />
//                 </div>
//                 <span className={`primaryText ${css.hSmall}`}>
//                   {article.author}
//                 </span>
//               </div>
//               {article.content.map((paragraph, i) => (
//                 <span className="secondaryText" key={i}>
//                   {paragraph}
//                 </span>
//               ))}
//             </>
//           ) : (
//             <p>Loading...</p>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experties;

import React, { useEffect, useState, useRef } from "react";
import css from "./Experties.module.scss";

const Experties = () => {
  const [article, setArticle] = useState(null);
  const sectionRef = useRef(null);

  const updateArticle = () => {
    const params = new URLSearchParams(
      window.location.hash.replace("#experties?", "")
    );
    const data = params.get("data");
    if (data) {
      try {
        const parsedData = JSON.parse(decodeURIComponent(data));
        setArticle(parsedData);
        if (sectionRef.current) {
          sectionRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      } catch (error) {
        console.error("Error parsing article data:", error);
      }
    }
  };

  useEffect(() => {
    updateArticle();
    window.addEventListener("articleDataUpdated", updateArticle);
    return () => {
      window.removeEventListener("articleDataUpdated", updateArticle);
    };
  }, []);

  return (
    <section id="experties" className={css.wrapper} ref={sectionRef}>
      <div
        className={`paddings yPaddings innerWidth flexCenter ${css.container}`}
      >
        <div className={css.content}>
          {article ? (
            <>
              <div className={css.heading}>
                <h1 className={`${css.title}`}>{article.title}</h1>
                <div className={css.authorInfo}>
                  <img
                    src={article.authorPic}
                    alt={article.author}
                    className={css.authorPic}
                  />
                  <div className={css.authorDetails}>
                    <span className={css.authorName}>{article.author}</span>
                    <span className={css.authorRank}>{article.rank}</span>
                    <span className={css.articleDate}>{article.date}</span>
                  </div>
                </div>
              </div>
              <div className={css.articleContent}>
                {article.content.map((paragraph, i) => (
                  <p className={css.paragraph} key={i}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experties;

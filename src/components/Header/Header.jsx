import React, { useEffect, useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiPhoneCall, BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../hooks/useHeaderShadow";

const Header = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  // to handle click outside of sidebar on mobile
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  const copyPhoneNumberAndNavigate = () => {
    navigator.clipboard.writeText("+254733432525");
    alert("Phone number copied to clipboard!");

    // Navigate to footer section after copying the number
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpened(false);
  };

  // function to handle closing the menu on small screens
  const handleMenuClick = () => {
    if (window.innerWidth <= 768) {
      setMenuOpened(false);
    }
  };

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`bg-primary paddings ${css.wrapper}`}
      viewport={{ once: true, amount: 0.25 }}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`innerWidth ${css.container} flexCenter`}>
        <div className={css.certificate}>
          <img src="./byb.svg" alt="" />
        </div>

        <ul
          className={`flexCenter ${css.menu}`}
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
        >
          <li onClick={handleMenuClick}>
            <a href="/">Home</a>
          </li>
          <li onClick={handleMenuClick}>
            <a href="#portfolio">BYTalk</a>
          </li>
          <li onClick={handleMenuClick}>
            <a href="#work">Join</a>
          </li>
          <li onClick={handleMenuClick}>
            <a href="#people">Executive</a>
          </li>
          <li
            className={`flexCenter ${css.phone}`}
            onClick={copyPhoneNumberAndNavigate}
          >
            <p>+254733432525</p>
            <BiPhoneCall size={"40px"} />
          </li>
        </ul>

        {/* for medium and small screens */}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;

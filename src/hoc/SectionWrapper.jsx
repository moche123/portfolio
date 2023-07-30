import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import React from "react";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <React.Fragment>
        <motion.section
          variants={staggerContainer()}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.25 }}
          className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        >
          <span className='hash-span' id={idName}></span>

          <Component />
        </motion.section>
      </React.Fragment>
    );
  };

export default StarWrapper;

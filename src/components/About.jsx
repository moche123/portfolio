import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <div className='w-full'>
    <motion.div
      
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
       
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextKnowMe}>Know me</p>
        <h2 className={styles.sectionHeadText}>Introduction.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Hello there! My name is Moisés Miguel Flores from Perú and I love software development. I work focus on web development,
        with tools like Angular, React or Node.js. I have a proven ability to grasp new concepts swiftly and prioritize 
        collaborative efforts with clients. I'm always looking to develop scalable software solutions that effectively address
        real-world challenges and feel so enthusiastic about joining forces to transform ideas into reality!

      </motion.p>

      <div className='mt-20 card-works-container-about gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

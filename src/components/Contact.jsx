import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { github,linkedin,contactcode } from '../assets/index'

const Contact = () => {


  return (
    <div
      className={`xl:mt-10 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75]  p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact me</h3>

        <form
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Professional information</span>
            <div className="flex gap-5">
              <a href="https://github.com/moche123">

                <img className="w-20 h-20" src={github} alt="Moises Github" />
              </a>
              <a href="https://www.linkedin.com/in/mois%C3%A9s-alvin-miguel-flores-1463001ab/">

                <img className="w-20 h-20" src={linkedin} alt="Moises LinkedIn" />
              </a>
            </div>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Email</span>
            <input
              type='email'
              name='email'
              disabled
              placeholder="mochemiguel@gmail.com"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
        </form>
      </motion.div>

      <motion.div
       variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:mt-20'
      >
        <img className="contact-code" src={contactcode} alt="contact_code" />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

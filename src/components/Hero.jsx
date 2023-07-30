
import { styles } from "../styles";
import { author } from '../assets/index'
import React from "react";

const Hero = () => {
  return (
    <React.Fragment>

      <section className={`relative mb-20 w-full mx-auto`}>
        <div
          className={`relative inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-col md:flex-row items-center gap-5`}
        >
          <div className='flex-col justify-center items-center self-start mt-5 hidden md:flex'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>
          <div className="mr-2">
            <img className="img-author" src={author} alt="Moises Photo" />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#915EFF]'>Moisés</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Full stack developer with 3+ years experience crafting engaging interfaces and building web applications
            </p>
          </div>
          
        </div>
      </section>
    </React.Fragment>
  );
};

export default Hero;

import HeroSection from '@/Global/HeroSection';
import ContactSection from './ContactSection';
import Styles from '../../Global/Styles/sectionDivider.module.less';

export default function Root() {
  return (
    <>
      <HeroSection
        title="Contact Us"
        image="https://static.wixstatic.com/media/84770f_eb5d4f35053142f18549ac540e039722~mv2_d_5969_4273_s_4_2.jpg"
        mobileImage="https://static.wixstatic.com/media/84770f_eb5d4f35053142f18549ac540e039722~mv2_d_2000_1300_s_4_2.jpg"
        scrollTarget="#ContactSection"
      />

      <div
        className={Styles.sectionDivider}
        data-aos="fade-in"
        data-aos-delay="200"
      />

      <ContactSection />
    </>
  );
}

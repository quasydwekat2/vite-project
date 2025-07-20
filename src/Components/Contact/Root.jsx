import ContactHero from './ContactHero';
import ContactForm from './ContactSection';
import ContactSection from './ContactSection';
import Styles from '@/Global/sectionDivider.module.less';

export default function Root() {
  return (
    <>
      <ContactHero />
      <div
        className={Styles.sectionDivider}
        data-aos="fade-in"
        data-aos-delay="200"
      />
      <ContactSection />
    </>
  );
}

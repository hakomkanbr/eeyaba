import LogoSearchSection from "./logo-search-section";
import SecoudSection from "./second-section";
import PrintSection from "./print-setion";
import MediaSection from "./media-section";
import ProgramingSection from "./programing-setion";
import CustumerOpenionSection from "./custumer-openion";
import OurWorkSection from "./our-work-section";
import Navbar from "@/components/navbar";
import InformationEyyabaa from "./information-eyyabaa";
import ContactEyyabaa from "./contact-eyyabaa";
import Footer from "./footer-eyyabaa";

const ParallaxScroll = () => {
  return (
    <main className="wrapper">
      {/* <section id="section1" className="section fixed">A</section>
      <section id="section2" className="section layer">A</section>
      <section id="section3" className="section layer">A</section>
      <section id="section4" className="section layer">A</section>
      <section id="section5" className="section layer">A</section>
      <section id="section6" className="section layer">A</section> */}
      <section id="section1" className="section fixed">
        <Navbar/>
        <LogoSearchSection />
        <SecoudSection />
      </section>
      <section id="section2" className="section layer"><MediaSection /></section>
      <section id="section3" className="section layer flex items-center"><PrintSection /></section>
      <section id="section4" className="section layer flex items-center"><ProgramingSection /></section>
      {/* <section id="section5" className="section layer flex items-center"><CustumerOpenionSection /></section> */}
      <section id="section6" className="section layer flex items-center"><OurWorkSection /></section>
      <section id="section7" className="section layer flex items-center"><InformationEyyabaa /></section>
      <section id="section8" className="section layer flex items-center"><ContactEyyabaa /></section>
      <section id="section9" className="section layer flex items-end"><Footer /></section>
      {/* <CustumerOpenionSection />
      <OurWorkSection />
      <InformationEyyabaa />
      <ContactEyyabaa />
      <Footer /> */}
    </main>
  );
};
export default ParallaxScroll;

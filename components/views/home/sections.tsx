"use client";
import React from "react";
import LogoSearchSection from "./logo-search-section";
import SecoudSection from "./second-section";
import PrintSection from "./print-setion";
import MediaSection from "./media-section";
import ProgramingSection from "./programing-setion";
import MediaSectionIcon from "./media-section-icon/index";
import InformationEyyabaa from "./information-eyyabaa/index";
import ContactEyyabaa from "./contact-eyyabaa/index"
import Footer from "./footer-eyyabaa/index"
const Sections = () => {
  return (
    <div>
      <LogoSearchSection />
      <SecoudSection />
      <MediaSection />
      <PrintSection />
      <ProgramingSection />
      <MediaSectionIcon />
      <InformationEyyabaa/>
      <ContactEyyabaa/>
      <Footer/>
    </div>
  );
};

export default Sections;

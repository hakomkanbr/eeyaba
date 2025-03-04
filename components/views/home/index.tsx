import SecoudSection from "./second-section";
import LogoSearchSection from "./logo-search-section/index";
import MediaSection from "./media-section";
import PrintSection from "./print-setion";
import ProgramingSection from "./programing-setion";

export default function HomeView() {
  return (
    <main>
      <LogoSearchSection />
      <SecoudSection />
      <MediaSection />
      <PrintSection />
      <ProgramingSection />
    </main>
  );
}

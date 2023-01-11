import MainNav from "../MainNav";
import Hero from "../Hero";
import Features from "../Features";
import Banner from "../Banner";
import Footer from "../Footer";
import mobileIntroRightPatternUrl from "../../assets/bg-pattern-intro-right-mobile.svg";
import introLeftBgPattern from "../../assets/bg-pattern-intro-left-desktop.svg";

function App() {
  return (
    <div className="2xl:container mx-auto font-body text-base">
      <header>
        <MainNav />
      </header>
      <main className="pb-36 relative">
        <Hero />
        <div className="hidden xl:block absolute top-[500px]">
          <img src={introLeftBgPattern} alt="" />
        </div>
        <div className="sm:px-36 md:px-48 lg:px-80 xl:px-36 xl:pt-56">
          <Features />
          <Banner />
        </div>
        <div className="absolute top-[30%] right-0 xl:hidden">
          <img src={mobileIntroRightPatternUrl} alt="" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

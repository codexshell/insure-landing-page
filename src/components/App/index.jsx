import MainNav from "../MainNav";
import Hero from "../Hero";
import Features from "../Features";
import Banner from "../Banner";
import Footer from "../Footer";
import mobileIntroRightPatternUrl from "../../assets/bg-pattern-intro-right-mobile.svg";

function App() {
  return (
    <div className="font-body text-base">
      <header>
        <MainNav />
      </header>
      <main className="pb-36 relative">
        <Hero />
        <div className="sm:px-36 md:px-48">
          <Features />
          <Banner />
        </div>
        <div className="absolute top-[30%] right-0">
          <img src={mobileIntroRightPatternUrl} alt="" />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

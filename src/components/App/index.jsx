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
      <main className="pb-36">
        <div className="absolute right-0 top-[110%]">
          <img src={mobileIntroRightPatternUrl} alt="" />
        </div>
        <Hero />
        <Features />
        <Banner />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

import MainNav from "../MainNav";
import Hero from "../Hero";
import Features from "../Features";
import Banner from "../Banner";
import Footer from "../Footer";

function App() {
  return (
    <div className="font-body text-base">
      <header>
        <MainNav />
      </header>
      <main className="pb-36">
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

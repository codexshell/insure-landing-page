import MainNav from "../MainNav";
import Hero from "../Hero";
import Features from "../Features";
import Banner from "../Banner";

function App() {
  return (
    <div className="font-body text-base">
      <header>
        <MainNav />
      </header>
      <main>
        <Hero />
        <Features />
        <Banner />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;

import MainNav from "../MainNav";
import Hero from "../Hero";
import Features from "../Features";

function App() {
  return (
    <div className="font-body text-base">
      <header>
        <MainNav />
      </header>
      <main>
        <Hero />
        <Features />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;

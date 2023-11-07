import "./App.css";
import { Header } from "./components/header/header";
import "./fonts/fonts.css";
import { Hero } from "./components/hero/hero";
import { Skills } from "./components/skills/skills";
import { Works } from "./components/works/works";
import { Footer } from "./components/footer/footer";

function App() {
  return (
    <div>
      <Header />
        <Hero />
        <Skills/>
        <Works/>
        <Footer/>
    </div>
  );
}

export default App;

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
export default function Home() {
  return (
    <main>
      <Header />
      <Hero/>
      <About/>
      <Services/>
      <Contact/>
      
    </main>
  );
}
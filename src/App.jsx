import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import HowItWorks from "./components/HowItWorks";
import Featured from "./components/Featured";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-inter antialiased bg-white text-[#0B1B4C]">
      <Header />
      <main>
        <Hero />
        <Categories />
        <HowItWorks />
        <Featured />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;

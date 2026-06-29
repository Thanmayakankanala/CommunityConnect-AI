import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Stats from "../components/Stats/Stats";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
      <WhyChooseUs />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;
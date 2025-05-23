import Hero from "../components/sections/Hero";
import Footer from "../components/sections/Footer"

const HomePage = () => {
  return (
    <div className="bg-black">
      <Hero />
     {/* <Footer bg="bg-pink-800" /> */}
     <Footer />
    </div>
  );
};

export default HomePage;

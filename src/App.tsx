import Feedback from "./components/Feedback";
import Foods from "./components/Foods";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Services from "./components/Services";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Foods />
      <Offers />
      <Services />
      <Feedback />
      <Footer />
    </div>
  );
};

export default App;

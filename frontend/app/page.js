import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Destination from "./components/Destination/Destination";
import Info from "./components/Info/Info";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Destination />
      <Form />
      <Info
        img={["/images/location.svg", "/images/currency.svg", "/images/explore.svg"]}
        head={["Handpicked Destinations", "Best Value for Money", "Personalized Recommendations"]}
        des={[
          "We've carefully selected the best destinations across India that offer extraordinary experiences.",
          "Get the most out of your travel budget with our carefully curated packages and transparent pricing.",
          "Receive customized travel suggestions based on your unique preferences and interests."
        ]}
        bg = {""}
      />
      <Footer />
    </div>
  );
}

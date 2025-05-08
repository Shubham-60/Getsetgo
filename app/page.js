import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Destination from "./components/Destination/Destination";
import Info from "./components/Info/Info";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Destination/>
      <Form/>
      <Info/>
      <Footer/>
    </div>
  );
}

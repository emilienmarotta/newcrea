import Header from "./Header/Header";
import Presentation from "./Body/Presentation";
import Offers from "./Body/Offers";
import Processus from "./Body/Processus";
import Footer from "./Footer/Footer";
import UpArrow from "./UpArrow";

export default function App() {
  return (
    <>
      <Header />
      <Presentation />
      <Offers />
      <Processus />
      {/* <UpArrow /> */}
      <Footer />
    </>
  );
}

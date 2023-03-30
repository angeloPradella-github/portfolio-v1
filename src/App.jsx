// ----------CSS-------------
import "./css/app.css";
import "./css/index.css";
// ----------PAGES-------------
import Index from "./pages/Index";
// ----------COMPONENTS-------------
import Socials from "./components/Socials";
import SwitchContainer from "./components/SwitchContainer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Zoom from "./components/Zoom";

import { Helmet } from "react-helmet";
import personSchemaLD from "./Meta/personSchemaLD.js";

function App() {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">{personSchemaLD}</script>
      </Helmet>
      <Zoom zoom="125%" />
      <Navbar />
      <main className="app-layout">
        <Index />
        <SwitchContainer />
        <Socials />
      </main>
      <Footer />
    </>
  );
}

export default App;

// ----------CSS-------------
import "./css/app.css";
import "./css/index.css";
// ----------PAGES-------------
import Index from "./pages/Index";
// ----------COMPONENTS-------------
import Socials from "./components/Socials";
import SwitchContainer from "./components/SwitchContainer";
import Navbar from "./components/Navbar";
import Zoom from "./components/Zoom";

function App() {
  return (
    <>
      <Zoom zoom="125%" />
      <Navbar />
      <main className="app-layout">
        <SwitchContainer />
        <Socials />

        <Index />
      </main>
      <footer className="h-screen"></footer>
    </>
  );
}

export default App;

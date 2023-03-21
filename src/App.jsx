// ----------CSS-------------
import "./css/app.css";
import "./css/index.css";
// ----------PAGES-------------
import Index from "./pages/Index";
// ----------COMPONENTS-------------
import Socials from "./components/Socials";
import SwitchContainer from "./components/SwitchContainer";

function App() {
  return (
    <main className="app-layout">
      <SwitchContainer />
      <Socials />

      <Index />
    </main>
  );
}

export default App;

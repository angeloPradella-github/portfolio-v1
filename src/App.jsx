// ----------CSS-------------
import "./css/app.css";
import "./css/index.css";
// ----------PAGES-------------
import Index from "./pages/Index";
// ----------COMPONENTS-------------
import Socials from "./components/Socials";

function App() {
  return (
    <main className="app-layout">
      <Socials />

      <Index />
    </main>
  );
}

export default App;

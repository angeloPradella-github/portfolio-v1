// ----------CSS-------------
import "./css/app.css";
import "./css/index.css";
// ----------PAGES-------------
import Index from "./pages/Index";
// ----------COMPONENTS-------------
import Socials from "./components/Socials";
import EmailLink from "./components/EmailLink";

function App() {
  return (
    <main className="app-layout">
      {/* <EmailLink /> */}
      <Socials />

      <Index />
    </main>
  );
}

export default App;

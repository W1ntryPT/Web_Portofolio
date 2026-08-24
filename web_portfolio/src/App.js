import { HomePage } from "./pages";
import "./App.css";
import { LanguageProvider, PageProvider } from "./contexts";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    if (window.location.hostname === "w1ntrypyt.github.io") {
      window.location.replace("https://dferreira.pt");
    }
  }, []);
  return (
    <div className="App">
      <PageProvider>
        <LanguageProvider>
          <HomePage />
        </LanguageProvider>
      </PageProvider>
    </div>
  );
}

export default App;

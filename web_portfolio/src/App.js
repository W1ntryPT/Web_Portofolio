import {HomePage} from './pages'
import './App.css';
import { LanguageProvider } from './contexts';

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <HomePage/> 
      </LanguageProvider>
    </div>
  );
}

export default App;

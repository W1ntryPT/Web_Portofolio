import {HomePage} from './pages'
import './App.css';
import { LanguageProvider } from './contexts';

function App() {
  return (
    <div className="App">
      <div className='background-noise'></div>
      <LanguageProvider>
        <HomePage/> 
      </LanguageProvider>
    </div>
  );
}

export default App;

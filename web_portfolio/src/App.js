import {HomePage} from './pages'
import './App.css';
import { LanguageProvider, PageProvider } from './contexts';

function App() {
  return (
    <div className="App">
      <div className='background-noise'></div>
      <PageProvider>
      <LanguageProvider>
        <HomePage/> 
      </LanguageProvider>
      </PageProvider>
    </div>
  );
}

export default App;

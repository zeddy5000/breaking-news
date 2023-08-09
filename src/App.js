
import './App.css';
import {NewsContextProvider} from './NewsContext';
import NewsTile from './components/NewsTile';

function App() {
  return (
    <div className="App">
     <h1>Breaking News </h1>
     <NewsContextProvider>
      <NewsTile/>
     </NewsContextProvider>
  
    </div>
  );
}

export default App;

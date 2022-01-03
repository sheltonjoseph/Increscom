
import './App.css';

import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <Topbar/>
    <Home/>
     
    </div>
  );
}

export default App;

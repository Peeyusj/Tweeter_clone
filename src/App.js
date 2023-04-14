import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App" >
    <div className='main'>
        <div className="sidebar">
          <Sidebar/>
     </div>
        <div className="flex2">
           <Navbar/>
           <Home/>
        </div>
    </div>
    </div>
  );
}

export default App;

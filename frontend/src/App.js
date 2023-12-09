import logo from './logo.svg';
import './App.css';
import Navbar from './pages/navbar/Navbar';
import AllRoutes from './pages/AllRoutes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <ToastContainer />
    </div>
  );
}

export default App;

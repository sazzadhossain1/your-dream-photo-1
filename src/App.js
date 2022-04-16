import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Service from './components/Service/Service';
import About from './components/About/About';
import CheckOut from './components/CheckOut/CheckOut';

function App() {
  return (
    <div className="App">
      <Header></Header>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/service' element={<Service></Service>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/checkOut' element={<CheckOut></CheckOut>}></Route>
      </Routes>



      <Footer></Footer>
    </div>
  );
}

export default App;

import './App.css';
import {BrowserRouter, Routes, Route} from  'react-router-dom'
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Payment from './components/Payment/Payment';


function App() {
  return (
    <div className="App">      
      <BrowserRouter>    
      <Navbar/>   
      <Header/>  
        <Routes> 
          <Route path='/' element={<Home/>}/> 
          <Route path='/products' element={<Products/>}/> 
          <Route path='/cart' element={<Cart/>}/> 
          <Route path='/payment' element={<Payment/>}/> 
          <Route path='/' element={<Home/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

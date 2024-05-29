
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Head from './components/Head';
import ProductView from './components/ProductView'
import Product from './components/Product';

function App() {
  return (
    <div className="App">
     <Head/>
     <Routes>
     <Route path='/' element={<ProductView/>}/>
     <Route path='/view/:id' element={<Product/>}/>
     
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;

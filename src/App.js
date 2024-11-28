import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './templates/Header';
import ViewProduct from './includes/ViewProduct';
import AddProduct from './includes/AddProduct';

function App() {
  return (
    <div className="App">
       <h1>react home loan....!</h1>
      <BrowserRouter>
      <Header/>
      <div className='background'>
            <Routes>
                 <Route path="/" element={<ViewProduct/>}>ViewProduct</Route>
                 <Route path="/add" element={<AddProduct/>}>AddProduct</Route>
                 <Route path="/view" element={<ViewProduct/>}>ViewProduct</Route>
            </Routes>
            </div>
      
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;

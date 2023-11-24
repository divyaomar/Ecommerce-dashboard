 
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import PrivateComponent from './components/PrivateComponent';
import UpdateComponent from './components/UpdateComponent';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
<Routes>
  <Route element ={<PrivateComponent />}>
<Route path="/" element={<ProductList />} />
<Route path="/add" element={<AddProduct />} />
<Route path="/update/:id" element={<UpdateComponent />} />
<Route path="/logout" element={<h1>logout listing Component</h1>} />
<Route path="/profile" element={<h1>Profile listing Component</h1>} />
</Route>
<Route path="/signup" element={<SignUp />}/>
<Route path="/login" element={<Login />} />
</Routes>
     </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;

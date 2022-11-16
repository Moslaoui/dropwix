import './App.css';
import Layout from './components/layout/Layout';
import Products from './pages/products/Products';
import { Routes, Route} from 'react-router-dom';
import '@tremor/react/dist/esm/tremor.css';
import {createContext, useState} from 'react'
import Home from './pages/home/Home';
import Saved from './pages/saved/Saved';

export const ToggleContext = createContext()

function App(props) {
  
  const [isActive, setIsActive] = useState(false)


  const handleToggle = event => {
    setIsActive(current => !current)
  };

  return (
    <ToggleContext.Provider value={{isActive,handleToggle}}>
    <Layout>
      <Routes>
        <Route path='/'>
          <Route index element = { <Home></Home> }></Route>
          <Route path='products' element= { <Products></Products>}></Route>
          {/* <Route path='saved' element= { <Saved></Saved> }></Route> */}
        </Route>
      </Routes>
    </Layout>
    </ToggleContext.Provider>
    
  );
}

export default App;

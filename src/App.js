import './App.css';
import Layout from './components/layout/Layout';
import Products from './pages/products/Products';
import { Routes, Route} from 'react-router-dom';
import '@tremor/react/dist/esm/tremor.css';
import {createContext, useState} from 'react'


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
        <Route path='/' >
          <Route index element= { <Products></Products>} ></Route>
        </Route>
      </Routes>
    </Layout>
    </ToggleContext.Provider>
    
  );
}

export default App;

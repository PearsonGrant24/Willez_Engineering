import React, {useEffect} from 'react';
import RoutePath from './routes/RoutePath.tsx';
import './assets/App.scss';
//import  Footer  from './components/layout/footer/Footer.tsx';
//import Header  from './components/layout/header/Header.tsx';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home.tsx';
import Header from './components/header/Header.tsx';
import Footer from './components/footer/Footer.tsx';

// type AppProps = {
//   basename: string
// }

const App = () => {
    
    return (
    
      <BrowserRouter>
          <Header/>
          {/* <Header/ */}
          {/* <Route path = '/' element={() => <Home/>} /> */}
          <RoutePath />
          
          <Footer/>
        
          </BrowserRouter>
    
  );
  
}

export default App;

import React, {useEffect} from 'react';
import RoutePath from './routes/RoutePath.tsx';
import './assets/App.scss';
//import  Footer  from './components/layout/footer/Footer.tsx';
//import Header  from './components/layout/header/Header.tsx';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home.tsx';
import Header from './components/header/Header.tsx'
//import Home from './components/Home.tsx';

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
          {/* <Header> */}
            {/* <> */}
                {/*  Logo, Header navigation, Search   */}
            {/* </>
              div
          </Header> */}
          {/* <div className='page d-flex flex-row flex-column-fluid'> */}
          
          {/* <Header/ */}
        
          </BrowserRouter>
    
  );
  
}

export default App;

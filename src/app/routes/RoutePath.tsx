import React, { Suspense, lazy } from 'react';
import { Routes,  Route, Router } from 'react-router-dom';
// const Home = lazy(() => import("../components/pages/Home.tsx"));
import Home from '../components/Home.tsx';
import About from '../components/About.tsx';


const RoutePath = () => {
 
	return (
		// <Suspense fallback={<Loader />}>
		// <BrowserRouter>
		
		<Routes>
        <Route path="/" element={<Home />} />
		<Route path="/Home" element={<Home />} />
		<Route path="/About" element={<About />} />

        </Routes>
		
		// </BrowserRouter>
		// </Suspense>
	);
	
};

export default RoutePath;


// import Entrada from "./Pages/Entrada";
import LandingPage from "./Pages/LandingPage";


import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";


function RouteAPP() {
  
  return (
    <Suspense fallback={<div>Ola</div>}>
			<Routes>
				<Route path="/" element={<LandingPage />} />				
				<Route path="*" element={<div>ERRO!</div>} />						
			</Routes>
		</Suspense>
  );
}

export default RouteAPP;

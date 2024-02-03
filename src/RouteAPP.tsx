
// import Entrada from "./Pages/Entrada";
import Entrada from "./Pages/Entrada";
import PaginaBase from "./Pages/PaginaBase";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";


function RouteAPP() {
  
  return (
    <Suspense fallback={<div>Ola</div>}>
			<Routes>
				<Route path="/" element={<PaginaBase />}>
					<Route index element={<Entrada />} />					
				</Route>
				<Route path="*" element={<div>ERRO!</div>} />						
			</Routes>
		</Suspense>
  );
}

export default RouteAPP;

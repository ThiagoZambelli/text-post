import RouteAPP from "./RouteAPP"
import ScrollToTop from './components/ScrollToTop'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import './styles/reset.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
		<BrowserRouter>
			<ScrollToTop />
			<RecoilRoot>
				<RouteAPP />
			</RecoilRoot>
		</BrowserRouter>
	</React.StrictMode>,
)

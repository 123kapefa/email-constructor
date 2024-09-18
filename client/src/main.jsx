import { Layout } from 'lucide-react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/layout/header/Header.jsx'
import {Home} from "./pages/Home.jsx";
import { Provider } from './Provider.jsx'

createRoot(document.getElementById('root')).render(
    // <StrictMode>
    //   <Home />
    // </StrictMode>,
  <StrictMode>
    <Layout>
      <div className='App'>
				<h1>Vite + React</h1>
				<div className='card'>
					<button >
						count is 0
					</button>
					<p>
						Edit <code>src/App.jsx</code> and save to test HMR
					</p>
				</div>
				<p className='read-the-docs'>
					Click on the Vite and React logos to learn more
				</p>
			</div>
    </Layout>
  </StrictMode>,
	//     <StrictMode>
  //     <Layout />
  //   </StrictMode>,
)

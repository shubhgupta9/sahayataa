import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home, Search, Admin } from "./pages"
import { ToastContainer } from "react-toastify"
import "./app.css"
import "react-toastify/dist/ReactToastify.css"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Navbar from "./components/Navbar/navbar"
import Dashboard from "./components/Dashboard/Dashboard"
import Footer from "./components/Footer/Footer"
import ContactUs from "./components/ContactUs/ContactUs"

function App() {
	return (
		<>
		<Navbar/>
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/search" element={<Search />} />
					<Route path="/admin" element={<Admin />} />
					<Route path="/dashboard" element={<Dashboard/>}/>
					<Route path="/contact" element={<ContactUs/>}/>
					
				</Routes>
			</Router>
			<ToastContainer
				position="bottom-right"
				autoClose={7000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
				
			/>
			<Footer/>
		</div>
		</>
	)
}

export default App

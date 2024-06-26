import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'

import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Portfolio from './pages/portfolio/Portfolio'
import Contact from './pages/contact/Contact'
import Themes from './components/themes/Themes'

import './App.scss'

function App() {
	return (
		<BrowserRouter basename="/Pavlo_Kovalenko">
			<Navbar />
			<Themes />
			<Routes>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="portfolio" element={<Portfolio />} />
				<Route path="contact" element={<Contact />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App

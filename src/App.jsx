import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Project02 from './pages/Project02'
import MangoFarm from './pages/MangoFarm'
import FishFarm from './pages/FishFarm'
import GoatFarm from './pages/GoatFarm'
import GuavaFarm from './pages/GuavaFarm'
import BananaFarm from './pages/BananaFarm'
import PapayaFarm from './pages/PapayaFarm'
import PoultryFarm from './pages/PoultryFarm'
import TapiocaFarm from './pages/TapiocaFarm'
import RambutanFarm from './pages/RambutanFarm'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Services />} />
        <Route path="our-farms" element={<Project02 />} />
        <Route path="mango-farm" element={<MangoFarm />} />
        <Route path="fish-farm" element={<FishFarm />} />
        <Route path="goat-farm" element={<GoatFarm />} />
        <Route path="guava-farm" element={<GuavaFarm />} />
        <Route path="banana-farm" element={<BananaFarm />} />
        <Route path="papaya-farm" element={<PapayaFarm />} />
        <Route path="poultry-farm" element={<PoultryFarm />} />
        <Route path="tapioca-farm" element={<TapiocaFarm />} />
        <Route path="rambutan-farm" element={<RambutanFarm />} />
      </Route>
    </Routes>
  )
}

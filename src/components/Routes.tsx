import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { Home, NotFound, About } from "../pages"
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Routers

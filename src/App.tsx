import React from "react"
import { BrowserRouter } from "react-router-dom"

import { NavigationBar, Routes } from "./components/index"
function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes />
    </BrowserRouter>
  )
}

export default App

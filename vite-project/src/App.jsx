
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Home } from "./Home"
import { NotFound } from "./NotFound"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}


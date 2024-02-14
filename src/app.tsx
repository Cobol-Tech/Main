import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export function App() {

  return (
    <>
      {/* Background */}
      <div className="inset-0 opacity-5 absolute z-[-1] bgGrid"></div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

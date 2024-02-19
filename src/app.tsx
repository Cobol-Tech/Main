import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

export function App() {

  return (
    <>
      {/* Background */}
      <div className="inset-0 opacity-5 absolute z-[-1] bgGrid"></div>
      <BrowserRouter>
        <div className="flex flex-col items-center justify-start">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>

    </>
  )
}

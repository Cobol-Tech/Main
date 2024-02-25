import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import Hive from "./pages/Hive"

export function App() {

  return (
    <>
      {/* Background */}
      <div className="inset-0 opacity-5 absolute z-[-1] bgGrid"></div>
      <BrowserRouter>
        <div className="p-2 flex flex-col w-full max-w-screen-md gap-6" >
          <div>
            <Logo />
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hive" element={<Hive />} />
          </Routes>
        </div>
      </BrowserRouter>

    </>
  )
}

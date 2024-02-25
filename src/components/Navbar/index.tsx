import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-2 py-[0.125rem]  border-t-2 border-slate-800 flex-grow" >
      <Link to="/"><h1 className="flex-grow text-sm font-medium">Home</h1></Link>
      <Link to="/hive"><h1 className="flex-grow text-sm font-medium">Hive</h1></Link>
      {/* <Link><h1 className="flex-grow text-sm font-medium">Article</h1></Link>
      <Link><h1 className="flex-grow text-sm font-medium">About</h1></Link> */}
    </div>
  )
};

export default Navbar;
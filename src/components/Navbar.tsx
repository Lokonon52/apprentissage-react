import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-sky-700 text-white shadow-md">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold">
          <Link to="/">App</Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link to="/me/users" className="hover:underline">
              Users
            </Link>
          </li>
          <li>
            <Link to="/me/demandes" className="hover:underline">
              Demandes
            </Link>
          </li>
          <li>
            <Link to="/me/familles" className="hover:underline">
              Familles
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Famille from "../../components/Famille";
type Geo = {
  lat: string;
  lng: string;
};

type Address = {
  city: string;
  street: string;
  zipcode: string;
  geo: Geo;
};

type Membre = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
};

type Membres = Membre[];

export default function Familles() {
  const [users, setUsers] = useState<Membres>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <section>
      <h2 className="mt-4">Liste des membres de la famille</h2>
      <ul className="container mx-auto mt-16 gap-4 grid sm:grid-cols-1 md:grid-cols-2 mb-10">
        {users.map(({ id, name, username, email, address }) => (
          <li key={id}>
            <Link to={`/me/famille/${id}`}>
            <Famille
              id={id}
              name={name}
              username={username}
              email={email}
              address={address}
              geo={address.geo}
            />
            </Link>
            
          </li>
        ))}
      </ul>
    </section>
  );
}

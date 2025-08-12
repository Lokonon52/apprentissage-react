import { useState,useEffect } from "react";
import User from "../../components/User";
import { USERS } from "../../utils/data/index";

type Sexe = "homme" | "femme";

export type UserType = {
  id: number;
  name: string;
  email: string;
  sexe?: Sexe;
  avatar: string;
};

  
export const Users = () => {

  // État local pour stocker les utilisateurs triés
  const [usersSorted, setUsersSorted] = useState<UserType[]>([...USERS]);
  //const [userFiltered, setUserFiltered] = useState<UserType[]>([...users]);
  // Fonction de tri par sexe
  const sortBySex = (sexeChoisi: Sexe) => {
    const sortedS = [...USERS].sort((a: UserType, b: UserType) => {
      if (a.sexe === sexeChoisi && b.sexe !== sexeChoisi) return -1;
      if (a.sexe !== sexeChoisi && b.sexe === sexeChoisi) return 1;
      return 0;
    });
    setUsersSorted(sortedS); // Mise à jour de l'état => déclenche le rendu
  };
  //Fonction de tri nom
  const sortByNom = () => {
    const sortedN = [...USERS].sort((a: UserType, b: UserType) => {
      if (a.name.trim().toLowerCase() < b.name.trim().toLowerCase()) return -1;
      if (a.name.trim().toLowerCase() > b.name.trim().toLowerCase()) return 1;
      return 0;
    });
    setUsersSorted(sortedN); // Mise à jour de l'état => déclenche le rendu
  };
  //Fonction de filtre  par nom
  const [allUsers] = useState<UserType[]>([...USERS]);
  const filterName = (inputValue: string) => {
    if (inputValue.trim() === "") {
      setUsersSorted([...USERS]);
    } else {
      let filterTab = allUsers.filter((user: UserType) => {
        return user.name
          .trim()
          .toLowerCase()
          .includes(inputValue.toLowerCase());
      });
      setUsersSorted(filterTab);
    }
  };
  return (
    <main>
      <nav className="flex  flex-col md:flex-row   items-center justify-between max-w-screen-lg  ">
        <div className="">
          <input
            id="name"
            type="text"
            name="Search"
            placeholder="Chercher un nom"
            className="block w-full max-w-md md:w-96 px-2  ml-5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400  sm:text-sm/6"
            onChange={(e) => filterName(e.target.value)}
          />
        </div>
        <div className="my-6 flex  flex-col md:flex-row justify-end gap-5">
          <span className="font-semibold">Trier par :</span>
          <button
            className="bg-emerald-300 border-solid border-zinc-400 border-2 rounded-lg px-3 hover:bg-emerald-100"
            type="button"
            onClick={() => sortBySex("homme")} // tri par homme
          >
            HOMME
          </button>
          <button
            className="bg-yellow-400 border-solid border-zinc-400 border-2 rounded-lg px-3 hover:bg-yellow-100"
            type="button"
            onClick={() => sortBySex("femme")} // tri par femme
          >
            FEMME
          </button>
          <button
            className="bg-red-200 border-solid border-zinc-400 border-2 rounded-lg px-3 hover:bg-red-100"
            type="button"
            onClick={() => sortByNom()} // tri par nom
          >
            NOM
          </button>
        </div>
      </nav>

      <section className="   container mx-auto mt-16 gap-4 grid gap-3 text-black sm:grid-cols-1 md:grid-cols-2 mb-10">
        {usersSorted.map(({ id, name, email, sexe, avatar }: UserType) => (
          <User
            key={id}
            avatar={avatar}
            name={name}
            email={email}
            sexe={sexe}
            id={id}
          />
          
        ))}
      </section>
 

    </main>
  );
};

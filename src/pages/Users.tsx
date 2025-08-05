import { useState } from "react";
import User from "../components/User";

type Sexe = "homme" | "femme";

export type UserType = {
  id: number;
  name: string;
  email: string;
  sexe?: Sexe;
  avatar: string;
};

type Props = {
  users: UserType[];
};

export const Users = ({ users }: Props) => {
  // État local pour stocker les utilisateurs triés
  const [usersSorted, setUsersSorted] = useState<UserType[]>([...users]);

  // Fonction de tri
  const sortBy = (sexeChoisi: Sexe) => {
    const sorted = [...users].sort((a, b) => {
      if (a.sexe === sexeChoisi && b.sexe !== sexeChoisi) return -1;
      if (a.sexe !== sexeChoisi && b.sexe === sexeChoisi) return 1;
      return 0;
    });
    setUsersSorted(sorted); // Mise à jour de l'état => déclenche le rendu
  };

  return (
    <main>
      <div className="my-6 flex md:justify-end gap-5 sm:justify-center">
        <span className="font-semibold">Trier par :</span>
        <button
          className="bg-emerald-300 border-solid border-zinc-400 border-2 rounded-lg px-3 hover:bg-emerald-100"
          type="button"
          onClick={() => sortBy("homme")} // tri par homme
        >
          HOMME
        </button>
        <button
          className="bg-yellow-400 border-solid border-zinc-400 border-2 rounded-lg px-3 hover:bg-yellow-100"
          type="button"
          onClick={() => sortBy("femme")} // tri par femme
        >
          FEMME
        </button>
      </div>

      <section className="grid gap-3 text-black sm:grid-cols-1 md:grid-cols-2 mb-10">
        {usersSorted.map(({ id, name, email, sexe, avatar }: UserType) => (
          <User
            key={id}
            avatar={avatar}
            name={name}
            email={email}
            sexe={sexe?.toUpperCase() as Sexe}
            id={id}
          />
        ))}
      </section>
    </main>
  );
};

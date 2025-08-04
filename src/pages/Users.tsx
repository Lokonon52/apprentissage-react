import User from "../components/User";
type Sexe="homme"|"femme";
export type UserType = {
  id: number;
  name: string;
  email: string;
  sexe?:Sexe;
  avatar: string;
};

type Props = {
  users: UserType[];
};

export const Users = (props: Props) => {
  const { users } = props; //Destructurer props

  return (
    <main>
      <div className="my-6">
        <span className="font-semibold">Trier par :</span>
        <button className=" bg-emerald-300 mx-3 border-solid border-zinc-400 border-4 rounded-lg px-3 " type="button">HOMME</button>
        <button  className=" bg-yellow-400 mx-3 border-solid border-zinc-400 border-4 rounded-lg px-3 " type="button">FEMME</button>
      </div>
   <section className="grid gap-3 text-black sm:grid-cols-1 md:grid-cols-2 mb-10">
      {users.map(({ id, name, email,sexe, avatar }: UserType) => (
        <User key={id} avatar={avatar} name={name} email={email} sexe={sexe?.toUpperCase() as Sexe} id={id} />
        //Ajoute toujours une key quand tu fais un .map() dans React :
      ))}

    </section>
    </main>
 
  );
};

/*
Que signifie ({ id, name, email, avatar }: UserType) ?
C’est l’équivalent de :

users.map((user: UserType) => {
  const { id, name, email, avatar } = user;
  return <User ... />;
}) 
   

*/
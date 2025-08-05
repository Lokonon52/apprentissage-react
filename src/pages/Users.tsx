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
  let usersSorted:UserType[]=users; 
  //fonction
  const sortBy = (field: string) => {
    console.log(field);
    usersSorted.sort()
  };

  return (
    <main>
      <div className="my-6 flex md:justify-end  gap-5 sm:justify-center">
        <span className="font-semibold">Trier par :</span>
        <button
          className=" bg-emerald-300  border-solid border-zinc-400 border-2 rounded-lg px-3 hover:bg-emerald-100"
          type="button"
           onClick={()=> {sortBy('homme')}} //évènement
         
        >
          HOMME
        </button>
        <button
          className=" bg-yellow-400  border-solid border-zinc-400 border-2 rounded-lg px-3 hover:bg-yellow-100 "
          type="button"
           onClick={()=> {sortBy('femme')}} //évènement
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

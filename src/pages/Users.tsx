import User from "../components/User";

type UserType = {
  id: number;
  name: string;
  email: string;
  avatar: string;
};

type Props = {
  users: UserType[];
};

export const Users = (props: Props) => {
  const { users } = props; //Destructurer props

  return (
    <div className="grid gap-3 text-black sm:grid-cols-1 md:grid-cols-2">
      {users.map(({ id, name, email, avatar }: UserType) => (
        <User key={id} avatar={avatar} name={name} email={email} id={id} />
        //Ajoute toujours une key quand tu fais un .map() dans React :
      ))}
    </div>
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

type Sexe="homme"|"femme";

type Props = {
  id?: number;
  name?: string;
  email?: string;
  sexe?:Sexe;
  avatar?: string;
};

function User({ id,name,email,sexe,avatar}: Props) {
  return (
    <div className="bg-zinc-50 border-zinc-200 border-2 rounded-lg text-zinc-800 items-center flex justify-evenly">
      {avatar ? (
        <div className="img my-1">
          <p className="text-2xl font-extrabold">profile{id}</p>
          <img src={avatar} alt={name} />
        </div>
      ) : null}

      {name || email || sexe ? (
        <ul>
          <li>{name}</li>
          <li>{email}</li>
          <li className=" w-1/2  text-center text-base text-fuchsia-600 bg-slate-50 border-zinc-200 border-2 rounded-lg hover:bg-slate-100">
          {sexe?.toUpperCase()}</li>
        </ul>
      ) : null}
    </div>
  );
}
export default User;

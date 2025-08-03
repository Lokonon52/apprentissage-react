
type Props = {
  firstname?: string;
  lastname?: string;
  age?: number;
  email?: string;
  texte: string;
  favoriteFruit?: string;
};

function Message({ firstname, lastname, age, email, texte, favoriteFruit='inconnue' }: Props) {
  return (
    <div className="border-red-300 border-solid border-4">
      <h4>{texte}</h4>

      {firstname || lastname ? (
        <h1>
          Auteurs {firstname} {lastname}
        </h1>
      ) : null}

      {age && <p>age: {age}</p>}
      {email && <p>email: {email}</p>}

      <h2 className="text-base font-semibold text-blue-400">
        <span className="text-base font-thin text-black">Fruit:</span>
        {favoriteFruit}
      </h2>
      <hr />
    </div>
  );
}

export default Message;







/*
function Message(props: Props) {
  return (
    <div className=" border-red-300 border-solid border-4">
      <h4>Texte: {props.texte}</h4>
      {props?.firstname || props?.lastname ? (
        <h1>
          Auteurs {props.firstname} {props.lastname}
        </h1>
      ) : null}

      {props?.age && <p>age:{props.age}</p>}
      {props?.email ? <p>email:{props.email}</p> : null}
      <h2 className="text-base font-semibold text-blue-400">
        <span className="text-base font-thin text-black">Fruit:</span>
        {props.favoriteFruit}
      </h2>
      <hr />
    </div>
  );
}
export default Message;
*/

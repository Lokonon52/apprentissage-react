type Props = {
  firstname?: string;
  lastname?: string;
  age?: number;
  email?: string;
  texte: string;
};

function Message(props: Props) {
  return (
    <div className="message">
    
    <h4>Texte: {props.texte}</h4>    
      {props?.firstname || props?.lastname ? (
        <h1>
          Auteurs {props.firstname} {props.lastname}
        </h1>
      ) : null}

      {props?.age && <p>age:{props.age}</p>}
      {props?.email ? <p>email:{props.email}</p> : null}
      <hr />
    </div>
  );
}
export default Message;

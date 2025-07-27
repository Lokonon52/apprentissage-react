type Props = { firstname: string; lastname: string; age?:number ; email?:string };

function Message(props: Props) {
  return (
    <div>
      <h1>
        Bonjour {props.firstname} {props.lastname}
      </h1>
       {props?.age&&<p>age:{props.age}</p>}
        {props?.email?<p>email:{props.email}</p>:null}
    </div>
  );
}
export default Message;

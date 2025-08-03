type Props = {
  id?: number;
  name?: string;
  email?: string;
  avatar?: string;
};

function User(props: Props) {
  return (
    <div className="items-center border-orange-300 border-solid border-4 rounded-2xl bg-zinc-50 flex justify-evenly">
      {props?.avatar ? (
        <div className="img">
          <p className="text-2xl font-extrabold">profile{props.id}</p>
          <img src={props.avatar} alt={props.name} />
        </div>
      ) : null}

      {props?.name ? (
        <ul>
          <li>{props.name}</li>
          <li>{props.email}</li>
        </ul>
      ) : null}
    </div>
  );
}
export default User;

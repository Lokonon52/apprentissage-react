type Props = {
  id?: number;
  name?: string;
  email?: string;
  avatar?: string;
};

function User(props: Props) {
  return (
    <div className="user">
      {props?.avatar ? (
        <div className="img">
          <p className="profile">profile{props.id}</p>
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

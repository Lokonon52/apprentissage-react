

import User from "../components/User";

type User={
    id: number;
    name: string;
    email: string;
    avatar: string;

}
type Props={
    users:User[];
}

export const Users = (props:Props) => {
  return (
    <div className="users">
      { 
props.users.map(user=><User avatar={user.avatar} name={user.name} email={user.email} id={user.id}/> )
  }
</div>
)
}

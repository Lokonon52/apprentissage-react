

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
    <div className="grid gap-3 text-black sm:grid-cols-1 md:grid-cols-2 " >
      { 
props.users.map(user=><User avatar={user.avatar} name={user.name} email={user.email} id={user.id}/> )
  }
</div>
)
}

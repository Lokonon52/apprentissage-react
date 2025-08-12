

type Geo= {
  lat: string;
  lng: string;
};

type Address = {
  city: string;
  street: string;
zipcode: string;
};
type Props = {
   id:number;
  name: string;
  username: string;
  email: string;
  address: Address;
  geo?: Geo;
};

export default function Famille({ id,name, username, email, address, geo }: Props) {


  return (
    <section >
      <div className="bg-zinc-50 border-zinc-200 border-2 rounded-lg text-zinc-800 items-center flex justify-evenly">
        {geo ? (
          <ul className="my-1">
            <li>{geo.lng}</li>
            <li>{geo.lat}</li>
          </ul>
        ) : null}

        {name || email || username ? (
          <ul>
            <li>
              {name} {username}
            </li>
            <li>{email}</li>
            <li className="w-1/2 text-center text-base text-fuchsia-600 bg-slate-50 border-zinc-200 border-2 rounded-lg hover:bg-slate-100">
              {address.city?.toUpperCase()}
            </li>
          </ul>
        ) : null}
      </div>
    </section>
  );
}


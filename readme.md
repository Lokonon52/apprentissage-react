# Cours de React avec AchilloTech

## 1.Première notion de composante

- Une composante
- props
- type de donné
- props optionnelle
-

## 2.Afficher une liste

- Considérer un tableau de plusieurs json `TEXTES=[{ "id":"0123jlh", "text":"fvghj"}.. ]`
  dans APP.tsx
- Il existait un composant qui demandes de 'text' en paramèttre `<Message texte='lorem1'/>`
- Creér un autre composant `<Messages messages={TEXTES}/>` en utilisant la methode map:
  nous pouvons impliquer le composant `<Message texte={message.texte}/>` dans `<Messages messages={TEXTES} />`
- -------La composantes Messages dans src/components/Message.tsx---------------------------

```tsx
import Message from "../components/Message";

type Message = {
  id: string;
  texte: string;
};
type Props = {
  messages: Message[];
};

function Messages(props: Props) {
  const messages = props.messages;
  return messages.map((message) => <Message texte={message.texte} />);
}
export default Messages;
```

- -------La composantes Messages dans src/pages/Messages.tsx---------------------------

```tsx
import Message from "../components/Message";

type Message = {
  id: string;
  texte: string;
};
type Props = {
  messages: Message[];
};

function Messages(props: Props) {
  const messages = props.messages;
  return messages.map((message) => <Message texte={message.texte} />);
}
export default Messages;
```

## 3.TailwindCSS avec react&vite

- Le lien pour installerTailwindCSS avec react&vite
  [https://v3.tailwindcss.com/docs/guides/vite](https://v3.tailwindcss.com/docs/guides/vite).

#### 1. Installez Tailwind CSS et ses dépendances associées via npm.

```bash
npm install -D tailwindcss@3 postcss autoprefixer
```

#### 2. Générez les fichiers tailwind.config.js et postcss.config.js via npx.

```bash
npx tailwindcss init -p
```

#### 3. Ajoutez les chemins vers tous vos fichiers de template dans votre fichier tailwind.config.js.

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

#### 4. Joutez les directives @tailwind pour chaque couche de Tailwind dans votre fichier ./src/index.css.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

 #### 5. Tester Tailwind CSS dans React
- -------La composantes Messages dans App.tsx---------------------------

 ```tsx
 import Messages from "./pages/Messages"
import { Users } from "./pages/Users"
import { TEXTES, USERS } from "./utils/data"

function App() {
  

  return (
<div className="container mx-auto  bg-slate-400">
 
  <Messages messages={TEXTES} />

  <Users users={USERS}/>
  
</div>

  )
}

export default App

 ```

 ## 4. Destructurer les Objects
```tsx

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
```

 ## 5. Gestion  des évènements
 ```tsx


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
          <li className=" w-1/2  text-center text-base text-fuchsia-600 bg-slate-50 border-zinc-200 border-2 rounded-lg hover:bg-slate-100">{sexe}</li>
        </ul>
      ) : null}
    </div>
  );
}
export default User;


 ``` 

 ## 6. useState
 ```tsx
 import { useState } from "react";
import User from "../components/User";

type Sexe = "homme" | "femme";

export type UserType = {
  id: number;
  name: string;
  email: string;
  sexe?: Sexe;
  avatar: string;
};

type Props = {
  users: UserType[];
};

export const Users = ({ users }: Props) => {
  // État local pour stocker les utilisateurs triés
  const [usersSorted, setUsersSorted] = useState<UserType[]>([...users]);

  // Fonction de tri
  const sortBy = (sexeChoisi: Sexe) => {
    const sorted = [...users].sort((a, b) => {
      if (a.sexe === sexeChoisi && b.sexe !== sexeChoisi) return -1;
      if (a.sexe !== sexeChoisi && b.sexe === sexeChoisi) return 1;
      return 0;
    });
    setUsersSorted(sorted); // Mise à jour de l'état => déclenche le rendu
  };

  return (
    <main>
      <div className="my-6 flex md:justify-end gap-5 sm:justify-center">
        <span className="font-semibold">Trier par :</span>
        <button
          className="bg-emerald-300 border-solid border-zinc-400 border-2 rounded-lg px-3 hover:bg-emerald-100"
          type="button"
          onClick={() => sortBy("homme")} // tri par homme
        >
          HOMME
        </button>
        <button
          className="bg-yellow-400 border-solid border-zinc-400 border-2 rounded-lg px-3 hover:bg-yellow-100"
          type="button"
          onClick={() => sortBy("femme")} // tri par femme
        >
          FEMME
        </button>
      </div>

      <section className="grid gap-3 text-black sm:grid-cols-1 md:grid-cols-2 mb-10">
        {usersSorted.map(({ id, name, email, sexe, avatar }: UserType) => (
          <User
            key={id}
            avatar={avatar}
            name={name}
            email={email}
            sexe={sexe?.toUpperCase() as Sexe}
            id={id}
          />
        ))}
      </section>
    </main>
  );
};

 ```
 * Tu utilises une variable locale let usersSorted = users; → elle ne met pas à jour l’affichage (pas réactif).

* Il faut utiliser useState pour que React mette à jour le DOM après le tri.
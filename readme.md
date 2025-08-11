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
import Messages from "./pages/Messages";
import { Users } from "./pages/Users";
import { TEXTES, USERS } from "./utils/data";

function App() {
  return (
    <div className="container mx-auto  bg-slate-400">
      <Messages messages={TEXTES} />

      <Users users={USERS} />
    </div>
  );
}

export default App;
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

function Message({
  firstname,
  lastname,
  age,
  email,
  texte,
  favoriteFruit = "inconnue",
}: Props) {
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

## 5. Gestion des évènements

```tsx
type Sexe = "homme" | "femme";

type Props = {
  id?: number;
  name?: string;
  email?: string;
  sexe?: Sexe;
  avatar?: string;
};

function User({ id, name, email, sexe, avatar }: Props) {
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
            {sexe}
          </li>
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

- Tu utilises une variable locale let usersSorted = users; → elle ne met pas à jour l’affichage (pas réactif).

- Il faut utiliser useState pour que React mette à jour le DOM après le tri.

## 6. Navigation des routes

### 1. Configuration des routes

- Le lien de librairie qui permet de faire la navigation dans une composante react `React Router`
  [https://reactrouter.com/](https://reactrouter.com/).
- Start Here
- getting Starting
- Aller vers la version 6.X.X puis start/tutorial
  ou bien
  👉 Lien direct vers l'installation :
  🔗 [https://reactrouter.com/en/main/start/tutorial] (https://reactrouter.com/en/main/start/tutorial)

## ✅ Étapes pour ajouter `react-router-dom` avec Vite + React + TypeScript

Voici les étapes **claires et à jour (v7+)** pour utiliser React Router dans ton projet.

---

### 📦 1. Installer React Router DOM

Dans ton terminal, à la racine du projet :

```bash
npm install react-router-dom@7.7.1
```

Pas besoin de `@types/react-router-dom`, les types sont inclus dans v7+ ✅

---

### 🗂️ 2. Structure recommandée de ton projet

```
src/
├── main.tsx
├── App.tsx
├── pages/
    ├── Routes.tsx  (Un conteneur pour toutes les routes imbriquées à l'intérieur de / )
│   ├── Home.tsx
│   └── About.tsx
```

---

### ⚙️ 3. Configuration dans `main.tsx`

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Routes from "./pages/Routes.tsx";
import { Users } from "./pages/Users.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes />, // Layout principal
    children: [
      {
        path: "/", // ou index: true,
        element: <Users />, // sous-route injectée dans <Outlet />
      },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
```

---

### 💡 4. Exemple de navigation dans `Routes.tsx`

```tsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Routes() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 px-4 py-8">
        {/* footer reste collé en bas de la page, même quand le contenu principal (<main>) est trop court*/}
        <Outlet />
      </main>
      <footer className="text-center text-gray-500 py-4 bg-slate-500 text-white">
        BilokDev © 2025
      </footer>
    </div>
  );
}

export default Routes;
```

- ➤ Routes.tsx est un layout principal pour ta route /.
  Il agit comme un conteneur pour toutes les routes imbriquées à l'intérieur de /.

- ➤ Outlet = Emplacement où s'affichent les sous-routes

---

### 📄 5. Exemple de composant `Navbar.tsx` dans /components.tsx

```tsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold">
          <Link to="/">MonApp</Link>
          
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:underline">
              Users
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">
              À propos
            </Link>
          </li>
          <li>
            <Link to="/messages" className="hover:underline">
              Messages
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
```

### 📄 6.  Exemple de composant  `About.tsx`

```tsx
const About = () => {
  return (
    <div className="text-center text-xl mt-10">
      <h1 className="text-2xl font-bold">À propos</h1>
      <p>Cette application a été créée par BilokDev.</p>
    </div>
  );
};

export default About;
```
## 7. UseEffet
D’accord 👍
Je vais t’expliquer **`useEffect`** en React JS simplement, avec un petit peu de théorie et un exemple concret.

---

## 📌 Qu’est-ce que `useEffect` ?

`useEffect` est un **hook** de React qui te permet d’exécuter du code **après** que ton composant ait été rendu (affiché ou mis à jour).
En gros, c’est pour gérer **les effets secondaires** comme :

* Récupérer des données depuis une API (**fetch**)
* Mettre à jour le `document.title`
* Démarrer ou arrêter un timer
* Écouter un événement du clavier ou de la souris

---

## 📜 Syntaxe de base

```jsx
import { useEffect } from "react";

useEffect(() => {
  // Code à exécuter après le rendu
});
```

---

## 🔍 Les 3 cas d’utilisation selon le 2ᵉ argument

`useEffect` prend **deux arguments** :

1. Une **fonction** → le code à exécuter.
2. Un **tableau de dépendances** → pour dire à React quand exécuter la fonction.

---

### **1️⃣ Sans tableau de dépendances**

```jsx
useEffect(() => {
  console.log("Composant rendu ou mis à jour");
});
```

💡 S’exécute **après chaque rendu** (montage + mise à jour).

---

### **2️⃣ Tableau vide `[]`**

```jsx
useEffect(() => {
  console.log("Composant monté une seule fois");
}, []);
```

💡 S’exécute **une seule fois** au montage du composant (idéal pour un `fetch` initial).

---

### **3️⃣ Avec des dépendances**

```jsx
useEffect(() => {
  console.log(`Le compteur est maintenant ${count}`);
}, [count]);
```

💡 S’exécute **uniquement** quand `count` change.

---

## 💻 Exemple complet

```jsx
import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  // Change le titre de la page quand count change
  useEffect(() => {
    document.title = `Compteur : ${count}`;
    console.log("useEffect exécuté");
  }, [count]);

  return (
    <div>
      <h1>Compteur : {count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
```

---

## ⚠️ À retenir

* **Sans tableau** → à chaque rendu.
* **\[] vide** → une seule fois au montage.
* **\[dépendances]** → uniquement quand elles changent.
* Toujours nettoyer les effets (ex : timers, écouteurs) avec `return () => { ... }` dans le `useEffect`.


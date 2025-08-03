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

#### 3. Ajoutez les chemins vers tous vos fichiers de template dans votre fichier

    tailwind.config.js.

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
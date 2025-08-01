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
- -------La composantes  Messages  dans src/components/Message.tsx---------------------------
```  tsx
import Message from "../components/Message";

type Message = {
  id: string;
  texte: string;
 
};
type Props = {
messages:Message[]
};


function Messages(props: Props) {
    const messages=props.messages
  return (
    
messages.map( message => <Message texte={message.texte}/> )
  
  );
}
export default Messages;



 ```
- -------La composantes  Messages  dans src/pages/Messages.tsx---------------------------
```tsx

import Message from "../components/Message";

type Message = {
id: string;
texte: string;

};
type Props = {
messages:Message[]
};


function Messages(props: Props) {
 const messages=props.messages
return (

messages.map( message => <Message texte={message.texte}/> )


);
}
export default Messages;

```
## 3.TailwindCSS avec react&vite
* Le lien pour installerTailwindCSS avec react&vite
 [https://v3.tailwindcss.com/docs/guides/vite](https://v3.tailwindcss.com/docs/guides/vite).
1. Installez Tailwind CSS et ses dépendances associées via npm.
 ```bash 
 npm install -D tailwindcss@3 postcss autoprefixer
   ```
  2.Générez les fichiers tailwind.config.js et postcss.config.js via npx.
 ```bash 
npx tailwindcss init -p
   ```
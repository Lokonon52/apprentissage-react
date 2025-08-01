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

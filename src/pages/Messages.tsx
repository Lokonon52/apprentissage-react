import Message from "../components/Message";

type Message = {
   id: string;
   texte: string;
   favoriteFruit?:string;
 
};
type Props = {
messages:Message[]
};


function Messages({ messages}: Props) {
   // const { messages}=props
  return (
    
messages.map( ({texte,favoriteFruit}) =><Message texte={texte} favoriteFruit={favoriteFruit}/> )
  
  );
}
export default Messages;

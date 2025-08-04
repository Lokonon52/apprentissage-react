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
    <div className="mb-32">
      { messages.map( ({texte,favoriteFruit}) =><Message texte={texte} favoriteFruit={favoriteFruit}/> )}
    </div>

  
  );
}
export default Messages;

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

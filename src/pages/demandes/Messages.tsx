import Message from "../../components/Message";
import { TEXTES } from "../../utils/data";

type Message = {
  id: string;
  texte: string;
  favoriteFruit?: string;
};
let messages: Message[] = TEXTES;

function Messages() {
  // const { messages}=props
  return (
    <div className="mb-32">
      {messages.map(({ texte, favoriteFruit }) => (
        <Message texte={texte} favoriteFruit={favoriteFruit} />
      ))}
    </div>
  );
}
export default Messages;

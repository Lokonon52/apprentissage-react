import Messages from "./pages/Messages"
import { Users } from "./pages/Users"
import { TEXTES, USERS } from "./utils/data"

function App() {
  

  return (
<div>
 
  <Messages messages={TEXTES} />

  <Users users={USERS}/>
  
</div>

  )
}

export default App

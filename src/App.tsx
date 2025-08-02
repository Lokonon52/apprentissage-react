import Messages from "./pages/Messages"
import { Users } from "./pages/Users"
import { TEXTES, USERS } from "./utils/data"

function App() {
  

  return (
<div className="container mx-auto mt-16 gap-4 ">
 
  <Messages messages={TEXTES} />

  <Users users={USERS}/>
  
</div>

  )
}

export default App

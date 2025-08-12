import { createBrowserRouter } from "react-router-dom";
import { Users } from "../pages/users/Users";
import App from "../App";
import Dashbord from "../pages/dashboord/Dashbord";
import Messages from "../pages/demandes/Messages";
import Familles from "../pages/familles/Familles";
import DetailFamille from "../pages/Detail-famille/DetailFamille";


const routes = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true, // équivalent à path: "/"
        element: <App />,
      },
      {
        path: "me",
        element: <Dashbord />,
        children: [
          {
            path: "users",
            element: <Users />,
          },
          {
            path: "demandes",
            element: <Messages />,
          },
           {
            path: "familles",
            element: <Familles />,
          },
            {
            path: "famille/:userId",
            element: <DetailFamille />,
          },
        ],
      },
    ],
  },
]);

export default routes;

import {createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";   // first highLevel Component
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Events from "./pages/Events";
import ExplorePlaces from "./pages/ExplorePlaces";
import Funding from "./pages/Funding";
import LanguagSupport from "./pages/LanguagSupport";


const Home = () =>{
  return <div>
    <Header/>
    <Outlet/>
  </div>
}
const App = () => {
  // Create a router instance
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
        path: "/",
        element: <HomePage/>
        },
        {
          path: "/events",
          element: <Events />,
        },
        {
          path: "/expore",
          element: <ExplorePlaces/>
        },
        {
          path:"/funding",
          element: <Funding/>
        },
        {
          path:"/languagesupport",
          element: <LanguagSupport/>
        }
      ],
    
    },
 
  ]);

  return <div>
    <RouterProvider router={router} />
  </div>;
}

export default App;

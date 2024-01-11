import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./home/Home";
import Register from "./register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

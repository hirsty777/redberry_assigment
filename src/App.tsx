import { RouterProvider, createBrowserRouter } from "react-router-dom";
import router from "./routes/routes";

function App() {

  return (
    <RouterProvider router={createBrowserRouter(router)} />
  );

}

export default App;

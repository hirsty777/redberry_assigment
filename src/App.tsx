import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import Home from "./pages/Home";
import router from "./routes/routes";

function App() {

  return (
    <RouterProvider router={createBrowserRouter(router)} />
  );

}

export default App;

import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";


export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <MainPage/> },
    ]
  },
]);
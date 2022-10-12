import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import "./index.scss";
import components from "./components";
import pages from "./pages";


const
  // ? app nav route layout with router dom outlet
  AppLayout = () => {
    return (
      <>
        <components.Search />
        <components.Navigation />
        <Outlet />
        <components.Playing />
      </>
    );
  },
  // ? app routes
  router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <pages.Home />,
        },
        {
          path: "/collections",
          element: <pages.Collections />,
        },
        {
          path: "/playlist/:id",
          element: <pages.Playlist />,
        },
      ]
    }
  ]);

function App() {
  return (
    <section className="container">
      <RouterProvider router={router} />
    </section>
  );
}

export default App;

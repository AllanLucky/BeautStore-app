import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import MyAccount from "./pages/MyAccount";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Announcement from "./components/Announcement";

const Layout = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // now safe
      children: [
        { path: "/", element: <Home /> },
        { path: "/cart", element: <Cart /> },
        { path: "/profile", element: <MyAccount /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

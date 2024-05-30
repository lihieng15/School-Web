import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect,
  RouterProvider,
  Navigate,
  createBrowserRouter,
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CategoryLists from "./components/CategoryLists.jsx";
import ArticlesList from "./components/ArticleLists.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/categories",
        element: <CategoryLists />,
      },
      {
        path: "/articles",
        element: <ArticlesList />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}

    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/categories" element={<CategoryLists />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/" element={<App />} />
        redirect("/login")
      </Routes>
    </Router>
    {/* <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />}>
          <Route path="/" element={<Navigate to="categories" replace />} />{" "}
         
          <Route path="categories" element={<CategoryLists />} />
          <Route path="articles" element={<ArticlesList />} />
        </Route>
        <Route path="/" element={<App />}>
         
        </Route>
      </Routes>
    </Router> */}
  </React.StrictMode>
);

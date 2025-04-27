// App.tsx

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/global";
import { ThemeName, getTheme } from "./style/theme";
import ThemeSwitcher from "./components/header/ThemeSwicher";
import { useContext, useState } from "react";
import { BookStoreThemeProvider, ThemeContext } from "./context/themeContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/common/Error";
import Signup from "./pages/Signup"; // Signup 컴포넌트 임포트

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: <Error />,
  },
  {
    path: "/books",
    element: (
      <Layout>
        <div>도서 목록</div>
      </Layout>
    ),
  },
  {
    path: "/signup",
    element: (
      <Layout>
        <Signup /> {/* Signup 페이지 추가 */}
      </Layout>
    ),
  },
]);

function App() {
  return (
    <>
      <BookStoreThemeProvider>
        {/* ThemeSwitcher에 themeName과 setThemeName을 전달*/}
        <ThemeSwitcher />
        <RouterProvider router={router} />
      </BookStoreThemeProvider>
    </>
  );
}

export default App;

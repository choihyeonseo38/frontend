//App.tsx

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/global";
import { ThemeName, getTheme } from "./style/theme";
import ThemeSwitcher from "./components/header/ThemeSwicher";
import { useContext,  useState } from "react";
import { BookStoreThemeProvider, ThemeContext } from "./context/themeContext";

function App() {

  return (
    <>
      <BookStoreThemeProvider>
        {/* ThemeSwitcher에 themeName과 setThemeName을 전달합니다. */}
        <ThemeSwitcher />
          <Layout>
            <Home />
          </Layout>
      </BookStoreThemeProvider>
    </>
  );
}

export default App;

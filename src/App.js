import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Detail from "./pages/Detail";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.theme);
  const ThemeChanger = createTheme({
    palette: {
      mode: theme,
    },
  });
  return (
    <>
      <ThemeProvider theme={ThemeChanger}>
        <CssBaseline>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/post/:id" element={<Detail />} />
            <Route path="/search" element={<Search />} />
          </Routes>

          <Footer />
        </CssBaseline>
      </ThemeProvider>
    </>
  );
}

export default App;

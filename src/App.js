import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { CssBaseline } from "@mui/material";
import Notes from "./Pages/Notes";
import Create from "./Pages/Create";
import Layout from "./Components/Layout";

const theme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: "Quicksand !important",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="app">
          <Layout>
            <CssBaseline />
            <Routes>
              <Route path="/" exact element={<Notes />} />
              <Route path="/create" exact element={<Create />} />
            </Routes>
          </Layout>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

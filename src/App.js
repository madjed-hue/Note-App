import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import getDesignTokens from "./Theme";
import { CssBaseline } from "@mui/material";
import Notes from "./Pages/Notes";
import Create from "./Pages/Create";
import Layout from "./Components/Layout";

const theme = createTheme({
  // palette: {
  //   mode: "dark",
  // },
  typography: {
    fontFamily: "Quicksand",
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
        <Layout>
          <CssBaseline />
          <Routes>
            <Route path="/" exact element={<Notes />} />
            <Route path="/create" exact element={<Create />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

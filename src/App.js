import React from "react";
import SearchAppBar from "./components/SearchAppBar";
import BasicPagination from "./components/Pagination";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#232323",
      light: "#000000",
      dark: "#000000",
    },
  },
});

function App() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<HomePage page={page} />} />
        <Route path="/job/:id" element={<DetailPage />} />
      </Routes>
      <BasicPagination page={page} handleChange={handleChange} />
    </ThemeProvider>
  );
}

export default App;

import "./App.css";
import { Container, AppBar, Toolbar, Typography } from "@mui/material";
import useFetchPhotos from "./hooks/useFetchPhotos";
import Layout from "./components/Layout";

function App() {
  useFetchPhotos();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Flowbox App
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Layout />
      </Container>
    </>
  );
}

export default App;

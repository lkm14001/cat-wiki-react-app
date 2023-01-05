import { Routes, Route } from "react-router-dom";
import BreedPage from "./components/BreedPage/BreedPage";
import MainCompnent from "./components/MainComponent/MainCompnent";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Container,Box } from "@mui/material";
import AllBreedsPage from "./components/AllBreedsPage/AllBreedsPage";

const App = () => {
  return (
    <>
      <Container
        maxWidth='xl'
        sx={{
          marginTop: 5,
          mx:"auto",
          maxWidth: {
            xs: 350,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
          },
        }}
        style={{ padding: 0 }}
      >
        <Header />
        <Routes>
          <Route path="/cat-wiki-react-app" element={<MainCompnent />} />
          <Route path="/cat-wiki-react-app/breed/:id" element={<BreedPage />} />
          <Route path='/cat-wiki-react-app/breed-list' element={<AllBreedsPage />} />
        </Routes>
        <Footer />
      </Container>
    </>
  );
};

export default App;

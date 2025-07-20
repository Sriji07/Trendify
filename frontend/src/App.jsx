import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box
      minH="100vh"
      bgGradient="linear(to-r, #0f2027, #203a43, #2c5364)" // Dark blue gradient
      backdropFilter="blur(10px)" // Glassy blur effect
    >
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;
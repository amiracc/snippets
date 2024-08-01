import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

import "./App.css";
import { Providers } from "./providers";

const App = () => {
  return (
    <Providers>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Providers>
  );
};

export default App;

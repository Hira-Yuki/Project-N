import { BrowserRouter, Route, Routes } from "react-router-dom";
import Titlepage from "../Pages/Titlepage";
import Loardpage from "../Pages/Loardpage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Titlepage />} />
        <Route path="/loard" index element={<Loardpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

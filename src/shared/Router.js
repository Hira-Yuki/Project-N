import { BrowserRouter, Route, Routes } from "react-router-dom";
import Titlepage from "../Pages/Titlepage";
import Loadpage from "../Pages/Loadpage";
import PlayGame from "../Pages/PlayGame";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Titlepage />} />
        <Route path="/load" element={<Loadpage />} />
        <Route path="/playgame" element={<PlayGame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Titlepage from "Pages/Titlepage";
import Loadpage from "Pages/Loadpage";
import PlayGame from "Pages/PlayGame";
import OMAKE from "Pages/OMAKE";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Titlepage />} />
        <Route path="/load" element={<Loadpage />} />
        <Route path="/playgame" element={<PlayGame />} />
        <Route path="/omake" element={<OMAKE/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

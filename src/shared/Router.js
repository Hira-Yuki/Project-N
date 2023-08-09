import { BrowserRouter, Route, Routes } from "react-router-dom";
import Titlepage from "../Pages/Titlepage";
import Loadpage from "../Pages/Loadpage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Titlepage />} />
        <Route path="/load" index element={<Loadpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

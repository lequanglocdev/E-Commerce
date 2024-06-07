import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LOGIN, HOME, PUBLIC } from "./pages/public";
import path from "./utils/path";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={path.PUBLIC} element={<PUBLIC />}>
          <Route path={path.HOME} element={<HOME />} />
          <Route path={path.LOGIN} element={<LOGIN />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

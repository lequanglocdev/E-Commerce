import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  LOGIN,
  REGISTER,
  HOME,
  PUBLIC,
  PRODUCT,
  BLOGS,
  Service,
  FAQs,
  DetailProduct,
  ResetPassword
} from "./pages/public";
import path from "./utils/path";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={path.PUBLIC} element={<PUBLIC />}>
          <Route path={path.HOME} element={<HOME />} />
          <Route path={path.PRODUCT} element={<PRODUCT />} />
          <Route path={path.BLOGS} element={<BLOGS />} />
          <Route path={path.OUR_SERVICES} element={<Service/>}/>
          <Route path={path.FAQs} element={<FAQs/>}/>
          <Route path={path.DETAIL_PRODUCT_CATEGORY__PID_TITLE} element={<DetailProduct/>}/>
        
        </Route>
        <Route path={path.LOGIN} element={<LOGIN />} />
        <Route path={path.REGISTER} element={<REGISTER />} />
        <Route path={path.RESET_PASSWORD} element={<ResetPassword/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

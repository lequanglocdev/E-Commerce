import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Login,Register,ResetPassword} from "./pages/public/auth"
import {Home} from "./pages/public/home/index"
import {Blogs} from "./pages/public/blogs/index"
import {Service} from "./pages/public/service/index"
import {Faq} from "./pages/public/faqs/index"
import {DetailProduct,Product} from "./pages/public/product/index"
import PUBLIC from "./pages/public/Public";
import path from "./utils/path";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={path.PUBLIC} element={<PUBLIC />}>
          <Route path={path.HOME} element={<Home/>} />
          <Route path={path.PRODUCT} element={<Product />} />
          <Route path={path.BLOGS} element={<Blogs />} />
          <Route path={path.OUR_SERVICES} element={<Service/>}/>
          <Route path={path.FAQs} element={<Faq/>}/>
          <Route path={path.DETAIL_PRODUCT_CATEGORY__PID_TITLE} element={<DetailProduct/>}/> 
        </Route>
        <Route path={path.LOGIN} element={<Login />} />
        <Route path={path.REGISTER} element={<Register />} />
        <Route path={path.RESET_PASSWORD} element={<ResetPassword/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

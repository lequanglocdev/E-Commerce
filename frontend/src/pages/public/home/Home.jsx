import { Banner } from "../../../components/templates";
import {FeatureProduct,DealDayly,HotCollections,BestSeller,BlogPost,CustomSlider} from "../../../components/ui/home"
import {Sidebar} from "../../../components/ui/navbar"
const Home = () => {
  return (
    <div className="w-main">
      <div className="w-full flex">
        <div className="flex flex-col gap-5 w-[20%] flex-auto border-slate-950">
          <Sidebar />
          <DealDayly />
        </div>
        <div className="flex flex-col gap-5 pl-5 w-[80%] flex-auto border-slate-600">
          <Banner />
          <BestSeller />
        </div>
      </div>
      <div className="mt-5 w-full ">
        <FeatureProduct />
      </div>
      <div className="mt-5 w-full ">
        <CustomSlider/>
      </div>
      <div className="mt-5 w-full ">
          <HotCollections/>
      </div>
      <div className="mt-5 w-full ">
          <BlogPost/>
      </div>
      
    </div>
  );
};

export default Home;

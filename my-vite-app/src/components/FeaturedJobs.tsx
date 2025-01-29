import Arrow from "../../public/Svg/Arrow"
import FeaturedBox from "./FeaturedBox"
import Featured1 from "../../public/Svg/Featured1"
import Featured2 from "../../public/Svg/Featured2"
import Featured3 from "../../public/Svg/Featured3"
import Featured4 from "../../public/Svg/Featured4"
import Featured5 from "../../public/Svg/Featured5"
import Featured6 from "../../public/Svg/Featured6"
import Featured7 from "../../public/Svg/Featured7"
import Featured8 from "../../public/Svg/Featured8"


const FeaturedJobs = () => {
  return (
    <div>
    <div className="flex justify-between items-center">
      <h1>
        <span className="text-5xl leading-[10rem]">Featured </span>
        <span className="text-blue-500 text-5xl">products</span>
      </h1>
      <h1 className="text-blue-700 flex gap-0.5">
        Show All jobs <Arrow />
      </h1>
    </div>

    
    <div className="justify-between flex-auto items-center flex">
      { /* <FeaturedBox icon={<Featured1 />} title="" />*/}
    </div>
  </div>
  )
}

export default FeaturedJobs
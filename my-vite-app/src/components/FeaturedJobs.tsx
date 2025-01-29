import Arrow from "../../public/Svg/Arrow"

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
    
    </div>
  </div>
  )
}

export default FeaturedJobs
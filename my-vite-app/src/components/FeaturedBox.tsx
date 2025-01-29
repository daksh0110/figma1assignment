const FeaturedBox = ({
    icon,
    title,
    description,
  }: {
    icon: JSX.Element;
    title: string;
    description: string;
  }) => {
    return (
      <div className="border p-6 gap-2 border-gray-300 cursor-pointer transition-colors duration-300 hover:bg-[#5850EC] hover:text-white">
        {/* Icon and Title in One Line */}
        <div className="flex items-center gap-2">
          {icon}
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
  
        {/* Title (Centered Below Icon) */}
        <h3 className="text-xl font-bold mt-2">{title}</h3>
  
        {/* Description */}
        <p className="text-gray-500 mt-2">{description}</p>
      </div>
    );
  };
  
  export default FeaturedBox;
  
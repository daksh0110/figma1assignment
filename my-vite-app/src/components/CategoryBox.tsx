const CategoryBox = ({
    icon,
    title,
    jobsDescription,
    arrow,
    isSelected,
    onSelect,
  }: {
    icon: JSX.Element;
    title: string;
    jobsDescription: string;
    arrow: JSX.Element;
    isSelected: boolean;
    onSelect: () => void;
  }) => {
    return (
      <div
        className={`border p-8 gap-2 border-gray-300 cursor-pointer transition-colors duration-300 ${
          isSelected ? "bg-blue-700 text-white" : "hover:bg-[#5850EC] hover:text-white"
        }`}
        onClick={onSelect}
      >
        {icon}
        <div className="mt-6" >{title}</div>
        <div className="text-gray-400 flex">
          {jobsDescription} {arrow}
        </div>
      </div>
    );
  };
  
  export default CategoryBox;
  
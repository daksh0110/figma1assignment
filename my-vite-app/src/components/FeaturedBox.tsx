const FeaturedBox = ({
  icon,
  title,
  Cname,
  CAdress,
  CDescription,
  isSelected,
  onSelect,
  button1,
  button2
}: {
  icon: JSX.Element;
  title: string;
  Cname: string;
  CAdress: string;
  CDescription: string;
  isSelected: boolean;
  button1: string;
  button2: string;
  onSelect: () => void;
}) => {
  return (
    <div
      className={`p-4 border border-gray-300  cursor-pointer transition duration-300 ${
        isSelected ? "bg-blue-700 text-white" : "hover:bg-[#5850EC] hover:text-white"
      }`}
      onClick={onSelect}
    >
      {/* Icon & Job Type */}
      <div className="flex justify-between items-center">
        <div>{icon}</div>
        <div className="border border-purple-500 text-purple-500 px-3 py-1 rounded-md text-xs">
          Full-Time
        </div>
      </div>

      {/* Job Title */}
      <div className="font-bold text-lg mt-2">{title}</div>

      {/* Company & Location */}
      <div className="text-gray-500 flex items-center gap-2 text-sm mt-1">
        {Cname}{" "}
        <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.3" cx="2" cy="2" r="2" fill="#515B6F" />
        </svg>{" "}
        <span>{CAdress}</span>
      </div>

      {/* Job Description */}
      <div className="text-gray-500 text-sm mt-2">{CDescription}</div>

      {/* Buttons */}
      <div className="flex justify-between mt-4">
        <button className="px-3 py-1 bg-red-500 text-white rounded-full text-sm">{button1}</button>
        <button className="px-3 py-1 bg-gray-300 text-black rounded-full text-sm">{button2}</button>
      </div>
    </div>
  );
};

export default FeaturedBox;

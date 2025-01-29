import React, { useState } from 'react';
import CategoryBox from './CategoryBox';
import Category1 from "../../public/Svg/Category1";
import Category2 from "../../public/Svg/Category2";
import Category3 from "../../public/Svg/Category3";
import Category4 from "../../public/Svg/Category4";
import Category5 from "../../public/Svg/Category5";
import Category6 from "../../public/Svg/Category6";
import Category7 from "../../public/Svg/Category7";
import Category8 from "../../public/Svg/Category8";
import Arrow from "../../public/Svg/Arrow";

const ExploreByCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleSelect = (title: string) => {
    setSelectedCategory(title); // Update selected category
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1>
          <span className="text-5xl leading-[10rem]">Explore By </span>
          <span className="text-blue-500 text-5xl">Category</span>
        </h1>
        <h1 className="text-blue-700 flex gap-0.5">
          Show All jobs <Arrow />
        </h1>
      </div>

      {/* First Row */}
      <div className="justify-between flex-auto items-center flex">
        <CategoryBox
          icon={<Category1 />}
          title="Design"
          jobsDescription="235 jobs available"
          arrow={<Arrow />}
          isSelected={selectedCategory === "Design"}
          onSelect={() => handleSelect("Design")}
        />
        <CategoryBox
          icon={<Category2 />}
          title="Sales"
          jobsDescription="756 jobs available"
          arrow={<Arrow />}
          isSelected={selectedCategory === "Sales"}
          onSelect={() => handleSelect("Sales")}
        />
        <CategoryBox
          icon={<Category3 />}
          title="Marketing"
          jobsDescription="140 jobs available"
          arrow={<Arrow />}
          isSelected={selectedCategory === "Marketing"}
          onSelect={() => handleSelect("Marketing")}
        />
        <CategoryBox
          icon={<Category4 />}
          title="Finance"
          jobsDescription="325 jobs available"
          arrow={<Arrow />}
          isSelected={selectedCategory === "Finance"}
          onSelect={() => handleSelect("Finance")}
        />
      </div>

      {/* Second Row */}
      <div className="justify-between flex-auto items-center flex mt-6">
        <CategoryBox
          icon={<Category5 />}
          title="Technology"
          jobsDescription="436 jobs available"
          arrow={<Arrow />}
          isSelected={selectedCategory === "Technology"}
          onSelect={() => handleSelect("Technology")}
        />
        <CategoryBox
          icon={<Category6 />}
          title="Engineering"
          jobsDescription="542 jobs available"
          arrow={<Arrow />}
          isSelected={selectedCategory === "Engineering"}
          onSelect={() => handleSelect("Engineering")}
        />
        <CategoryBox
          icon={<Category7 />}
          title="Buisness"
          jobsDescription="211 jobs available"
          arrow={<Arrow />}
          isSelected={selectedCategory === "Buisness"}
          onSelect={() => handleSelect("Buisness")}
        />
        <CategoryBox
          icon={<Category8 />}
          title="Human Resources"
          jobsDescription="346 jobs available"
          arrow={<Arrow />}
          isSelected={selectedCategory === "Human Resources"}
          onSelect={() => handleSelect("Human Resources")}
        />
      </div>
    </div>
  );
};

export default ExploreByCategory;

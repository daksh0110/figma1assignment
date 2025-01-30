import { useState } from "react";
import Arrow from "../Svg/Arrow";
import Featured1 from "../Svg/featured1";
import Featured2 from "../Svg/featured2";
import Featured3 from "../Svg/featured3";
import Featured4 from "../Svg/featured4";
import Featured5 from "../Svg/featured5";
import Featured6 from "../Svg/featured6";
import Featured7 from "../Svg/featured7";
import Featured8 from "../Svg/featured8";
import FeaturedBox from "./FeaturedBox";

const FeaturedJobs = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const handleSelect = (title: string) => {
    setSelectedJob(selectedJob === title ? null : title);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          <span className="leading-tight">Featured </span>
          <span className="text-blue-500">Products</span>
        </h1>
        <h1 className="text-blue-700 flex items-center gap-2 mt-4 md:mt-0 cursor-pointer">
          Show All Jobs <Arrow />
        </h1>
      </div>

      {/* Featured Jobs List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
        <FeaturedBox
          icon={<Featured1 />}
          title="Email Marketing"
          Cname="Revolt"
          CAdress="Madrid, Spain"
          CDescription="Revolut is looking for Email Marketing to help the team ..."
          isSelected={selectedJob === "Email Marketing"}
          onSelect={() => handleSelect("Email Marketing")}
          button1="Marketing"
          button2="Design"
        />
        <FeaturedBox
          icon={<Featured2 />}
          title="Brand Designer"
          Cname="Dropbox"
          CAdress="San Francisco, US"
          CDescription="Dropbox is looking for a Brand Designer to help the team ..."
          isSelected={selectedJob === "Brand Designer"}
          onSelect={() => handleSelect("Brand Designer")}
          button1="Design"
          button2="Business"
        />
        <FeaturedBox
          icon={<Featured3 />}
          title="Customer Manager"
          Cname="Pitch"
          CAdress="Berlin, Germany"
          CDescription="Pitch is looking for a Customer Manager to join the team ..."
          isSelected={selectedJob === "Customer Manager"}
          onSelect={() => handleSelect("Customer Manager")}
           button1="Marketing"
          button2=""
        />
        <FeaturedBox
          icon={<Featured4 />}
          title="Visual Designer"
          Cname="BlinkList"
          CAdress="Granada, Spain"
          CDescription="Blinkist is looking for a Visual Designer to help design ..."
          isSelected={selectedJob === "Visual Designer"}
          onSelect={() => handleSelect("Visual Designer")}
           button1="Design"
          button2=""
        />
        <FeaturedBox
          icon={<Featured5 />}
          title="Product Designer"
          Cname="ClassPass"
          CAdress="Manchester, UK"
          CDescription="ClassPass is looking for a Product Designer to join ..."
          isSelected={selectedJob === "Product Designer"}
          onSelect={() => handleSelect("Product Designer")}
           button1="Desgin"
          button2="Business"
        />
        <FeaturedBox
          icon={<Featured6 />}
          title="Lead Designer"
          Cname="Canva"
          CAdress="Ontario, Canada"
          CDescription="Canva is looking for a Lead Designer to help the team ..."
          isSelected={selectedJob === "Lead Designer"}
          onSelect={() => handleSelect("Lead Designer")}
          button1="Desgin"
          button2="Business"
          
        />
        <FeaturedBox
          icon={<Featured7 />}
          title="Brand Strategist"
          Cname="GoDaddy"
          CAdress="Marseille, France"
          CDescription="GoDaddy is looking for a Brand Strategist to develop branding ..."
          isSelected={selectedJob === "Brand Strategist"}
          onSelect={() => handleSelect("Brand Strategist")}
           button1="Marketing"
          button2=""
          
        />
        <FeaturedBox
          icon={<Featured8 />}
          title="Data Analyst"
          Cname="Twitter"
          CAdress="San Diego, US"
          CDescription="Twitter is looking for a Data Analyst to join analytics ..."
          isSelected={selectedJob === "Data Analyst"}
          onSelect={() => handleSelect("Data Analyst")}
          button1="technology"
          button2=""
        />
      </div>
    </div>
  );
};

export default FeaturedJobs;

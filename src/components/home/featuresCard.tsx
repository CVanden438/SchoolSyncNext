import React from "react";
import Image from "next/image";
interface props {
  title: string;
  description: string;
  image: string;
}

const FeaturesCard: React.FC<props> = ({ title, description, image }) => {
  return (
    <div className="flex h-[500px] max-w-[390px] flex-col items-center justify-center gap-6 rounded-lg bg-accent p-4 drop-shadow-lg">
      <Image src={image} alt="image" height={100} width={100} />
      <p className="text-3xl font-bold text-accent-content">{title}</p>
      <p className="text-center text-lg text-accent-content">{description}</p>
    </div>
  );
};

export default FeaturesCard;

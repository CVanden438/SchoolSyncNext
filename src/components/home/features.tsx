import React from "react";
import FeaturesCard from "./featuresCard";

const features = [
  {
    title: "Chatrooms",
    description:
      "Class based chatrooms for students to easily discuess topics and ask questions to their teacherss",
    image: "/chaticon.png",
  },
  {
    title: "Assignments",
    description:
      "Teachers can submit and recieve assignments from students for easy organisation of classwork.",
    image: "/assignmenticon.png",
  },
  {
    title: "Progress Tracking",
    description:
      "Teachers can keep track of their students to track their progress over time and see their performance.",
    image: "/progressicon.png",
  },
  {
    title: "Emails",
    description:
      "Teachers can send out emails to their students, either by class or to everyone.",
    image: "/emailicon.png",
  },
];

const Features = () => {
  return (
    <section className="lg:h-screen">
      <p className="pt-12 pb-12 text-center text-7xl font-bold text-primary">
        Features
      </p>
      <div className="grid grid-cols-1 gap-6 p-4 lg:grid-cols-4 lg:gap-0">
        <div className="lg:mt-8">
          <FeaturesCard
            title={features[0]?.title as string}
            description={features[0]?.description as string}
            image={features[0]?.image as string}
          />
        </div>
        <div className="lg:mt-20">
          <FeaturesCard
            title={features[1]?.title as string}
            description={features[1]?.description as string}
            image={features[1]?.image as string}
          />
        </div>
        <div className="">
          <FeaturesCard
            title={features[2]?.title as string}
            description={features[2]?.description as string}
            image={features[2]?.image as string}
          />
        </div>
        <div className="lg:mt-28">
          <FeaturesCard
            title={features[3]?.title as string}
            description={features[3]?.description as string}
            image={features[3]?.image as string}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;

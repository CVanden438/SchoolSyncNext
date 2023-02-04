import React from "react";

const Pricing = () => {
  return (
    <section className="lg:h-screen">
      <p className="pt-12 pb-12 text-center text-7xl font-bold text-primary">
        Pricing
      </p>
      <div className="flex w-full flex-col p-4 lg:flex-row">
        <div className="card rounded-box grid h-[500px] flex-grow place-items-center bg-base-300 drop-shadow-lg">
          <p className="text-5xl font-bold text-accent-content">Standard</p>
          <p className="text-3xl text-secondary-focus">£1 per pupil per year</p>
          <ul className="flex h-[300px] list-disc flex-col justify-between">
            <li className="text-2xl text-accent-content">Featue/Benefit</li>
            <li className="text-2xl text-accent-content">Featue/Benefit</li>
            <li className="text-2xl text-accent-content">Featue/Benefit</li>
            <li className="text-2xl text-accent-content">Featue/Benefit</li>
          </ul>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="card rounded-box grid h-[500px] flex-grow place-items-center bg-base-300 drop-shadow-lg">
          <p className="text-5xl font-bold text-accent-content">Premium</p>
          <p className="text-3xl text-secondary-focus">
            £1.50 per pupil per year
          </p>
          <ul className="flex h-[300px] list-disc flex-col justify-between">
            <li className="text-2xl text-accent-content">Featue/Benefit</li>
            <li className="text-2xl text-accent-content">Featue/Benefit</li>
            <li className="text-2xl text-accent-content">Featue/Benefit</li>
            <li className="text-2xl text-accent-content">Featue/Benefit</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

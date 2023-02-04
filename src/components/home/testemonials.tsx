import React from "react";
import Image from "next/image";
const Testemonials = () => {
  return (
    <section className="pb-12">
      <p className="pb-12 text-center text-7xl font-bold text-primary">
        Testemonials
      </p>
      <div className="flex flex-col items-center gap-10">
        {/* Testemonial 1 */}
        <div className="-ml-[400px] w-1/2 rounded-lg border bg-accent/70 p-3 drop-shadow-lg">
          <div className="mb-2 flex">
            <Image
              src="/test1.jpg"
              alt="testemonial image"
              height={60}
              width={60}
              //   className="mask mask-circle"
              className="mr-3 aspect-square rounded-full object-cover"
            />
            <div>
              <p className="font-bold">John Johnson</p>
              <p>Teacher - Wilburn High School</p>
            </div>
          </div>
          <p>
            SchoolSync is the best website I have ever used in my whole life.
            Our school is doing incredible and I account that entierly to our
            useage of SchoolSync! I highly recommend this website to anyone
            looking for a convenient and effective way to further their
            education.
          </p>
        </div>
        {/* Testemonial 2 */}
        <div className="ml-[400px] w-1/2 rounded-lg border bg-accent/70 p-3 drop-shadow-lg">
          <div className="mb-2 flex">
            <Image
              src="/test2.jpg"
              alt="testemonial image"
              height={60}
              width={60}
              //   className="mask mask-circle"
              className="mr-3 aspect-square rounded-full object-cover"
            />
            <div>
              <p className="font-bold">Dwayne Rockman</p>
              <p>Student - RockCliff College</p>
            </div>
          </div>
          <p>
            I have been using SchoolSync for the past year and it has completely
            transformed my learning experience. The platform is user-friendly
            and provides a wealth of resources. The virtual classroom features
            have allowed me to connect with my teachers and classmates in
            real-time, making the learning experience feel easy and accessible.
          </p>
        </div>
        {/* Testemonical 3 */}
        <div className="-ml-[400px] w-1/2 rounded-lg border bg-accent/70 p-3 drop-shadow-lg">
          <div className="mb-2 flex">
            <Image
              src="/test3.jpg"
              alt="testemonial image"
              height={60}
              width={60}
              //   className="mask mask-circle"
              className="mr-3 aspect-square rounded-full object-cover"
            />
            <div>
              <p className="font-bold">Dwayne Rockman</p>
              <p>Student - RockCliff College</p>
            </div>
          </div>
          <p>
            I have been using SchoolSync for the past year and it has completely
            transformed my learning experience. The platform is user-friendly
            and provides a wealth of resources. The virtual classroom features
            have allowed me to connect with my teachers and classmates in
            real-time, making the learning experience feel easy and accessible.
          </p>
        </div>
        {/* Testemonial 4 */}
        <div className="ml-[400px] w-1/2 rounded-lg border bg-accent/70 p-3 drop-shadow-lg">
          <div className="mb-2 flex">
            <Image
              src="/test4.jpg"
              alt="testemonial image"
              height={60}
              width={60}
              //   className="mask mask-circle"
              className="mr-3 aspect-square rounded-full object-cover"
            />
            <div>
              <p className="font-bold">Dwayne Rockman</p>
              <p>Student - RockCliff College</p>
            </div>
          </div>
          <p>
            I have been using SchoolSync for the past year and it has completely
            transformed my learning experience. The platform is user-friendly
            and provides a wealth of resources. The virtual classroom features
            have allowed me to connect with my teachers and classmates in
            real-time, making the learning experience feel easy and accessible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testemonials;

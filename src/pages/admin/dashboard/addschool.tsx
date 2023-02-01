import React, { useState } from "react";
import Sidebar from "../../../components/admin/sidebar";
import { api } from "../../../utils/api";
// name: z.string(),
// road: z.string(),
// city: z.string(),
// country: z.string(),
const AdminAddSchool = () => {
  const [name, setName] = useState("");
  const [road, setRoad] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const addSchool = api.admin.addSchool.useMutation({});
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addSchool.mutateAsync({ name, road, city, country });
  };
  return (
    <div>
      <Sidebar>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="m-auto mt-20 flex w-5/6 flex-col gap-4 md:mt-40 md:w-1/2"
        >
          <label htmlFor="name" className="text-xl font-bold text-neutral">
            School Name
          </label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="h-12 rounded-lg bg-neutral-content pl-2 pr-2 pt-1 pb-1 text-lg"
          />
          <label htmlFor="road" className="text-xl font-bold text-neutral">
            Road
          </label>
          <input
            id="road"
            value={road}
            onChange={(e) => setRoad(e.target.value)}
            type="text"
            className="h-12 rounded-lg bg-neutral-content pl-2 pr-2 pt-1 pb-1 text-lg"
          />
          <label htmlFor="city" className="text-xl font-bold text-neutral">
            City
          </label>
          <input
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            type="text"
            className="h-12 rounded-lg bg-neutral-content pl-2 pr-2 pt-1 pb-1 text-lg"
          />
          <label htmlFor="country" className="text-xl font-bold text-neutral">
            Country
          </label>
          <input
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            type="text"
            className="h-12 rounded-lg bg-neutral-content pl-2 pr-2 pt-1 pb-1 text-lg"
          />
          <button type="submit" className="btn mt-2">
            Add School
          </button>
        </form>
      </Sidebar>
    </div>
  );
};

export default AdminAddSchool;

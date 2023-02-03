import React, { useState } from "react";
import { api, RouterOutputs } from "../../utils/api";

type modalProps = {
  data: RouterOutputs["admin"]["getSchools"][number];
  close: React.Dispatch<React.SetStateAction<boolean>>;
  refetch: () => void;
};
const EditSchoolModalContent: React.FC<modalProps> = (props) => {
  const [name, setName] = useState(props.data?.name);
  const [road, setRoad] = useState(props.data?.road);
  const [city, setCity] = useState(props.data?.city);
  const [country, setCountry] = useState(props.data?.country);
  const editSchool = api.admin.editSchool.useMutation();
  const handleEditSchool = async () => {
    if (!name || !road || !city || !country) {
      return;
    }
    await editSchool.mutateAsync({
      name,
      road,
      city,
      country,
      id: props?.data.id,
    });
    props.close(true);
    props.refetch();
  };
  return (
    <>
      <form className="flex flex-col gap-4">
        <label htmlFor="name" className="text-xl font-bold text-neutral">
          Name
        </label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="name"
          className="h-12 rounded-lg bg-neutral-content pl-2 pr-2 pt-1 pb-1 text-lg"
        />
        <label htmlFor="road" className="text-xl font-bold text-neutral">
          Street
        </label>
        <input
          type="text"
          id="road"
          value={road}
          placeholder="road"
          onChange={(e) => setRoad(e.target.value)}
          className="h-12 rounded-lg bg-neutral-content pl-2 pr-2 pt-1 pb-1 text-lg"
        />
        <label htmlFor="city" className="text-xl font-bold text-neutral">
          City
        </label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="h-12 rounded-lg bg-neutral-content pl-2 pr-2 pt-1 pb-1 text-lg"
        />
        <label htmlFor="country" className="text-xl font-bold text-neutral">
          Country
        </label>
        <input
          type="text"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="h-12 rounded-lg bg-neutral-content pl-2 pr-2 pt-1 pb-1 text-lg"
        />
        <button className="btn" onClick={handleEditSchool}>
          Save Changes
        </button>
      </form>
    </>
  );
};

export default EditSchoolModalContent;

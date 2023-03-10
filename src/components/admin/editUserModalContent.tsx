import React, { useState } from "react";
import { api, RouterOutputs } from "../../utils/api";

type modalProps = {
  data: RouterOutputs["admin"]["getUsers"][number];
  close: React.Dispatch<React.SetStateAction<boolean>>;
  refetch: () => void;
  role: string;
};
const EditUserModalContent: React.FC<modalProps> = (props) => {
  const [name, setName] = useState(props.data?.userName);
  const [email, setEmail] = useState(props.data?.email);
  const [school, setSchool] = useState(props.data?.schoolId);
  const editStudent = api.admin.editStudent.useMutation({});
  const editTeacher = api.admin.editTeacher.useMutation({});
  const handleEditUser = async () => {
    if (!name || !email || !school) {
      return;
    }
    if (props?.role === "STUDENT") {
      await editStudent.mutateAsync({ name, email, id: props?.data.id });
    } else {
      await editTeacher.mutateAsync({ name, email, id: props?.data.id });
    }
    props.refetch();
    props.close(true);
  };
  console.log(props?.role);
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
        <label htmlFor="email" className="text-xl font-bold text-neutral">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 rounded-lg bg-neutral-content pl-2 pr-2 pt-1 pb-1 text-lg"
        />
        <label htmlFor="school" className="text-xl font-bold text-neutral">
          School
        </label>
        <input
          type="text"
          id="school"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
          className="h-12 rounded-lg bg-neutral-content pl-2 pr-2 pt-1 pb-1 text-lg"
        />
        <button className="btn" onClick={handleEditUser}>
          Save Changes
        </button>
      </form>
    </>
  );
};

export default EditUserModalContent;

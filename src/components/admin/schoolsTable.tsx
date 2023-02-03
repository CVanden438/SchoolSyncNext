import React, { useState } from "react";
import { api, RouterOutputs } from "../../utils/api";
import Modal from "../modal";
import EditSchoolModalContent from "./editSchoolModalContent";

type pageProps = {
  data: RouterOutputs["admin"]["getSchools"];
  refetch: () => void;
};
const AdminSchoolsTable: React.FC<pageProps> = (props) => {
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState<null | string>(null);
  const [schoolData, setSchoolData] = useState<
    pageProps["data"][number] | null
  >(null);
  const deleteSchool = api.admin.deleteSchool.useMutation();
  const handleDelete = async () => {
    if (!deleteId) {
      return;
    }
    await deleteSchool.mutateAsync({ id: deleteId as string });
    setDeleteModal(false);
    props.refetch();
  };
  return (
    <div className="h-1/2 w-full overflow-x-auto overflow-y-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Address</th>
            <th>Members</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((d) => {
            return (
              <tr key={d.id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="font-bold">{d.name}</div>
                </td>
                <td>
                  {d.road}
                  <br />
                  {d.city}
                  <br />
                  {d.country}
                </td>
                <td>{d._count.members}</td>
                <th>
                  <button
                    onClick={() => {
                      setSchoolData(d);
                      setEditModal(true);
                    }}
                    className="btn-ghost btn-xs btn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="green"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </button>
                </th>
                <th>
                  <button
                    onClick={() => {
                      setDeleteId(d.id);
                      setDeleteModal(true);
                    }}
                    className="btn-ghost btn-xs btn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="red"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
        {/* <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </tfoot> */}
      </table>
      <Modal shown={editModal} close={() => setEditModal(false)}>
        <EditSchoolModalContent
          close={setEditModal}
          data={schoolData as pageProps["data"][number]}
          refetch={props?.refetch}
        />
      </Modal>
      <Modal shown={deleteModal} close={() => setDeleteModal(false)}>
        <div className="flex flex-col gap-4">
          <p className="text-lg">Are you sure you want to delete this user?</p>
          <button className="btn m-auto w-1/2" onClick={handleDelete}>
            DELETE USER
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AdminSchoolsTable;

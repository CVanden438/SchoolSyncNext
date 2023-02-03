import React, { useState } from "react";
import { api, RouterOutputs } from "../../utils/api";
import Modal from "../modal";
import EditUserModalContent from "./editUserModalContent";
import AdminUserModal from "./userModal";

type pageProps = {
  data: RouterOutputs["admin"]["getUsers"];
  refetch: () => void;
};

const AdminUsersTable: React.FC<pageProps> = (props) => {
  const [modalProps, setModalProps] = useState<
    pageProps["data"][number] | null
  >(null);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const deleteUser = api.admin.deleteUser.useMutation();
  const handleDelete = async () => {
    if (!deleteId) {
      return;
    }
    await deleteUser.mutateAsync({ id: deleteId as string });
    setDeleteModal(false);
    props.refetch();
  };
  return (
    <div className="h-[600px] w-full overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
            <th>School</th>
            <th>Role</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((user) => {
            return (
              <tr key={user.id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <th>{user.school.name}</th>
                <th>{user.role}</th>
                <th>
                  <button
                    onClick={() => {
                      setModalProps(user);
                      setEditModal(true);
                    }}
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
                      setDeleteId(user.id);
                      setDeleteModal(true);
                    }}
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
      </table>
      {/* {modalProps && (
        <AdminUserModal data={modalProps as pageProps["data"][number]} />
      )} */}
      <Modal shown={editModal} close={() => setEditModal(false)}>
        <EditUserModalContent
          close={setEditModal}
          data={modalProps as pageProps["data"][number]}
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

export default AdminUsersTable;

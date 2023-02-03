import React from "react";
import Sidebar from "../../../components/admin/sidebar";
import AdminUserModal from "../../../components/admin/userModal";
import AdminUsersTable from "../../../components/admin/usersTable";
import { api } from "../../../utils/api";

const AdminUsers = () => {
  const { data: usersData, refetch } = api.admin.getUsers.useQuery(undefined, {
    refetchOnWindowFocus: false,
  });
  return (
    <Sidebar>
      <div className="w-5/6">
        {usersData && <AdminUsersTable data={usersData} refetch={refetch} />}
      </div>
      {/* <AdminUserModal /> */}
    </Sidebar>
  );
};

export default AdminUsers;

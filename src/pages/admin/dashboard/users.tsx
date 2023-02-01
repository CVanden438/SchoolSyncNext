import React from "react";
import Sidebar from "../../../components/admin/sidebar";
import AdminUsersTable from "../../../components/admin/usersTable";
import { api } from "../../../utils/api";

const AdminUsers = () => {
  const { data: usersData } = api.admin.getUsers.useQuery(undefined, {
    refetchOnWindowFocus: false,
  });
  return (
    <Sidebar>
      <div className="w-5/6">
        {usersData && <AdminUsersTable data={usersData} />}
      </div>
    </Sidebar>
  );
};

export default AdminUsers;

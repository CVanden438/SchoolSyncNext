import React, { useState } from "react";
import Sidebar from "../../../components/admin/sidebar";
import AdminUserModal from "../../../components/admin/userModal";
import AdminUsersTable from "../../../components/admin/usersTable";
import { api } from "../../../utils/api";

const AdminUsers = () => {
  const [role, setRole] = useState("STUDENT");
  const { data: studentData, refetch: studentRefetch } =
    api.admin.getStudents.useQuery(undefined);
  const { data: teacherData, refetch: teacherRefetch } =
    api.admin.getTeachers.useQuery(undefined);
  return (
    <Sidebar>
      <button
        onClick={() => {
          setRole("STUDENT");
          studentRefetch;
        }}
      >
        STUDENTS
      </button>
      <button
        onClick={() => {
          setRole("TEACHERS");
          teacherRefetch;
        }}
      >
        TEACHERS
      </button>
      <div className="w-5/6">
        {studentData && (
          <AdminUsersTable
            data={role === "STUDENT" ? studentData : teacherData}
            refetch={role === "STUDENT" ? studentRefetch : teacherRefetch}
            role={role}
          />
        )}
      </div>
      {/* <AdminUserModal /> */}
    </Sidebar>
  );
};

export default AdminUsers;

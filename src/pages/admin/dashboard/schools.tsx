import React from "react";
import AdminSchoolsTable from "../../../components/admin/schoolsTable";
import Sidebar from "../../../components/admin/sidebar";
import { api } from "../../../utils/api";

const AdminSchools = () => {
  const { data: schoolsData } = api.admin.getSchools.useQuery(undefined, {
    refetchOnWindowFocus: false,
  });
  return (
    <Sidebar>
      <div className="w-5/6">
        {schoolsData && <AdminSchoolsTable data={schoolsData} />}
      </div>
    </Sidebar>
  );
};

export default AdminSchools;

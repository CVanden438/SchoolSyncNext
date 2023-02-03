import React from "react";
import AdminSchoolsTable from "../../../components/admin/schoolsTable";
import Sidebar from "../../../components/admin/sidebar";
import { api } from "../../../utils/api";

const AdminSchools = () => {
  const { data: schoolsData, refetch } = api.admin.getSchools.useQuery(
    undefined,
    {
      refetchOnWindowFocus: false,
    }
  );
  return (
    <Sidebar>
      <div className="grid w-5/6 items-center">
        {schoolsData && (
          <AdminSchoolsTable refetch={refetch} data={schoolsData} />
        )}
      </div>
    </Sidebar>
  );
};

export default AdminSchools;

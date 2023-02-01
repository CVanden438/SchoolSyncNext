import React from "react";
import { RouterOutputs } from "../../utils/api";

type pageProps = {
  data: RouterOutputs["admin"]["getSchools"];
};
const AdminSchoolsTable: React.FC<pageProps> = (props) => {
  return (
    <div className="w-full overflow-x-auto">
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
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((d) => {
            return (
              <tr>
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
                  <button className="btn-ghost btn-xs btn">details</button>
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
    </div>
  );
};

export default AdminSchoolsTable;

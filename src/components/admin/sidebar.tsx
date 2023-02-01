import Link from "next/link";
import React from "react";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="drawer-mobile drawer">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label
          htmlFor="my-drawer-2"
          className="btn-primary drawer-button btn absolute left-0 top-16 lg:hidden"
        >
          Open drawer
        </label>
        {children}
      </div>
      <div className="drawer-side mt-16">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu w-1/2 bg-neutral p-4 text-base-content lg:w-[250px]">
          <li>
            <Link
              href="/admin/dashboard/addschool"
              className="text-neutral-content"
            >
              Add School
            </Link>
          </li>
          <li>
            <Link
              className="text-neutral-content"
              href="/admin/dashboard/overview"
            >
              Overview
            </Link>
            <Link
              className="text-neutral-content"
              href="/admin/dashboard/schools"
            >
              Schools
            </Link>
            <Link
              className="text-neutral-content"
              href="/admin/dashboard/users"
            >
              Users
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

import React from "react";
import Sidebar from "../components/Admin/common/Sidebar";
import Employees from "../components/Admin/Employees/Employees";
import Chemists from "../components/Admin/Chemists/Chemists";
import Doctors from "../components/Admin/Doctors/Doctors";
import Products from "../components/Admin/Products/Products";
import Distributors from "../components/Admin/Distributors/Distributors";
import Layout from "../components/Admin/common/Layout";

const AdminRoutes = [
  {
    path: "/employees",
    exact: true,
    layout: () => <Layout />,
    main: () => <Employees />
  },
  {
    path: "/chemists",
    exact: true,
    layout: () => <Layout />,
    main: () => <Chemists />
  },
  {
    path: "/doctors",
    exact: true,
    layout: () => <Layout />,
    main: () => <Doctors />
  },
  {
    path: "/products",
    exact: true,
    layout: () => <Layout />,
    main: () => <Products />
  },
  {
    path: "/distributors",
    exact: true,
    layout: () => <Layout />,
    main: () => <Distributors />
  }
];

export default AdminRoutes;

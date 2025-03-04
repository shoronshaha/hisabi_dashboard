import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotFound } from "../pages/NotFound";
import { Master } from "../components/layouts/Master";
import DashboardPage from "../pages/dashboard/DashboardPage";
import LoginPage from "../pages/auth/LoginPage";
import OrderPage from "../pages/order/OrderPage";
import UsersListPage from "../pages/user/usersList/UsersListPage";
import RolesListPage from "../pages/user/rolesList/RolesListPage";
import AddedNewUserFrom from "../pages/user/usersList/content/AddedNewUser";
import RolePermissionsForm from "../pages/user/rolesList/RolePermissionsForm";
import PosPage from "../pages/sales/pos/PosPage";

const MainRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Master />}>
          <Route index element={<DashboardPage />} />
          <Route path="order" element={<OrderPage />} />

          <Route path="user">
            <Route path="userList" element={<UsersListPage />} />
            <Route path="add-new" element={<AddedNewUserFrom />} />
            <Route path="rolesList" element={<RolesListPage />} />
            <Route path="add-role" element={<RolePermissionsForm />} />
          </Route>
          <Route path="sales">
            <Route path="pos" element={<PosPage />} />
            {/* <Route path="add-sales" element={<PosPage />} />
            <Route path="sales-list" element={<PosPage />} />
            <Route path="sales-payments" element={<PosPage />} />
            <Route path="sales-return-list" element={<PosPage />} /> */}
          </Route>

          {/* Catch-All Route */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default MainRoute;

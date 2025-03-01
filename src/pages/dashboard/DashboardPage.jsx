import { BarChart } from "../../components/chart/BarChart";
import { PieChart } from "../../components/chart/PieChart";
import { Container } from "../../components/layouts/Container";
import DashboardCard from "./content/DashboardCard";
import DashboardDetailsCard from "./content/DashboardDetailsCard";
import DashboardTable from "./content/DashboardTable";
import { ManageOrders } from "../../components/ManageOders";
import LineChart from "../../components/chart/LineChart";

function DashboardPage() {
  return (
    <Container>
      <div className="min-h-[90vh] space-y-6 p-4">
        {/* Dashboard Overview */}
        <DashboardCard />
        <DashboardDetailsCard />
        <LineChart></LineChart>
        {/* Bar Chart and Dashboard Table */}
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 min-w-0">
            <BarChart />
          </div>
          <div className="flex-1 min-w-0 overflow-x-auto">
            <DashboardTable />
          </div>
        </div>

        {/* Dashboard Table and Pie Chart */}
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 min-w-0 overflow-x-auto">
            <DashboardTable />
          </div>
          <div className="flex-1 min-w-0">
            <PieChart />
          </div>
        </div>

        {/* Order Management */}
        <div className="overflow-x-auto">
          <ManageOrders />
        </div>
      </div>
    </Container>
  );
}

export default DashboardPage;

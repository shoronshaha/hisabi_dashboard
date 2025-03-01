import { Container } from "../../components/layouts/Container";
import { ManageService } from "../../components/ManageService";
import OrderStatistics from "../../components/OrderStatistics";
import { ManageOrders } from "../../components/ManageOders";
import OrderCard from "./OrderCard";
import RadarChart from "../../components/chart/RadarChart";
import RestaurantOrder from "./pos";

function OrderPage() {
  return (
    <Container>
      <div className="min-h-[90vh] space-y-6 p-4">
        <div>
          <RestaurantOrder />
        </div>
        <OrderCard></OrderCard>
        <OrderStatistics></OrderStatistics>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 min-w-0">
            <RadarChart></RadarChart>
          </div>
          <div className="flex-1 min-w-0 overflow-x-auto">
            <ManageService></ManageService>
          </div>
        </div>

        <ManageOrders></ManageOrders>
      </div>
    </Container>
  );
}

export default OrderPage;

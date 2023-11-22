import React from "react";
import Head from "../layout/head/Head";
import Content from "../layout/content/Content";
// import SaleRevenue from "../components/partials/sales/sale-revenue/SaleRevenue";
// import ActiveSubscription from "../components/partials/sales/active-subscription/ActiveSubscription";
// import AvgSubscription from "../components/partials/sales/avg-subscription/AvgSubscription";
// import SalesOverview from "../components/partials/sales/sales-overview/SalesOverview";
// import TransactionTable from "../components/partials/sales/transaction/Transaction";
// import RecentActivity from "../components/partials/sales/recent-activity/Activity";
// import NewsUsers from "../components/partials/sales/new-users/User";
// import Support from "../components/partials/sales/support-request/Support";
// import Notifications from "../components/partials/sales/notification/Notification";
// import { Card, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
// import {
//   Block,
//   BlockHead,
//   BlockHeadContent,
//   BlockTitle,
//   BlockBetween,
//   PreviewAltCard,
//   Icon,
//   Button,
//   Row,
//   Col,
// } from "../components/Component";

const SalesHome = () => {
  return (
    <React.Fragment>
      <Head title="Sales Dashboard" />
      <Content>
        <h5>User Managment</h5>
      </Content>
    </React.Fragment>
  );
};

export default SalesHome;

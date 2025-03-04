const sidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: {
      active: "HiOutlineHome",
      inactive: "HiOutlineHome",
    },
    userType: ["ADMIN", "user"],
  },

  {
    title: "User",
    icon: {
      active: "FaUserGear",
      inactive: "FaUserGear",
    },
    userType: ["ADMIN", "user"],
    subMenu: [
      {
        title: "Users List",
        path: "/dashboard/user/userList",
        userType: ["ADMIN", "user"],
      },
      {
        title: "Roles List",
        path: "/dashboard/user/rolesList",
        userType: ["ADMIN"],
      },
    ],
  },
  {
    title: "Sales",
    icon: {
      active: "MdOutlinePostAdd",
      inactive: "MdOutlinePostAdd",
    },
    userType: ["ADMIN", "user"],
    subMenu: [
      {
        title: "POS",
        path: "/dashboard/sales/pos",
        userType: ["ADMIN", "user"],
      },
      {
        title: "Add Sale",
        path: "/booking/in-progress",
        userType: ["ADMIN"],
      },
      {
        title: "Sales List",
        path: "/booking/issued",
        userType: ["ADMIN", "user"],
      },
      {
        title: "Sales Payments",
        path: "/booking/history",
        userType: ["ADMIN", "user"],
      },
      {
        title: "Sales Returns List",
        path: "/booking/history",
        userType: ["ADMIN", "user"],
      },
    ],
  },

  // {
  //   title: "Order",
  //   path: "/dashboard/order",
  //   icon: {
  //     active: "Fa500Px",
  //     inactive: "Fa500Px",
  //   },
  //   userType: ["ADMIN"],
  // },

  // //   ___ Label Booking ___
  // {
  //   label: "Booking",
  //   userType: ["ADMIN", "user"],
  // },
  {
    title: "Contacts",
    icon: {
      active: "IoMdContacts",
      inactive: "IoMdContacts",
    },
    userType: ["ADMIN", "user"],
    subMenu: [
      {
        title: "Add Customer",
        path: "/booking/hold",
        userType: ["", "user"],
      },
      {
        title: "Customer List",
        path: "/booking/in-progress",
        userType: ["ADMIN"],
      },
      {
        title: "Add Supplier",
        path: "/booking/issued",
        userType: ["ADMIN", "user"],
      },
      {
        title: "Suppliers List",
        path: "/booking/history",
        userType: ["ADMIN", "user"],
      },
      {
        title: "Import Customer",
        path: "/booking/history",
        userType: ["ADMIN", "user"],
      },
      {
        title: "Import Suppliers",
        path: "/booking/history",
        userType: ["ADMIN", "user"],
      },
    ],
  },
  {
    title: "Advance",
    icon: {
      active: "GiLevelFourAdvanced",
      inactive: "GiLevelFourAdvanced",
    },
    userType: ["ADMIN", "user"],
    subMenu: [
      {
        title: "Add Advance",
        path: "/dashboard/advance/add-advance",
        userType: ["ADMIN", "user"],
      },
      {
        title: "Advance List",
        path: "/dashboard/advance/advance-list",
        userType: ["ADMIN", "user"],
      },
    ],
  },
  {
    title: "Coupons",
    icon: {
      active: "RiCouponLine",
      inactive: "RiCouponLine",
    },
    userType: ["ADMIN", "user"],
    subMenu: [
      {
        title: "Create Customer ",
        path: "/dashboard/coupons/create-customer",
        userType: ["ADMIN", "user"],
      },
      {
        title: "Customer Coupons List",
        path: "/dashboard/Coupons/customer-list",
        userType: ["ADMIN", "user"],
      },
      {
        title: "Create Coupon",
        path: "/dashboard/Coupons/create-customer",
        userType: ["ADMIN", "user"],
      },
      {
        title: "Coupons Master",
        path: "/dashboard/Coupons/master",
        userType: ["ADMIN", "user"],
      },
    ],
  },

  {
    title: "Quotation",
    icon: {
      active: "FaUserGear",
      inactive: "FaUserGear",
    },
    userType: ["ADMIN", "user"],
    subMenu: [
      {
        title: "New Quotation",
        path: "/dashboard/quotation/new-quotation",
        userType: ["ADMIN", "user"],
      },
      {
        title: "Quotation List",
        path: "/dashboard/quotation/quotation-ist",
        userType: ["ADMIN"],
      },
    ],
  },

  {
    title: "Purchase",
    icon: {
      active: "FaUserGear",
      inactive: "FaUserGear",
    },
    userType: ["ADMIN", "user"],
    subMenu: [
      {
        title: "New Purchase",
        path: "/dashboard/purchase/add-purchase",
        userType: ["ADMIN", "user"],
      },
      {
        title: "Purchase List",
        path: "/dashboard/purchase/purchase-list",
        userType: ["ADMIN"],
      },
      {
        title: "Purchase Returns List",
        path: "/dashboard/purchase/returns-list",
        userType: ["ADMIN"],
      },
    ],
  },
  {
    title: "Accounts",
    icon: {
      active: "FaUserGear",
      inactive: "FaUserGear",
    },
    userType: ["ADMIN", "user"],
    subMenu: [
      {
        title: "Add Account",
        path: "/dashboard/accounts/add-account",
        userType: ["ADMIN", "user"],
      },
      {
        title: "Accounts List",
        path: "/dashboard/accounts/account-list",
        userType: ["ADMIN"],
      },
      {
        title: "Money Transfer List",
        path: "/dashboard/accounts/transfer-list",
        userType: ["ADMIN"],
      },
      {
        title: "Deposit List",
        path: "/dashboard/accounts/deposit-list",
        userType: ["ADMIN"],
      },
      {
        title: "Cash Transactions",
        path: "/dashboard/accounts/cash-transactions",
        userType: ["ADMIN"],
      },
    ],
  },
  {
    title: "Items",
    icon: {
      active: "FaUserGear",
      inactive: "FaUserGear",
    },
    userType: ["ADMIN", "user"],
    subMenu: [
      {
        title: "Add Item",
        path: "/dashboard/items/add-item",
        userType: ["ADMIN", "user"],
      },
      {
        title: "Add Service",
        path: "/dashboard/items/add-service",
        userType: ["ADMIN"],
      },
      {
        title: "Items List",
        path: "/dashboard/items/items-list",
        userType: ["ADMIN"],
      },
      {
        title: "Categories List",
        path: "/dashboard/items/categories-list",
        userType: ["ADMIN"],
      },
      {
        title: "Brands List",
        path: "/dashboard/items/brand-list",
        userType: ["ADMIN"],
      },
      {
        title: "Variants List",
        path: "/dashboard/items/variants-list",
        userType: ["ADMIN"],
      },
      {
        title: "Print Labels",
        path: "/dashboard/items/print-labels",
        userType: ["ADMIN"],
      },
      {
        title: "Import Items",
        path: "/dashboard/items/import-items",
        userType: ["ADMIN"],
      },
      {
        title: "Import Services",
        path: "/dashboard/items/import-services",
        userType: ["ADMIN"],
      },
    ],
  },
  {
    title: "Stock",
    icon: {
      active: "FaUserGear",
      inactive: "FaUserGear",
    },
    userType: ["ADMIN", "user"],
    subMenu: [
      {
        title: "Adjustment List",
        path: "/dashboard/Stock/adjustment-list",
        userType: ["ADMIN", "user"],
      },
      {
        title: "Transfer List",
        path: "/dashboard/stock/transfer-ist",
        userType: ["ADMIN"],
      },
    ],
  },
  {
    title: "Expense",
    icon: {
      active: "FaUserGear",
      inactive: "FaUserGear",
    },
    userType: ["ADMIN", "user"],
    subMenu: [
      {
        title: "Expense List",
        path: "/dashboard/expense/expense-list",
        userType: ["ADMIN", "user"],
      },
      {
        title: "Categories List",
        path: "/dashboard/expense/categories-list",
        userType: ["ADMIN"],
      },
    ],
  },
  {
    title: "Messaging",
    icon: {
      active: "FaUserGear",
      inactive: "FaUserGear",
    },
    userType: ["ADMIN", "user"],
    subMenu: [
      {
        title: "Send Message",
        path: "/dashboard/messaging/send-message",
        userType: ["ADMIN", "user"],
      },
      {
        title: "Messaging Templates",
        path: "/dashboard/messaging/messaging-templates",
        userType: ["ADMIN"],
      },
    ],
  },
  {
    title: "Reports",
    icon: {
      active: "FaUserGear",
      inactive: "FaUserGear",
    },
    userType: ["ADMIN", "user"],
    subMenu: [
      {
        title: "Profit & Loss Report",
        path: "/dashboard/reports/profit&loss",
        userType: ["ADMIN", "user"],
      },
      {
        title: "Sales & Payment Report",
        path: "/dashboard/reports/sales&payments",
        userType: ["ADMIN"],
      },
      {
        title: "Customer Orders",
        path: "/dashboard/reports/customer",
        userType: ["ADMIN"],
      },
      {
        title: "GSTR-1 Report",
        path: "/dashboard/reports/GSTR-1",
        userType: ["ADMIN"],
      },
      {
        title: "GSTR-2 Report",
        path: "/dashboard/reports/GSTR-2",
        userType: ["ADMIN"],
      },
      {
        title: "Sales GST Report",
        path: "/dashboard/reports/sales-GST",
        userType: ["ADMIN"],
      },
      {
        title: "Purchase GST Report",
        path: "/dashboard/reports/purchase-GST",
        userType: ["ADMIN"],
      },
      {
        title: "Sales Tax Report",
        path: "/dashboard/reports/sales-tax",
        userType: ["ADMIN"],
      },
      {
        title: "Purchase Tax Report",
        path: "/dashboard/reports/purchase-tax",
        userType: ["ADMIN"],
      },
      {
        title: "Supplier Items Report",
        path: "/dashboard/reports/supplier-items",
        userType: ["ADMIN"],
      },
      {
        title: "Sales Report",
        path: "/dashboard/reports/sales",
        userType: ["ADMIN"],
      },
      {
        title: "Sales Return Report",
        path: "/dashboard/reports/sales-return",
        userType: ["ADMIN"],
      },
      {
        title: "Seller Points Report",
        path: "/dashboard/reports/seller-points",
        userType: ["ADMIN"],
      },
      {
        title: "Expense Report",
        path: "/dashboard/reports/expense",
        userType: ["ADMIN"],
      },
      {
        title: "Stock Report",
        path: "/dashboard/reports/stock",
        userType: ["ADMIN"],
      },
      {
        title: "Sales Item Report",
        path: "/dashboard/reports/sales-item",
        userType: ["ADMIN"],
      },
      {
        title: "Return Items Report",
        path: "/dashboard/reports/return-items",
        userType: ["ADMIN"],
      },
      {
        title: "Purchase Payments Report",
        path: "/dashboard/reports/purchase-payments",
        userType: ["ADMIN"],
      },
      {
        title: "Sales Payments Report",
        path: "/dashboard/reports/sales-payments",
        userType: ["ADMIN"],
      },
    ],
  },
  {
    title: "Warehouse",
    icon: {
      active: "FaUserGear",
      inactive: "FaUserGear",
    },
    userType: ["ADMIN", "user"],
    subMenu: [
      {
        title: "Add Warehouse",
        path: "/dashboard/warehouse/add-warehouse",
        userType: ["ADMIN", "user"],
      },
      {
        title: "Warehouse List",
        path: "/dashboard/warehouse/warehouse-list",
        userType: ["ADMIN"],
      },
    ],
  },
  {
    title: "Settings",
    icon: {
      active: "FaUserGear",
      inactive: "FaUserGear",
    },
    userType: ["ADMIN", "user"],
    subMenu: [
      {
        title: "Store",
        path: "/dashboard/setting/store",
        userType: ["ADMIN", "user"],
      },
      {
        title: "Site Settings",
        path: "/dashboard/setting/site-settings",
        userType: ["ADMIN"],
      },
      {
        title: "SMS/WhatsApp API",
        path: "/dashboard/setting/sms",
        userType: ["ADMIN"],
      },
      {
        title: "SMTP",
        path: "/dashboard/setting/tax-list",
        userType: ["ADMIN"],
      },
      {
        title: "Tax List",
        path: "/dashboard/setting/units-list",
        userType: ["ADMIN"],
      },
      {
        title: "Units List",
        path: "/dashboard/setting/payments-types",
        userType: ["ADMIN"],
      },
      {
        title: "Payments Types",
        path: "/dashboard/setting/currency-list",
        userType: ["ADMIN"],
      },
      {
        title: "Currency List",
        path: "/dashboard/setting/change-password",
        userType: ["ADMIN"],
      },
      {
        title: "Change Password",
        path: "/dashboard/setting/change-password",
        userType: ["ADMIN"],
      },
      {
        title: "Database Backup",
        path: "/dashboard/setting/database-backup",
        userType: ["ADMIN"],
      },
    ],
  },
  {
    title: "Help",
    path: "/dashboard/help",
    icon: {
      active: "HiOutlineHome",
      inactive: "HiOutlineHome",
    },
    userType: ["ADMIN", "user"],
  },
];

export default sidebarData;

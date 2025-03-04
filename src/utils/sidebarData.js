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

  //   ___ Label Re Issue ___
  {
    title: "Re Issue",
    icon: {
      active: "HiOutlineHome",
      inactive: "HiOutlineHome",
    },
    userType: ["ADMIN", "user"],
    subMenu: [
      {
        title: "Hold",
        path: "/reissue/hold",
        userType: ["ADMIN", "user"],
      },
      {
        title: "In Progress",
        path: "/reissue/in-progress",
        userType: ["ADMIN"],
      },
      {
        title: "Issued",
        path: "/reissue/issued",
        userType: ["ADMIN"],
      },
      {
        title: "History",
        path: "/reissue/history",
        userType: ["ADMIN"],
      },
    ],
  },

  //   ___ Label Refund ___
  {
    title: "Refund",
    icon: {
      active: "HiOutlineHome",
      inactive: "HiOutlineHome",
    },
    userType: ["ADMIN"],
    subMenu: [
      {
        title: "Hold",
        path: "/refund/hold",
        userType: ["ADMIN"],
      },
      {
        title: "In Progress",
        path: "/refund/in-progress",
        userType: ["ADMIN"],
      },
      {
        title: "Issued",
        path: "/refund/issued",
        userType: ["ADMIN"],
      },
      {
        title: "History",
        path: "/refund/history",
        userType: ["ADMIN", "user"],
      },
    ],
  },

  //   ___ Label Void ___
  {
    title: "Void",
    icon: {
      active: "HiOutlineHome",
      inactive: "HiOutlineHome",
    },
    userType: ["ADMIN"],
    subMenu: [
      {
        title: "Hold",
        path: "/void/hold",
        userType: ["ADMIN"],
      },
      {
        title: "In Progress",
        path: "/void/in-progress",
        userType: ["ADMIN"],
      },
      {
        title: "Issued",
        path: "/void/issued",
        userType: ["ADMIN"],
      },
      {
        title: "History",
        path: "/void/history",
        userType: ["ADMIN"],
      },
    ],
  },

  //   ___ Label Users ___
  {
    label: "User",
    userType: ["ADMIN", "user"],
  },

  {
    title: "User ",
    path: "/user",
    icon: {
      active: "HiOutlineHome",
      inactive: "HiOutlineHome",
    },
    userType: ["ADMIN"],
  },

  //   ___ Label Staff ___
  {
    label: "Staff",
    userType: ["ADMIN", "user"],
  },
  {
    title: "Staff",
    icon: {
      active: "HiOutlineHome",
      inactive: "HiOutlineHome",
    },
    userType: ["ADMIN", "SUB_ADMIN"],
    subMenu: [
      {
        title: "ALL Staff",
        path: "/staff/all",
        userType: ["ADMIN", "SUB_ADMIN"],
      },
      {
        title: "Sub Admin",
        path: "/staff/sub-admin",
        userType: ["ADMIN"],
      },
      {
        title: "General Staff",
        path: "/staff/general",
        userType: ["ADMIN", "SUB_ADMIN"],
      },
      {
        title: "Member",
        path: "/staff/member",
        userType: ["ADMIN", "SUB_ADMIN"],
      },
    ],
  },

  //   ___ Label Supports ___
  {
    label: "Supports",
    userType: ["ADMIN", "user"],
  },
  {
    title: "Support",
    icon: {
      active: "HiOutlineHome",
      inactive: "HiOutlineHome",
    },
    userType: ["ADMIN", "user"],
    subMenu: [
      {
        title: "Pending",
        path: "/support/pending",
        userType: ["ADMIN", "user"],
      },
      {
        title: "In Progress",
        path: "/support/in-progress",
        userType: ["ADMIN"],
      },
      {
        title: "Solved",
        path: "/support/solved",
        userType: ["ADMIN"],
      },
      {
        title: "History",
        path: "/support/history",
        userType: ["ADMIN", "user"],
      },
    ],
  },

  //   ___ Label Reports ___
  {
    label: "Report",
    userType: ["ADMIN", "user"],
  },
  {
    title: "Report",
    path: "/report",
    icon: {
      active: "HiOutlineHome",
      inactive: "HiOutlineHome",
    },
    userType: ["ADMIN"],
  },
];

export default sidebarData;

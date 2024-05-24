const menu = [
  {
    heading: "Dashboards",
  },
  {
    icon: "dashboard-fill",
    text: "Dashboard",
    link: "/",
  },
  {
    icon: "account-setting-fill",
    text: "User Managment",
    link: "/user-managment",
  },
  {
    icon: "user-check-fill",
    text: "Matching Managment",
    link: "/matching-managment",
  },

  {
    icon: "swap",
    text: "Job Managment",
    link: "/job-managment",
  },
  {
    icon: "img-fill",
    text: "Banner Managment",
    link: "/banner-managment",
  },
  {
    icon: "cc-alt2-fill",
    text: "Order Managment",
    link: "/order-managment",
  },

  {
    icon: "todo",
    text: "Daily Life Managment",
    link: "/daily-life-managment",
  },
  {
    icon: "target",
    text: "Ads Managment",
    link: "/ads-managment",
  },
  {
    icon: "offer-fill",
    text: "Coupon Managment",
    link: "/coupon-managment",
  },

  {
    icon: "chat-fill",
    text: "Chat Managment",
    link: "/chat-managment",
  },
  {
    icon: "thumbs-up",
    text: "Review Managment",
    subMenu: [
      {
        text: "Company Reviews.",
        link: "/review-managment/company-review",
      },
      {
        text: "Employee Reviews",
        link: "/review-managment/employee-review",
      },
    ],
  },
  {
    icon: "speed",
    text: "Service Managment",
    link: "/service-managment",
  },

  {
    icon: "setting-fill",
    text: "Admin Settings",
    // active: true,
    subMenu: [
      {
        text: "Homepage management.",
        link: "/admin-homepage-management",
      },
      {
        text: "Account management",
        link: "/admin-account-settings",
      },
    ],
  },

  {
    icon: "menu-circled",
    text: "Form option Managment",
    // active: true,
    subMenu: [
      {
        text: "Education",
        link: "/form-options/education",
      },

      {
        text: "Gender",
        link: "/form-options/gender",
      },

      {
        text: "Nationality",
        link: "/form-options/nationality",
      },

      {
        text: "Language",
        link: "/form-options/language",
      },

      {
        text: "Job Type",
        link: "/form-options/job-type",
      },

      {
        text: "Language Ability",
        link: "/form-options/language-ability",
      },

      {
        text: "Personality",
        link: "/form-options/personality",
      },

      {
        text: "Career Ability",
        link: "/form-options/career-ability",
      },
      {
        text: "Period",
        link: "/form-options/period",
      },
      {
        text: "Payment Ability",
        link: "/form-options/payment-ability",
      },
      {
        text: "Currency Ability",
        link: "/form-options/currency-ability",
      },

      {
        text: "Experience Ability",
        link: "/form-options/experience-ability",
      },

      {
        text: "Employee Charactorer",
        link: "/form-options/employee-charactorer",
      },
      {
        text: "People (hiring)",
        link: "/form-options/people",
      },
      {
        text: "Company size (hiring)",
        link: "/form-options/company-size",
      },
      {
        text: "Form Option",
        link: "/form-options/form-option",
      },


    ],
  },
];
export default menu;

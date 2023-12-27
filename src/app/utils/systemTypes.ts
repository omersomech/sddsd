// Define a type for a navigation link
type SystemType = {
  type: string;
  badgeType: string;
};
type System = {
  [key: string]: SystemType;
};

const systemTypes: System = {
  PROD: {
    type: "Production",
    badgeType: "badge-error",
  },
  DEV: {
    type: "Developement",
    badgeType: "badge-warning",
  },
  CP: {
    type: "Copy Production",
    badgeType: "badge-warning",
  },
  TEST: {
    type: "Test",
    badgeType: "badge-info",
  },
};

export default systemTypes;

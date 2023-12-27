// Define a type for a navigation link
type NavigationLink = {
  title: string;
  url: string;
  subLinks?: NavigationLink[];
};

const navigationLinks: NavigationLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "אינפיניטי",
    url: "/infinity",
  },
  {
    title: "עומר",
    url: "/omer",
  },
  {
    title: "סביבות",
    url: "/",
    subLinks: [
      {
        title: "אינפיניטי",
        url: "/infinity",
      },
      {
        title: "הפניקס",
        url: "/fnx",
      },
    ],
  },
];

export default navigationLinks;

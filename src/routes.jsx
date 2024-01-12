import {
  PresentationChartBarIcon,
  TableCellsIcon,
  ServerStackIcon,
  RectangleStackIcon,
  DocumentTextIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/solid";
import { Home, Annonce, Tables, Gestion, Details } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <PresentationChartBarIcon {...icon} />,
        name: "Statistique",
        path: "/home",
        element: <Home />,
        op: "1",
      },
      {
        icon: <DocumentTextIcon {...icon} />,
        name: "Annonce",
        path: "/annonce",
        element: <Annonce />,
        op: "1",
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "tables",
        path: "/tables",
        element: <Tables />,
        op: "1",
      },
      {
        icon: <ComputerDesktopIcon {...icon} />,
        name: "Gestion",
        path: "/gestion",
        element: <Gestion />,
        op: "1",
      },
      {
        icon: <ComputerDesktopIcon {...icon} />,
        name: "Details",
        path: "/details",
        element: <Details />,
        op: "0",
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;

import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "@/components/DefaultLayout";
import Home from "@/pages/Home";
import HealthCenters from "@/pages/HealthCenters";
import Hospitals from "@/pages/Hospitals";
import DentalClinics from "@/pages/DentalClinics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/health-center",
        element: <HealthCenters />,
      },
      {
        path: "/hospitals",
        element: <Hospitals />,
      },
      {
        path: "/dental-clinics",
        element: <DentalClinics />,
      },
    ],
  },
]);

export default router;

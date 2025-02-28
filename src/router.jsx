import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "@/components/DefaultLayout";
import Home from "@/pages/Home";
import HealthCenters from "@/pages/HealthCenters";
import Hospitals from "@/pages/Hospitals";
import DentalClinics from "@/pages/DentalClinics";
import About from "@/pages/About";
import GovtServices from "@/pages/GovtServices";
import Veterinary from "@/pages/Veterinary";
import Dermatologist from "@/pages/Dermatologist";  

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
        path: "/dental",
        element: <DentalClinics />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/govt-services",
        element: <GovtServices />,
      },
      {
        path: "/veterinary",
        element: <Veterinary />,
      },
      {
        path: "/dermatologist",
        element: <Dermatologist />,
      },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "@/components/DefaultLayout";
import Home from "@/pages/Home";
import HealthCenters from "@/pages/HealthCenters";
import HealthCenterDetails from "@/pages/HealthCenterDetails";
import Hospitals from "@/pages/Hospitals";
import HospitalDetails from "@/pages/HospitalDetails";
import DentalClinics from "@/pages/DentalClinics";
import DentalClinicDetails from "@/pages/DentalClinicDetails";
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
        index: true,
        element: <Home />,
      },
      {
        path: "/health-center",
        element: <HealthCenters />,
      },
      {
        path: "/health-center/:id",
        element: <HealthCenterDetails />,
      },
      {
        path: "/hospitals",
        element: <Hospitals />,
      },
      {
        path: "/hospitals/:id",
        element: <HospitalDetails />,
      },
      {
        path: "/dental",
        element: <DentalClinics />,
      },
      {
        path: "/dental/:id",
        element: <DentalClinicDetails />,
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

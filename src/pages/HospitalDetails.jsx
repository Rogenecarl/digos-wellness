import { useParams } from "react-router-dom";
import HealthcareDetails from "@/components/HealthcareDetails";
import { hospitals } from "./Hospitals";

const HospitalDetails = () => {
  const { id } = useParams();
  const hospital = hospitals.find((h) => h.id === parseInt(id));

  return (
    <div className="container mx-auto py-8">
      <HealthcareDetails data={hospital} />
    </div>
  );
};

export default HospitalDetails; 
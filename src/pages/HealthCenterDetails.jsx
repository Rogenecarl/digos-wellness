import { useParams } from "react-router-dom";
import HealthcareDetails from "@/components/HealthcareDetails";
import { healthCenters } from "./HealthCenters";

const HealthCenterDetails = () => {
  const { id } = useParams();
  const healthCenter = healthCenters.find((h) => h.id === parseInt(id));

  return (
    <div className="container mx-auto py-8">
      <HealthcareDetails data={healthCenter} />
    </div>
  );
};

export default HealthCenterDetails; 
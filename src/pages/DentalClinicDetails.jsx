import { useParams } from "react-router-dom";
import HealthcareDetails from "@/components/HealthcareDetails";
import { dentalClinics } from "./DentalClinics";

const DentalClinicDetails = () => {
  const { id } = useParams();
  const dentalClinic = dentalClinics.find((d) => d.id === parseInt(id));

  return (
    <div className="container mx-auto py-8">
      <HealthcareDetails data={dentalClinic} />
    </div>
  );
};

export default DentalClinicDetails; 
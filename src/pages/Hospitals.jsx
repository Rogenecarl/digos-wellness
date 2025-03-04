import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MapPin, Phone, Clock, Star, ArrowUpRight, Users, Stethoscope, Building2, Filter, SlidersHorizontal, Search } from "lucide-react";
import NoImage from "@/components/NoImage";
import { useNavigate } from "react-router-dom";

const hospitals = [
  {
    id: 1,
    name: "Digos City Medical Center",
    image: "/no-image-available.jpg",
    rating: 4.8,
    reviews: 124,
    type: "General Hospital",
    address: "123 Healthcare Ave, Digos City",
    contact: "(082) 553-2847",
    hours: "24/7 Emergency Services",
    specialties: ["Emergency Care", "Surgery", "Pediatrics", "Cardiology"],
    facilities: ["ICU", "Operating Rooms", "Laboratory", "Pharmacy"],
    color: "bg-blue-500",
    aboutUs: "Digos City Medical Center is the region's premier healthcare institution, providing comprehensive medical services since 1980. Our hospital combines advanced medical technology with compassionate care to deliver the highest standard of healthcare to our community.",
    highlights: ["Level 3 hospital facility", "24/7 emergency services", "Advanced surgical center", "Comprehensive medical care"]
  },
  {
    id: 2,
    name: "St. Elizabeth Hospital",
    image: "/no-image-available.jpg",
    rating: 4.6,
    reviews: 98,
    type: "Private Hospital",
    address: "456 Medical Drive, Digos City",
    contact: "(082) 553-3961",
    hours: "Open 24 Hours",
    specialties: ["Internal Medicine", "Obstetrics", "Neurology", "Orthopedics"],
    facilities: ["MRI", "CT Scan", "Emergency Room", "Blood Bank"],
    color: "bg-purple-500",
    aboutUs: "St. Elizabeth Hospital has been serving the community with faith-based healthcare since 1975. We are committed to providing holistic healing that addresses both the physical and spiritual needs of our patients.",
    highlights: ["Faith-based healthcare", "Modern diagnostic center", "Specialized departments", "Holistic patient care"]
  },
  {
    id: 3,
    name: "Digos Doctors Hospital",
    image: "/no-image-available.jpg",
    rating: 4.7,
    reviews: 156,
    type: "Specialty Hospital",
    address: "789 Wellness Road, Digos City",
    contact: "(082) 553-4175",
    hours: "24/7 Services",
    specialties: ["Oncology", "Cardiology", "Pulmonology", "Nephrology"],
    facilities: ["Cancer Center", "Cardiac Cath Lab", "Dialysis Unit", "ICU"],
    color: "bg-green-500",
    aboutUs: "Digos Doctors Hospital is a specialty healthcare facility focusing on complex medical conditions. Our team of specialist physicians and advanced medical facilities enable us to handle challenging cases with expertise and precision.",
    highlights: ["Specialist medical team", "Advanced treatment centers", "Research programs", "Specialized care units"]
  },
  {
    id: 4,
    name: "South General Hospital",
    image: "/no-image-available.jpg",
    rating: 4.5,
    reviews: 87,
    type: "General Hospital",
    address: "321 Health Street, Digos City",
    contact: "(082) 553-5289",
    hours: "Open 24/7",
    specialties: ["General Medicine", "Surgery", "Pediatrics", "OB-GYN"],
    facilities: ["Emergency Room", "Operating Rooms", "Laboratory", "Pharmacy"],
    color: "bg-red-500",
    aboutUs: "South General Hospital provides accessible and affordable healthcare services to the southern region of Digos City. We maintain high standards of medical care while ensuring our services remain within reach of the community.",
    highlights: ["Affordable healthcare", "Community focus", "General medical services", "Emergency care"]
  },
  {
    id: 5,
    name: "Mindanao Medical Center",
    image: "/no-image-available.jpg",
    rating: 4.9,
    reviews: 203,
    type: "Tertiary Hospital",
    address: "567 Medical Park, Digos City",
    contact: "(082) 553-6493",
    hours: "24/7 Emergency Services",
    specialties: ["Trauma Care", "Neurosurgery", "Cardiology", "Oncology"],
    facilities: ["Trauma Center", "Brain & Spine Center", "Heart Center", "Cancer Center"],
    color: "bg-indigo-500",
    aboutUs: "Mindanao Medical Center is a leading tertiary care hospital equipped with cutting-edge medical technology and staffed by the region's top medical professionals. We serve as a referral center for complex medical cases across Mindanao.",
    highlights: ["Tertiary care services", "Advanced medical technology", "Regional referral center", "Specialized centers of excellence"]
  },
  {
    id: 6,
    name: "Holy Child Hospital",
    image: "/no-image-available.jpg",
    rating: 4.7,
    reviews: 167,
    type: "Children's Hospital",
    address: "890 Pediatric Lane, Digos City",
    contact: "(082) 553-7812",
    hours: "Open 24 Hours",
    specialties: ["Pediatrics", "Child Surgery", "Neonatology", "Child Psychology"],
    facilities: ["NICU", "Pediatric ICU", "Child-friendly Rooms", "Play Areas"],
    color: "bg-pink-500",
    aboutUs: "Holy Child Hospital specializes in pediatric care, providing comprehensive medical services for children from newborns to adolescents. Our child-friendly environment and specialized staff ensure the best care for our young patients.",
    highlights: ["Pediatric specialization", "Child-friendly facilities", "Specialized child care", "Family-centered approach"]
  },
  {
    id: 7,
    name: "Metro Digos Hospital",
    image: "/no-image-available.jpg",
    rating: 4.6,
    reviews: 142,
    type: "Metropolitan Hospital",
    address: "123 Urban Health Road, Digos City",
    contact: "(082) 553-8934",
    hours: "24/7 Emergency Services",
    specialties: ["Emergency Medicine", "Internal Medicine", "Surgery", "Diagnostics"],
    facilities: ["Modern ER", "Diagnostic Center", "Surgery Suite", "Recovery Rooms"],
    color: "bg-teal-500",
    aboutUs: "Metro Digos Hospital serves the urban population with modern medical facilities and comprehensive healthcare services. We focus on providing quick, efficient, and quality medical care to meet the demands of city life.",
    highlights: ["Urban healthcare center", "Quick emergency response", "Modern facilities", "Efficient medical services"]
  },
  {
    id: 8,
    name: "Wellness General Hospital",
    image: "/no-image-available.jpg",
    rating: 4.8,
    reviews: 178,
    type: "General Hospital",
    address: "456 Wellness Circle, Digos City",
    contact: "(082) 553-9045",
    hours: "Open 24 Hours",
    specialties: ["Family Medicine", "Orthopedics", "ENT", "Dermatology"],
    facilities: ["Wellness Center", "Rehabilitation", "Laboratory", "Pharmacy"],
    color: "bg-orange-500",
    aboutUs: "Wellness General Hospital promotes a holistic approach to health and healing. We combine traditional medical services with wellness programs to help our patients achieve and maintain optimal health.",
    highlights: ["Wellness programs", "Holistic healthcare", "Rehabilitation services", "Preventive care focus"]
  },
  {
    id: 9,
    name: "Sacred Heart Hospital",
    image: "/no-image-available.jpg",
    rating: 4.7,
    reviews: 156,
    type: "Specialty Hospital",
    address: "789 Sacred Road, Digos City",
    contact: "(082) 553-1067",
    hours: "24/7 Services",
    specialties: ["Cardiology", "Pulmonology", "Neurology", "Gastroenterology"],
    facilities: ["Heart Center", "Pulmonary Unit", "Neuro Lab", "GI Center"],
    color: "bg-cyan-500",
    aboutUs: "Sacred Heart Hospital specializes in cardiovascular and pulmonary care, offering advanced diagnostic and treatment services. Our dedicated teams of specialists work together to provide comprehensive care for complex medical conditions.",
    highlights: ["Cardiac excellence", "Specialized care units", "Advanced diagnostics", "Expert medical team"]
  },
  {
    id: 10,
    name: "Hope Medical Center",
    image: "/no-image-available.jpg",
    rating: 4.9,
    reviews: 189,
    type: "Medical Center",
    address: "101 Hope Street, Digos City",
    contact: "(082) 553-2189",
    hours: "24/7 Emergency Services",
    specialties: ["Oncology", "Hematology", "Radiation Therapy", "Pain Management"],
    facilities: ["Cancer Center", "Blood Bank", "Radiation Unit", "Pain Clinic"],
    color: "bg-rose-500",
    aboutUs: "Hope Medical Center is dedicated to providing comprehensive cancer care and support services. Our integrated approach combines advanced treatment options with compassionate care to give hope and healing to cancer patients.",
    highlights: ["Cancer care specialty", "Support services", "Advanced treatments", "Comprehensive care"]
  }
];

// Export hospitals data
export { hospitals };

const Hospitals = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold">Hospitals in Digos City</h1>
          <p className="text-base text-muted-foreground">
            Find and connect with the best hospitals and healthcare facilities
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4" />
            <span>6+ Hospitals</span>
          </div>
          <div className="flex items-center gap-2">
            <Stethoscope className="h-4 w-4" />
            <span>200+ Doctors</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>1000+ Reviews</span>
          </div>
        </div>
      </div>

      {/* Advanced Filters */}
      <div className="grid gap-4 rounded-xl border bg-card p-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search hospitals by name, specialty, or location..."
                className="w-full rounded-lg border bg-background px-9 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
          <Button variant="outline" size="sm" className="ml-2">
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Filters
          </Button>
          <Button size="sm" className="ml-2">Search</Button>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm" className="rounded-full">
            All Hospitals
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            Emergency Care
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            ICU Facilities
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            24/7 Services
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            Specialized Units
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            More Filters +
          </Button>
        </div>
      </div>

      {/* Hospital Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {hospitals.map((hospital) => (
          <Card key={hospital.id} className="group overflow-hidden hover:shadow-lg transition-all">
            {/* Hospital Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-t from-${hospital.color}/80 to-transparent opacity-90`} />
              <NoImage />
              <div className="absolute bottom-2 left-2 flex items-center gap-1 text-white text-sm">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{hospital.rating}</span>
                <span className="text-xs">({hospital.reviews})</span>
              </div>
            </div>

            <CardHeader className="p-3">
              <div className="space-y-1">
                <CardTitle className="text-sm line-clamp-1 group-hover:text-primary">
                  {hospital.name}
                </CardTitle>
                <CardDescription className="text-xs">{hospital.type}</CardDescription>
              </div>
            </CardHeader>

            <CardContent className="p-3 pt-0 space-y-3">
              {/* Contact Info */}
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-3 w-3 flex-shrink-0" />
                  <span className="truncate">{hospital.address}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-3 w-3 flex-shrink-0" />
                  <span className="truncate">{hospital.hours}</span>
                </div>
              </div>

              {/* Specialties */}
              <div className="flex flex-wrap gap-1">
                {hospital.specialties.slice(0, 2).map((specialty, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary"
                  >
                    {specialty}
                  </span>
                ))}
                {hospital.specialties.length > 2 && (
                  <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium">
                    +{hospital.specialties.length - 2}
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <Button size="sm" className="w-full text-xs h-7 bg-blue-500 hover:bg-blue-700">
                  Book Now
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full text-xs h-7 hover:bg-primary/5 group"
                  onClick={() => navigate(`/hospitals/${hospital.id}`)}
                >
                  View More 
                  <ArrowUpRight className="h-3 w-3 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Hospitals;

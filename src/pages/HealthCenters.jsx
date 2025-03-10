import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MapPin, Phone, Clock, Star, ArrowUpRight, Users, Stethoscope, Building2, Filter, SlidersHorizontal, Search } from "lucide-react";
import NoImage from "@/components/NoImage";
import { useNavigate } from "react-router-dom";

const healthCenters = [
  {
    id: 1,
    name: "Digos City Health Center",
    image: "/no-image-available.jpg",
    rating: 4.7,
    reviews: 89,
    type: "Primary Healthcare Center",
    address: "123 Public Health Road, Digos City",
    contact: "(082) 553-1234",
    hours: "Mon-Fri: 8AM-5PM",
    services: ["General Checkup", "Vaccinations", "Maternal Care", "Child Health"],
    facilities: ["Laboratory", "Pharmacy", "Consultation Rooms", "Treatment Area"],
    color: "bg-emerald-500",
    aboutUs: "Digos City Health Center is the primary public healthcare facility serving the community since 1985. We are committed to providing accessible, quality healthcare services to all residents, with a focus on preventive care and public health programs.",
    highlights: ["Comprehensive public health programs", "Free basic healthcare services", "Community outreach initiatives", "Government healthcare partner"]
  },
  {
    id: 2,
    name: "Barangay San Jose Health Center",
    image: "/no-image-available.jpg",
    rating: 4.6,
    reviews: 76,
    type: "Community Health Center",
    address: "San Jose, Digos City",
    contact: "(082) 553-5678",
    hours: "Mon-Sat: 7AM-4PM",
    services: ["Primary Care", "Family Planning", "Immunization", "Health Education"],
    facilities: ["Medical Records", "Birthing Facility", "First Aid Station", "Pharmacy"],
    color: "bg-blue-500",
    aboutUs: "Serving the San Jose community, our health center focuses on providing essential healthcare services at the barangay level. We work closely with local health workers to ensure healthcare reaches every household in our community.",
    highlights: ["Local community focus", "Active health workers", "Family health programs", "Accessible location"]
  },
  {
    id: 3,
    name: "Digos Rural Health Unit",
    image: "/no-image-available.jpg",
    rating: 4.8,
    reviews: 112,
    type: "Rural Health Center",
    address: "456 Rural Health Drive, Digos City",
    contact: "(082) 553-9012",
    hours: "Mon-Fri: 8AM-4PM",
    services: ["Public Health Programs", "Dental Services", "Prenatal Care", "Child Vaccination"],
    facilities: ["Dental Clinic", "Medicine Storage", "Emergency Room", "Consultation Area"],
    color: "bg-indigo-500",
    aboutUs: "The Digos Rural Health Unit specializes in bringing quality healthcare to rural communities. Our facility serves as a vital link between remote areas and the city's healthcare system, ensuring rural residents have access to essential medical services.",
    highlights: ["Rural healthcare focus", "Mobile health services", "Community health education", "Emergency response capability"]
  },
  {
    id: 4,
    name: "Tres De Mayo Health Center",
    image: "/no-image-available.jpg",
    rating: 4.5,
    reviews: 67,
    type: "Community Health Center",
    address: "Tres De Mayo, Digos City",
    contact: "(082) 553-3456",
    hours: "Mon-Fri: 7AM-3PM",
    services: ["Basic Healthcare", "Nutrition Program", "Senior Care", "First Aid"],
    facilities: ["Treatment Room", "Records Section", "Medicine Dispensary", "Waiting Area"],
    color: "bg-purple-500",
    aboutUs: "Tres De Mayo Health Center is dedicated to serving the diverse healthcare needs of our local community. We emphasize preventive care and health education, working to build a healthier neighborhood through accessible medical services.",
    highlights: ["Community-based care", "Preventive health focus", "Senior wellness programs", "Health education initiatives"]
  },
  {
    id: 5,
    name: "Soong Integrated Health Center",
    image: "/no-image-available.jpg",
    rating: 4.7,
    reviews: 94,
    type: "Integrated Health Facility",
    address: "789 Soong District, Digos City",
    contact: "(082) 553-7890",
    hours: "Mon-Sat: 8AM-5PM",
    services: ["Primary Healthcare", "Mental Health", "Physical Therapy", "Health Screening"],
    facilities: ["Therapy Room", "Counseling Room", "Laboratory", "Pharmacy"],
    color: "bg-teal-500",
    aboutUs: "Soong Integrated Health Center takes a holistic approach to healthcare, combining physical and mental health services. Our integrated care model ensures comprehensive treatment addressing both body and mind wellness.",
    highlights: ["Holistic healthcare approach", "Mental health services", "Rehabilitation programs", "Integrated care model"]
  },
  {
    id: 6,
    name: "Dawis Public Health Center",
    image: "/no-image-available.jpg",
    rating: 4.6,
    reviews: 83,
    type: "Public Health Facility",
    address: "Dawis Area, Digos City",
    contact: "(082) 553-2345",
    hours: "Mon-Fri: 8AM-4PM",
    services: ["Basic Medical Care", "Women's Health", "Child Care", "Health Education"],
    facilities: ["Examination Rooms", "Storage Facility", "Records Area", "Meeting Room"],
    color: "bg-cyan-500",
    aboutUs: "Dawis Public Health Center specializes in women's and children's health services while providing essential public health care. We strive to create a supportive environment for families seeking medical attention and health guidance.",
    highlights: ["Women's health focus", "Child wellness programs", "Family planning services", "Health education workshops"]
  },
  {
    id: 7,
    name: "Cogon Community Health Center",
    image: "/no-image-available.jpg",
    rating: 4.5,
    reviews: 71,
    type: "Community Health Center",
    address: "Cogon District, Digos City",
    contact: "(082) 553-4567",
    hours: "Mon-Sat: 8AM-4PM",
    services: ["Primary Care", "Maternal Health", "Child Immunization", "Health Education"],
    facilities: ["Consultation Rooms", "Immunization Area", "Records Section", "Waiting Area"],
    color: "bg-pink-500",
    aboutUs: "Cogon Community Health Center is committed to providing essential healthcare services to our local community. We prioritize maternal and child health while offering comprehensive primary care services to all residents.",
    highlights: ["Strong community ties", "Maternal care expertise", "Child health programs", "Health awareness campaigns"]
  },
  {
    id: 8,
    name: "Aplaya Health Center",
    image: "/no-image-available.jpg",
    rating: 4.7,
    reviews: 88,
    type: "Primary Health Center",
    address: "Aplaya Area, Digos City",
    contact: "(082) 553-8901",
    hours: "Mon-Fri: 7AM-4PM",
    services: ["General Healthcare", "Family Planning", "Child Care", "First Aid"],
    facilities: ["Treatment Room", "Medicine Storage", "Consultation Area", "Records Room"],
    color: "bg-orange-500",
    aboutUs: "Aplaya Health Center serves the coastal community with dedicated healthcare services. Our facility is equipped to handle primary care needs while focusing on the unique health challenges of our seaside location.",
    highlights: ["Coastal community focus", "Environmental health programs", "Emergency response ready", "Family health services"]
  },
  {
    id: 9,
    name: "Sinawilan Health Unit",
    image: "/no-image-available.jpg",
    rating: 4.6,
    reviews: 79,
    type: "Rural Health Unit",
    address: "Sinawilan, Digos City",
    contact: "(082) 553-2345",
    hours: "Mon-Sat: 8AM-5PM",
    services: ["Basic Healthcare", "Maternal Care", "Child Health", "Health Education"],
    facilities: ["Consultation Room", "Treatment Area", "Records Section", "Waiting Room"],
    color: "bg-rose-500",
    aboutUs: "Sinawilan Health Unit provides essential healthcare services to our rural community. We focus on making quality healthcare accessible to all residents while promoting preventive care and healthy living practices.",
    highlights: ["Rural healthcare access", "Preventive care programs", "Community outreach", "Health education focus"]
  },
  {
    id: 10,
    name: "Matti District Health Center",
    image: "/no-image-available.jpg",
    rating: 4.8,
    reviews: 95,
    type: "District Health Center",
    address: "Matti District, Digos City",
    contact: "(082) 553-6789",
    hours: "Mon-Fri: 8AM-5PM",
    services: ["Primary Care", "Emergency Care", "Maternal Health", "Child Services"],
    facilities: ["Emergency Room", "Birthing Facility", "Laboratory", "Pharmacy"],
    color: "bg-green-500",
    aboutUs: "Matti District Health Center is a comprehensive healthcare facility serving one of Digos City's largest districts. We provide a wide range of medical services including emergency care and specialized maternal and child health programs.",
    highlights: ["District-wide coverage", "Emergency services", "Maternal and child care", "Laboratory services"]
  }
];

// Export healthCenters data
export { healthCenters };

const HealthCenters = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold">Health Centers in Digos City</h1>
          <p className="text-base text-muted-foreground">
            Access quality primary healthcare services at your local community
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4" />
            <span>25+ Centers</span>
          </div>
          <div className="flex items-center gap-2">
            <Stethoscope className="h-4 w-4" />
            <span>100+ Staff</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>500+ Monthly</span>
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
                placeholder="Search health centers by name, service, or location..."
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
            All Centers
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            Vaccinations
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            Primary Care
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            Maternal Care
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            Child Health
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            More Filters +
          </Button>
        </div>
      </div>

      {/* Health Center Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {healthCenters.map((center) => (
          <Card key={center.id} className="group overflow-hidden hover:shadow-lg transition-all">
            {/* Center Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-t from-${center.color}/80 to-transparent opacity-90`} />
              <NoImage />
              <div className="absolute bottom-2 left-2 flex items-center gap-1 text-white text-sm">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{center.rating}</span>
                <span className="text-xs">({center.reviews})</span>
              </div>
            </div>

            <CardHeader className="p-3">
              <div className="space-y-1">
                <CardTitle className="text-sm line-clamp-1 group-hover:text-primary">
                  {center.name}
                </CardTitle>
                <CardDescription className="text-xs">{center.type}</CardDescription>
              </div>
            </CardHeader>

            <CardContent className="p-3 pt-0 space-y-3">
              {/* Contact Info */}
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-3 w-3 flex-shrink-0" />
                  <span className="truncate">{center.address}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-3 w-3 flex-shrink-0" />
                  <span className="truncate">{center.hours}</span>
                </div>
              </div>

              {/* Services */}
              <div className="flex flex-wrap gap-1">
                {center.services.slice(0, 2).map((service, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary"
                  >
                    {service}
                  </span>
                ))}
                {center.services.length > 2 && (
                  <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium">
                    +{center.services.length - 2}
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
                  onClick={() => navigate(`/health-center/${center.id}`)}
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

export default HealthCenters;

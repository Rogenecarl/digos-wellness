import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MapPin, Phone, Clock, Star, ArrowUpRight, Users, Stethoscope, Building2, Filter, SlidersHorizontal, Search } from "lucide-react";
import NoImage from "@/components/NoImage";

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
    color: "bg-blue-500"
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
    color: "bg-purple-500"
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
    color: "bg-green-500"
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
    color: "bg-red-500"
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
    color: "bg-indigo-500"
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
    color: "bg-pink-500"
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
    color: "bg-teal-500"
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
    color: "bg-orange-500"
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
    color: "bg-cyan-500"
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
    color: "bg-rose-500"
  }
];

const Hospitals = () => {
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
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
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

              {/* Action Button */}
              <Button size="sm" className="w-full text-xs h-7 bg-green-600 hover:bg-green-700">
                Book Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Hospitals;

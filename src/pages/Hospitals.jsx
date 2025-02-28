import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MapPin, Phone, Clock, Star, ArrowUpRight, Users, Stethoscope, Building2 } from "lucide-react";

const hospitals = [
  {
    id: 1,
    name: "Digos City Medical Center",
    image: "/hospital1.jpg",
    rating: 4.8,
    reviews: 124,
    type: "General Hospital",
    address: "123 Healthcare Ave, Digos City",
    contact: "(082) 553-2847",
    hours: "24/7 Emergency Services",
    specialties: ["Emergency Care", "Surgery", "Pediatrics", "Cardiology"],
    facilities: ["ICU", "Operating Rooms", "Laboratory", "Pharmacy"]
  },
  {
    id: 2,
    name: "St. Elizabeth Hospital",
    image: "/hospital2.jpg",
    rating: 4.6,
    reviews: 98,
    type: "Private Hospital",
    address: "456 Medical Drive, Digos City",
    contact: "(082) 553-3961",
    hours: "Open 24 Hours",
    specialties: ["Internal Medicine", "Obstetrics", "Neurology", "Orthopedics"],
    facilities: ["MRI", "CT Scan", "Emergency Room", "Blood Bank"]
  },
  {
    id: 3,
    name: "Digos Doctors Hospital",
    image: "/hospital3.jpg",
    rating: 4.7,
    reviews: 156,
    type: "Specialty Hospital",
    address: "789 Wellness Road, Digos City",
    contact: "(082) 553-4175",
    hours: "24/7 Services",
    specialties: ["Oncology", "Cardiology", "Pulmonology", "Nephrology"],
    facilities: ["Cancer Center", "Cardiac Cath Lab", "Dialysis Unit", "ICU"]
  },
  {
    id: 4,
    name: "South General Hospital",
    image: "/hospital4.jpg",
    rating: 4.5,
    reviews: 87,
    type: "General Hospital",
    address: "321 Health Street, Digos City",
    contact: "(082) 553-5289",
    hours: "Open 24/7",
    specialties: ["General Medicine", "Surgery", "Pediatrics", "OB-GYN"],
    facilities: ["Emergency Room", "Operating Rooms", "Laboratory", "Pharmacy"]
  },
  {
    id: 5,
    name: "Mindanao Medical Center",
    image: "/hospital5.jpg",
    rating: 4.9,
    reviews: 203,
    type: "Tertiary Hospital",
    address: "567 Medical Park, Digos City",
    contact: "(082) 553-6493",
    hours: "24/7 Emergency Services",
    specialties: ["Trauma Care", "Neurosurgery", "Cardiology", "Oncology"],
    facilities: ["Trauma Center", "Brain & Spine Center", "Heart Center", "Cancer Center"]
  },
  {
    id: 6,
    name: "Holy Child Hospital",
    image: "/hospital6.jpg",
    rating: 4.7,
    reviews: 167,
    type: "Children's Hospital",
    address: "890 Pediatric Lane, Digos City",
    contact: "(082) 553-7812",
    hours: "Open 24 Hours",
    specialties: ["Pediatrics", "Child Surgery", "Neonatology", "Child Psychology"],
    facilities: ["NICU", "Pediatric ICU", "Child-friendly Rooms", "Play Areas"]
  }
];

const Hospitals = () => {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Hospitals in Digos City</h1>
        <p className="text-lg text-muted-foreground">
          Find and connect with the best hospitals and healthcare facilities in Digos City
        </p>
        <div className="flex items-center gap-8 text-sm text-muted-foreground">
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
            <span>1000+ Patient Reviews</span>
          </div>
        </div>
      </div>

      {/* Filters and Search (can be implemented later) */}
      <div className="flex items-center gap-4 rounded-lg border bg-card p-4">
        <input
          type="search"
          placeholder="Search hospitals by name, specialty, or location..."
          className="flex-1 rounded-md border px-3 py-2 text-sm"
        />
        <Button>Search</Button>
      </div>

      {/* Hospital Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {hospitals.map((hospital) => (
          <Card key={hospital.id} className="group overflow-hidden">
            {/* Hospital Image */}
            <div className="relative aspect-video overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <img
                src={hospital.image}
                alt={hospital.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{hospital.rating}</span>
                <span className="text-sm opacity-80">({hospital.reviews} reviews)</span>
              </div>
            </div>

            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="group-hover:text-primary">{hospital.name}</CardTitle>
                  <CardDescription className="mt-1">{hospital.type}</CardDescription>
                </div>
                <Button size="icon" variant="ghost" className="rounded-full">
                  <ArrowUpRight className="h-5 w-5" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Contact Info */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{hospital.address}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>{hospital.contact}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{hospital.hours}</span>
                </div>
              </div>

              {/* Specialties */}
              <div>
                <h4 className="mb-2 text-sm font-medium">Specialties</h4>
                <div className="flex flex-wrap gap-2">
                  {hospital.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Facilities */}
              <div>
                <h4 className="mb-2 text-sm font-medium">Facilities</h4>
                <div className="flex flex-wrap gap-2">
                  {hospital.facilities.map((facility, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700"
                    >
                      {facility}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-4">
                <Button className="flex-1 bg-green-600 hover:bg-green-700">Book Appointment</Button>
                <Button variant="outline" className="flex-1">View Details</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Hospitals;

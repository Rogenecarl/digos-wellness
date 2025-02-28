import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MapPin, Phone, Clock, Star, ArrowUpRight, Users, Stethoscope, Building2, Syringe } from "lucide-react";

const healthCenters = [
  {
    id: 1,
    name: "Digos City Health Center",
    image: "/health-center1.jpg",
    rating: 4.7,
    reviews: 89,
    type: "Primary Healthcare Center",
    address: "123 Public Health Road, Digos City",
    contact: "(082) 553-1234",
    hours: "Mon-Fri: 8AM-5PM",
    services: ["General Checkup", "Vaccinations", "Maternal Care", "Child Health"],
    facilities: ["Laboratory", "Pharmacy", "Consultation Rooms", "Treatment Area"]
  },
  {
    id: 2,
    name: "Barangay San Jose Health Center",
    image: "/health-center2.jpg",
    rating: 4.6,
    reviews: 76,
    type: "Community Health Center",
    address: "San Jose, Digos City",
    contact: "(082) 553-5678",
    hours: "Mon-Sat: 7AM-4PM",
    services: ["Primary Care", "Family Planning", "Immunization", "Health Education"],
    facilities: ["Medical Records", "Birthing Facility", "First Aid Station", "Pharmacy"]
  },
  {
    id: 3,
    name: "Digos Rural Health Unit",
    image: "/health-center3.jpg",
    rating: 4.8,
    reviews: 112,
    type: "Rural Health Center",
    address: "456 Rural Health Drive, Digos City",
    contact: "(082) 553-9012",
    hours: "Mon-Fri: 8AM-4PM",
    services: ["Public Health Programs", "Dental Services", "Prenatal Care", "Child Vaccination"],
    facilities: ["Dental Clinic", "Medicine Storage", "Emergency Room", "Consultation Area"]
  },
  {
    id: 4,
    name: "Tres De Mayo Health Center",
    image: "/health-center4.jpg",
    rating: 4.5,
    reviews: 67,
    type: "Community Health Center",
    address: "Tres De Mayo, Digos City",
    contact: "(082) 553-3456",
    hours: "Mon-Fri: 7AM-3PM",
    services: ["Basic Healthcare", "Nutrition Program", "Senior Care", "First Aid"],
    facilities: ["Treatment Room", "Records Section", "Medicine Dispensary", "Waiting Area"]
  },
  {
    id: 5,
    name: "Soong Integrated Health Center",
    image: "/health-center5.jpg",
    rating: 4.7,
    reviews: 94,
    type: "Integrated Health Facility",
    address: "789 Soong District, Digos City",
    contact: "(082) 553-7890",
    hours: "Mon-Sat: 8AM-5PM",
    services: ["Primary Healthcare", "Mental Health", "Physical Therapy", "Health Screening"],
    facilities: ["Therapy Room", "Counseling Room", "Laboratory", "Pharmacy"]
  },
  {
    id: 6,
    name: "Dawis Public Health Center",
    image: "/health-center6.jpg",
    rating: 4.6,
    reviews: 83,
    type: "Public Health Facility",
    address: "Dawis Area, Digos City",
    contact: "(082) 553-2345",
    hours: "Mon-Fri: 8AM-4PM",
    services: ["Basic Medical Care", "Women's Health", "Child Care", "Health Education"],
    facilities: ["Examination Rooms", "Storage Facility", "Records Area", "Meeting Room"]
  }
];

const HealthCenters = () => {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Health Centers in Digos City</h1>
        <p className="text-lg text-muted-foreground">
          Access quality primary healthcare services at your local community health centers
        </p>
        <div className="flex items-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4" />
            <span>25+ Health Centers</span>
          </div>
          <div className="flex items-center gap-2">
            <Stethoscope className="h-4 w-4" />
            <span>100+ Healthcare Workers</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>500+ Monthly Patients</span>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-wrap items-center gap-4 rounded-lg border bg-card p-4">
        <div className="flex-1">
          <input
            type="search"
            placeholder="Search health centers by name, service, or location..."
            className="w-full rounded-md border px-3 py-2 text-sm"
          />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm" className="whitespace-nowrap">
            <Syringe className="mr-2 h-4 w-4" />
            Vaccination Centers
          </Button>
          <Button variant="outline" size="sm" className="whitespace-nowrap">
            <Clock className="mr-2 h-4 w-4" />
            Open Now
          </Button>
          <Button>Search</Button>
        </div>
      </div>

      {/* Health Center Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {healthCenters.map((center) => (
          <Card key={center.id} className="group overflow-hidden">
            {/* Health Center Image */}
            <div className="relative aspect-video overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <img
                src={center.image}
                alt={center.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{center.rating}</span>
                <span className="text-sm opacity-80">({center.reviews} reviews)</span>
              </div>
            </div>

            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="group-hover:text-primary">{center.name}</CardTitle>
                  <CardDescription className="mt-1">{center.type}</CardDescription>
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
                  <span>{center.address}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>{center.contact}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{center.hours}</span>
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="mb-2 text-sm font-medium">Available Services</h4>
                <div className="flex flex-wrap gap-2">
                  {center.services.map((service, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Facilities */}
              <div>
                <h4 className="mb-2 text-sm font-medium">Facilities</h4>
                <div className="flex flex-wrap gap-2">
                  {center.facilities.map((facility, index) => (
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
                <Button variant="outline" className="flex-1">More Info</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HealthCenters;

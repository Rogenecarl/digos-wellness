import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MapPin, Phone, Clock, Star, ArrowUpRight, Users, Stethoscope, Building2, Calendar } from "lucide-react";

const dentalClinics = [
  {
    id: 1,
    name: "Digos Dental Care Center",
    image: "/dental1.jpg",
    rating: 4.8,
    reviews: 156,
    type: "General Dentistry",
    address: "123 Dental Plaza, Digos City",
    contact: "(082) 553-8901",
    hours: "Mon-Sat: 9AM-6PM",
    services: ["General Dentistry", "Orthodontics", "Teeth Whitening", "Dental Implants"],
    facilities: ["Modern Equipment", "Sterilization Room", "X-Ray Facility", "Consultation Room"]
  },
  {
    id: 2,
    name: "Smile Perfect Dental Clinic",
    image: "/dental2.jpg",
    rating: 4.7,
    reviews: 132,
    type: "Cosmetic Dentistry",
    address: "456 Wellness Street, Digos City",
    contact: "(082) 553-7812",
    hours: "Mon-Fri: 8AM-5PM",
    services: ["Cosmetic Dentistry", "Veneers", "Teeth Cleaning", "Root Canal"],
    facilities: ["Digital X-Ray", "Treatment Rooms", "Recovery Area", "Kids Zone"]
  },
  {
    id: 3,
    name: "Family Dental Center",
    image: "/dental3.jpg",
    rating: 4.9,
    reviews: 178,
    type: "Family Dentistry",
    address: "789 Health Avenue, Digos City",
    contact: "(082) 553-6723",
    hours: "Mon-Sat: 8:30AM-5:30PM",
    services: ["Family Dentistry", "Pediatric Care", "Dental Surgery", "Emergency Care"],
    facilities: ["Family Waiting Area", "Child-Friendly Rooms", "Surgery Suite", "Emergency Room"]
  },
  {
    id: 4,
    name: "Advanced Orthodontic Clinic",
    image: "/dental4.jpg",
    rating: 4.6,
    reviews: 145,
    type: "Orthodontic Specialist",
    address: "321 Braces Road, Digos City",
    contact: "(082) 553-5634",
    hours: "Mon-Fri: 9AM-6PM",
    services: ["Braces", "Invisalign", "Retainers", "Jaw Alignment"],
    facilities: ["3D Scanning", "Orthodontic Lab", "Consultation Rooms", "Digital Imaging"]
  },
  {
    id: 5,
    name: "Gentle Dental Care",
    image: "/dental5.jpg",
    rating: 4.7,
    reviews: 167,
    type: "General & Cosmetic",
    address: "567 Smile Street, Digos City",
    contact: "(082) 553-4545",
    hours: "Mon-Sat: 8AM-7PM",
    services: ["Gentle Dentistry", "Cosmetic Work", "Dental Crowns", "Bridges"],
    facilities: ["Comfort Rooms", "Modern Equipment", "Sterilization Area", "Recovery Zone"]
  },
  {
    id: 6,
    name: "Premier Dental Specialists",
    image: "/dental6.jpg",
    rating: 4.8,
    reviews: 189,
    type: "Multi-Specialty Clinic",
    address: "890 Premier Plaza, Digos City",
    contact: "(082) 553-3456",
    hours: "Mon-Sat: 9AM-8PM",
    services: ["Specialized Care", "Oral Surgery", "Periodontics", "Endodontics"],
    facilities: ["Surgical Suite", "Specialist Rooms", "Advanced Imaging", "Patient Lounge"]
  }
];

const DentalClinics = () => {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Dental Clinics in Digos City</h1>
        <p className="text-lg text-muted-foreground">
          Find expert dental care and specialized treatments at our partner dental clinics
        </p>
        <div className="flex items-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4" />
            <span>20+ Dental Clinics</span>
          </div>
          <div className="flex items-center gap-2">
            <Stethoscope className="h-4 w-4" />
            <span>50+ Dental Specialists</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>1000+ Happy Patients</span>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-wrap items-center gap-4 rounded-lg border bg-card p-4">
        <div className="flex-1">
          <input
            type="search"
            placeholder="Search dental clinics by name, service, or location..."
            className="w-full rounded-md border px-3 py-2 text-sm"
          />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm" className="whitespace-nowrap">
            <Calendar className="mr-2 h-4 w-4" />
            Available Today
          </Button>
          <Button variant="outline" size="sm" className="whitespace-nowrap">
            <Clock className="mr-2 h-4 w-4" />
            Open Now
          </Button>
          <Button>Search</Button>
        </div>
      </div>

      {/* Dental Clinic Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {dentalClinics.map((clinic) => (
          <Card key={clinic.id} className="group overflow-hidden">
            {/* Clinic Image */}
            <div className="relative aspect-video overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <img
                src={clinic.image}
                alt={clinic.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{clinic.rating}</span>
                <span className="text-sm opacity-80">({clinic.reviews} reviews)</span>
              </div>
            </div>

            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="group-hover:text-primary">{clinic.name}</CardTitle>
                  <CardDescription className="mt-1">{clinic.type}</CardDescription>
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
                  <span>{clinic.address}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>{clinic.contact}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{clinic.hours}</span>
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="mb-2 text-sm font-medium">Available Services</h4>
                <div className="flex flex-wrap gap-2">
                  {clinic.services.map((service, index) => (
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
                  {clinic.facilities.map((facility, index) => (
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

export default DentalClinics;

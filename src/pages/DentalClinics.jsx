import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MapPin, Phone, Clock, Star, ArrowUpRight, Users, Stethoscope, Building2, Filter, SlidersHorizontal, Search } from "lucide-react";
import NoImage from "@/components/NoImage";
import { useNavigate } from "react-router-dom";

const dentalClinics = [
  {
    id: 1,
    name: "Digos Dental Care Center",
    image: "/no-image-available.jpg",
    rating: 4.8,
    reviews: 156,
    type: "General Dentistry",
    address: "123 Dental Plaza, Digos City",
    contact: "(082) 553-8901",
    hours: "Mon-Sat: 9AM-6PM",
    services: ["General Dentistry", "Orthodontics", "Teeth Whitening", "Dental Implants"],
    facilities: ["Modern Equipment", "Sterilization Room", "X-Ray Facility", "Consultation Room"],
    color: "bg-sky-500",
    aboutUs: "Established in 2010, Digos Dental Care Center has been at the forefront of providing comprehensive dental care to the community. Our state-of-the-art facility combines modern technology with compassionate care to ensure the best possible dental experience for our patients.",
    highlights: ["Over 10 years of service excellence", "Highly qualified dental professionals", "Advanced dental technology", "Comfortable and modern facility"]
  },
  {
    id: 2,
    name: "Smile Perfect Dental Clinic",
    image: "/no-image-available.jpg",
    rating: 4.7,
    reviews: 132,
    type: "Cosmetic Dentistry",
    address: "456 Wellness Street, Digos City",
    contact: "(082) 553-7812",
    hours: "Mon-Fri: 8AM-5PM",
    services: ["Cosmetic Dentistry", "Veneers", "Teeth Cleaning", "Root Canal"],
    facilities: ["Digital X-Ray", "Treatment Rooms", "Recovery Area", "Kids Zone"],
    color: "bg-purple-500",
    aboutUs: "Smile Perfect Dental Clinic specializes in transforming smiles through advanced cosmetic dentistry procedures. Since 2015, we have been dedicated to helping our patients achieve the perfect smile they deserve, using the latest techniques and materials in cosmetic dentistry.",
    highlights: ["Specialized in cosmetic procedures", "Custom smile makeover plans", "Digital smile design technology", "Experienced cosmetic dentists"]
  },
  {
    id: 3,
    name: "Family Dental Center",
    image: "/no-image-available.jpg",
    rating: 4.9,
    reviews: 178,
    type: "Family Dentistry",
    address: "789 Health Avenue, Digos City",
    contact: "(082) 553-6723",
    hours: "Mon-Sat: 8:30AM-5:30PM",
    services: ["Family Dentistry", "Pediatric Care", "Dental Surgery", "Emergency Care"],
    facilities: ["Family Waiting Area", "Child-Friendly Rooms", "Surgery Suite", "Emergency Room"],
    color: "bg-indigo-500",
    aboutUs: "Family Dental Center is committed to providing comprehensive dental care for the entire family. Our warm and welcoming environment makes dental visits a pleasant experience for patients of all ages. We focus on preventive care and education to maintain optimal oral health.",
    highlights: ["Family-friendly environment", "Child-specific dental care", "Emergency dental services", "Preventive care focus"]
  },
  {
    id: 4,
    name: "Advanced Orthodontic Clinic",
    image: "/no-image-available.jpg",
    rating: 4.6,
    reviews: 145,
    type: "Orthodontic Specialist",
    address: "321 Braces Road, Digos City",
    contact: "(082) 553-5634",
    hours: "Mon-Fri: 9AM-6PM",
    services: ["Braces", "Invisalign", "Retainers", "Jaw Alignment"],
    facilities: ["3D Scanning", "Orthodontic Lab", "Consultation Rooms", "Digital Imaging"],
    color: "bg-blue-500",
    aboutUs: "Advanced Orthodontic Clinic is the leading orthodontic practice in Digos City, specializing in both traditional and modern orthodontic treatments. Our team of specialists is dedicated to creating beautiful, aligned smiles using cutting-edge orthodontic technology.",
    highlights: ["Advanced 3D treatment planning", "Invisalign certified provider", "Custom orthodontic solutions", "Digital treatment monitoring"]
  },
  {
    id: 5,
    name: "Gentle Dental Care",
    image: "/no-image-available.jpg",
    rating: 4.7,
    reviews: 167,
    type: "General & Cosmetic",
    address: "567 Smile Street, Digos City",
    contact: "(082) 553-4545",
    hours: "Mon-Sat: 8AM-7PM",
    services: ["Gentle Dentistry", "Cosmetic Work", "Dental Crowns", "Bridges"],
    facilities: ["Comfort Rooms", "Modern Equipment", "Sterilization Area", "Recovery Zone"],
    color: "bg-emerald-500",
    aboutUs: "At Gentle Dental Care, we understand that dental visits can be anxiety-inducing for many patients. That's why we've created a comfortable, stress-free environment where patients can receive quality dental care with minimal discomfort. Our gentle approach ensures a positive dental experience.",
    highlights: ["Anxiety-free dentistry", "Comfort-focused care", "Modern pain management", "Relaxing environment"]
  },
  {
    id: 6,
    name: "Premier Dental Specialists",
    image: "/no-image-available.jpg",
    rating: 4.8,
    reviews: 189,
    type: "Multi-Specialty Clinic",
    address: "890 Premier Plaza, Digos City",
    contact: "(082) 553-3456",
    hours: "Mon-Sat: 9AM-8PM",
    services: ["Specialized Care", "Oral Surgery", "Periodontics", "Endodontics"],
    facilities: ["Surgical Suite", "Specialist Rooms", "Advanced Imaging", "Patient Lounge"],
    color: "bg-teal-500",
    aboutUs: "Premier Dental Specialists brings together a team of highly qualified dental specialists under one roof. Our multi-specialty approach ensures comprehensive dental care for complex cases, with each specialist contributing their expertise to provide optimal treatment outcomes.",
    highlights: ["Multi-specialty expertise", "Collaborative treatment planning", "Complex case management", "Advanced surgical facilities"]
  },
  {
    id: 7,
    name: "Kids Smile Dental Clinic",
    image: "/no-image-available.jpg",
    rating: 4.9,
    reviews: 142,
    type: "Pediatric Dentistry",
    address: "123 Children's Way, Digos City",
    contact: "(082) 553-8765",
    hours: "Mon-Sat: 8AM-6PM",
    services: ["Pediatric Dentistry", "Child Orthodontics", "Preventive Care", "Emergency Care"],
    facilities: ["Kid-Friendly Rooms", "Play Area", "Digital X-Ray", "Treatment Rooms"],
    color: "bg-pink-500",
    aboutUs: "Kids Smile Dental Clinic is specially designed to make dental visits fun and exciting for children. Our pediatric specialists understand the unique dental needs of young patients and create positive experiences that build lifelong good oral health habits.",
    highlights: ["Child-focused environment", "Specialized pediatric care", "Fun dental education", "Gentle treatment approach"]
  },
  {
    id: 8,
    name: "Modern Dental Solutions",
    image: "/no-image-available.jpg",
    rating: 4.7,
    reviews: 156,
    type: "Advanced Dentistry",
    address: "456 Tech Drive, Digos City",
    contact: "(082) 553-9876",
    hours: "Mon-Fri: 9AM-7PM",
    services: ["Digital Dentistry", "3D Imaging", "Laser Treatment", "Dental Implants"],
    facilities: ["Advanced Tech Lab", "Digital Scanning", "Treatment Suites", "Recovery Area"],
    color: "bg-cyan-500",
    aboutUs: "Modern Dental Solutions is at the cutting edge of digital dentistry, offering innovative treatments using the latest dental technology. Our digital workflow ensures precise, efficient, and comfortable dental procedures while minimizing treatment time.",
    highlights: ["Digital dentistry pioneers", "Latest dental technology", "Precise treatment planning", "Efficient procedures"]
  },
  {
    id: 9,
    name: "Comfort Dental Clinic",
    image: "/no-image-available.jpg",
    rating: 4.6,
    reviews: 134,
    type: "General Dentistry",
    address: "789 Comfort Lane, Digos City",
    contact: "(082) 553-2345",
    hours: "Mon-Sat: 8:30AM-5:30PM",
    services: ["Pain-Free Dentistry", "General Care", "Teeth Cleaning", "Fillings"],
    facilities: ["Comfort Suites", "Relaxation Area", "Modern Equipment", "Sterilization Room"],
    color: "bg-rose-500",
    aboutUs: "Comfort Dental Clinic prioritizes patient comfort in every aspect of dental care. We combine modern dental techniques with a soothing environment to provide stress-free dental treatments. Our team is trained to ensure each visit is as comfortable as possible.",
    highlights: ["Comfort-first approach", "Relaxing atmosphere", "Painless procedures", "Patient-focused care"]
  },
  {
    id: 10,
    name: "Elite Dental Center",
    image: "/no-image-available.jpg",
    rating: 4.8,
    reviews: 167,
    type: "Premium Dental Care",
    address: "101 Elite Street, Digos City",
    contact: "(082) 553-1234",
    hours: "Mon-Sat: 9AM-6PM",
    services: ["Premium Care", "Cosmetic Work", "Implants", "Full Mouth Rehab"],
    facilities: ["VIP Suites", "Premium Equipment", "Sterilization Center", "Recovery Lounge"],
    color: "bg-orange-500",
    aboutUs: "Elite Dental Center offers premium dental care in a luxurious setting. We cater to patients who expect the highest standards in dental treatment and comfort. Our VIP services ensure a personalized and exclusive dental care experience.",
    highlights: ["Premium dental services", "VIP treatment rooms", "Personalized care plans", "Luxury amenities"]
  }
];

// Export dentalClinics data
export { dentalClinics };

const DentalClinics = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold">Dental Clinics in Digos City</h1>
          <p className="text-base text-muted-foreground">
            Find expert dental care and specialized treatments at our partner clinics
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4" />
            <span>20+ Clinics</span>
          </div>
          <div className="flex items-center gap-2">
            <Stethoscope className="h-4 w-4" />
            <span>50+ Dentists</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>1000+ Patients</span>
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
                placeholder="Search dental clinics by name, service, or location..."
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
            All Clinics
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            General Dentistry
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            Orthodontics
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            Cosmetic
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            Pediatric
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            More Filters +
          </Button>
        </div>
      </div>

      {/* Dental Clinic Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {dentalClinics.map((clinic) => (
          <Card key={clinic.id} className="group overflow-hidden hover:shadow-lg transition-all">
            {/* Clinic Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-t from-${clinic.color}/80 to-transparent opacity-90`} />
              <NoImage />
              <div className="absolute bottom-2 left-2 flex items-center gap-1 text-white text-sm">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{clinic.rating}</span>
                <span className="text-xs">({clinic.reviews})</span>
              </div>
            </div>

            <CardHeader className="p-3">
              <div className="space-y-1">
                <CardTitle className="text-sm line-clamp-1 group-hover:text-primary">
                  {clinic.name}
                </CardTitle>
                <CardDescription className="text-xs">{clinic.type}</CardDescription>
              </div>
            </CardHeader>

            <CardContent className="p-3 pt-0 space-y-3">
              {/* Contact Info */}
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-3 w-3 flex-shrink-0" />
                  <span className="truncate">{clinic.address}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-3 w-3 flex-shrink-0" />
                  <span className="truncate">{clinic.hours}</span>
                </div>
              </div>

              {/* Services */}
              <div className="flex flex-wrap gap-1">
                {clinic.services.slice(0, 2).map((service, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary"
                  >
                    {service}
                  </span>
                ))}
                {clinic.services.length > 2 && (
                  <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium">
                    +{clinic.services.length - 2}
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <Button size="sm" className="w-full text-xs h-7 bg-green-600 hover:bg-green-700">
                  Book Now
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full text-xs h-7 hover:bg-primary/5 group"
                  onClick={() => navigate(`/dental/${clinic.id}`)}
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

export default DentalClinics;

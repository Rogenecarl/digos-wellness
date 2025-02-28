import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Search, MapPin, Phone, Clock, ArrowRight, Star, Calendar, ChevronRight, Building2, Stethoscope, Heart, Baby, Syringe, Dog, UserCircle } from "lucide-react";

const featuredServices = [
  {
    title: "Hospitals",
    description: "Access 24/7 emergency care, specialized treatments, and advanced medical facilities.",
    icon: "🏥",
    stats: "15+ Hospitals",
    features: ["Emergency Care", "ICU Facilities", "Specialized Units"]
  },
  {
    title: "Health Centers",
    description: "Your first stop for primary healthcare, vaccinations, and preventive medicine.",
    icon: "⚕️",
    stats: "25+ Centers",
    features: ["Primary Care", "Vaccinations", "Health Screening"]
  },
  {
    title: "Dental Clinics",
    description: "Complete dental care from routine checkups to advanced procedures.",
    icon: "🦷",
    stats: "20+ Clinics",
    features: ["General Dentistry", "Orthodontics", "Dental Surgery"]
  }
];

const testimonials = [
  {
    name: "Dr. Santos",
    role: "Chief Medical Officer",
    text: "The healthcare network in Digos City has grown significantly, providing better access to quality medical services.",
    rating: 5
  },
  {
    name: "Maria Garcia",
    role: "Patient",
    text: "Finding healthcare services has never been easier. This platform helped me locate the right specialist quickly.",
    rating: 5
  }
];

const specializedServices = [
  {
    title: "Government Services",
    description: "Access public healthcare programs, PhilHealth services, and medical assistance.",
    icon: <Building2 className="h-8 w-8" />,
    bgColor: "bg-blue-50",
    accentColor: "bg-blue-500",
    hoverColor: "text-blue-600",
    features: ["PhilHealth Services", "Medical Assistance", "Health Programs"]
  },
  {
    title: "Veterinary Care",
    description: "Professional care for your pets with modern veterinary facilities and experienced doctors.",
    icon: <Dog className="h-8 w-8" />,
    bgColor: "bg-green-50",
    accentColor: "bg-green-500",
    hoverColor: "text-green-600",
    features: ["Pet Checkups", "Animal Surgery", "Vaccination"]
  },
  {
    title: "Dermatology",
    description: "Expert skin care services and treatments from certified dermatologists.",
    icon: <UserCircle className="h-8 w-8" />,
    bgColor: "bg-purple-50",
    accentColor: "bg-purple-500",
    hoverColor: "text-purple-600",
    features: ["Skin Treatments", "Aesthetic Services", "Consultations"]
  },
  {
    title: "Cardiology",
    description: "Comprehensive heart care with advanced diagnostic and treatment facilities.",
    icon: <Heart className="h-8 w-8" />,
    bgColor: "bg-red-50",
    accentColor: "bg-red-500",
    hoverColor: "text-red-600",
    features: ["Heart Screening", "ECG Services", "Cardiac Care"]
  },
  {
    title: "Pediatrics",
    description: "Specialized healthcare for children from newborns to adolescents.",
    icon: <Baby className="h-8 w-8" />,
    bgColor: "bg-amber-50",
    accentColor: "bg-amber-500",
    hoverColor: "text-amber-600",
    features: ["Child Healthcare", "Vaccinations", "Growth Monitoring"]
  },
  {
    title: "Internal Medicine",
    description: "Comprehensive adult healthcare and management of complex medical conditions.",
    icon: <Stethoscope className="h-8 w-8" />,
    bgColor: "bg-indigo-50",
    accentColor: "bg-indigo-500",
    hoverColor: "text-indigo-600",
    features: ["Disease Management", "Health Screening", "Preventive Care"]
  }
];

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[600px] overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="absolute inset-0 bg-grid-black/5" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="flex flex-col justify-center">
              <h1 className="mb-6 text-5xl font-bold tracking-tight text-primary lg:text-6xl">
                Your Health, Our Priority
              </h1>
              <p className="mb-8 text-xl text-muted-foreground">
                Discover and connect with Digos City's premier healthcare providers.
                Quality medical care just a click away.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="lg" className="bg-primary px-8 hover:bg-primary/90">
                  Find Healthcare <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Phone className="h-4 w-4" /> Emergency: 911
                </Button>
              </div>
              <div className="mt-12 flex items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" /> 24/7 Support
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> City-wide Network
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl" />
              <img
                src="/hero-image.jpg"
                alt="Healthcare"
                className="relative rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="relative -mt-8 px-4">
        <div className="mx-auto max-w-3xl">
          <div className="relative rounded-2xl bg-white p-2 shadow-xl">
            <div className="flex gap-2">
              <div className="flex-1">
                <input
                  type="search"
                  placeholder="Search for medical services, hospitals, or doctors..."
                  className="w-full rounded-xl border-2 border-gray-100 bg-gray-50 px-6 py-4 text-lg outline-none transition-all focus:border-primary/20 focus:bg-white focus:shadow-sm"
                />
              </div>
              <Button size="lg" className="h-auto rounded-xl px-8">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold lg:text-4xl">Healthcare Services</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Access Digos City's comprehensive network of healthcare providers and medical facilities.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {featuredServices.map((service, index) => (
            <Card key={index} className="group relative overflow-hidden border-2">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5" />
              <CardHeader>
                <div className="mb-4 text-4xl">{service.icon}</div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="mt-2">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">{service.stats}</span>
                  <Button variant="ghost" className="group-hover:translate-x-1 transition-transform">
                    View All <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick Access */}
      <section className="bg-gradient-to-b from-secondary/20 to-transparent py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Quick Access</h2>
            <p className="text-muted-foreground">Essential healthcare services at your fingertips</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Button variant="outline" className="group h-auto p-6 hover:border-primary">
              <div className="flex flex-col items-center gap-3">
                <div className="rounded-full bg-red-100 p-3 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <Phone className="h-6 w-6" />
                </div>
                <span className="font-medium">Emergency</span>
                <span className="text-sm text-muted-foreground">24/7 Response</span>
              </div>
            </Button>
            <Button variant="outline" className="group h-auto p-6 hover:border-primary">
              <div className="flex flex-col items-center gap-3">
                <div className="rounded-full bg-blue-100 p-3 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Calendar className="h-6 w-6" />
                </div>
                <span className="font-medium">Appointments</span>
                <span className="text-sm text-muted-foreground">Book Online</span>
              </div>
            </Button>
            <Button variant="outline" className="group h-auto p-6 hover:border-primary">
              <div className="flex flex-col items-center gap-3">
                <div className="rounded-full bg-green-100 p-3 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <MapPin className="h-6 w-6" />
                </div>
                <span className="font-medium">Find Nearby</span>
                <span className="text-sm text-muted-foreground">Locate Services</span>
              </div>
            </Button>
            <Button variant="outline" className="group h-auto p-6 hover:border-primary">
              <div className="flex flex-col items-center gap-3">
                <div className="rounded-full bg-purple-100 p-3 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Star className="h-6 w-6" />
                </div>
                <span className="font-medium">Top Rated</span>
                <span className="text-sm text-muted-foreground">Best Services</span>
              </div>
            </Button>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="bg-gradient-to-b from-white via-gray-50 to-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl">Specialized Healthcare Services</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Discover our wide range of specialized medical services provided by expert healthcare professionals
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {specializedServices.map((service, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-0 bg-white transition-all duration-300 hover:shadow-lg"
              >
                <div className={`absolute inset-x-0 top-0 h-1 ${service.accentColor}`} />
                <CardHeader>
                  <div className={`mb-6 inline-flex rounded-lg ${service.bgColor} p-3`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <div className={`h-1.5 w-1.5 rounded-full ${service.accentColor}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="ghost" 
                    className={`w-full justify-between border-t pt-4 group-hover:${service.hoverColor}`}
                  >
                    Learn More 
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">What People Say</h2>
          <p className="text-muted-foreground">Trusted by healthcare professionals and patients</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-primary/5 border-0">
              <CardHeader>
                <div className="flex items-center gap-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="mt-4 text-lg font-medium text-foreground">
                  "{testimonial.text}"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10" />
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

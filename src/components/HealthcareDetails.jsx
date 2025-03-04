import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Star, Calendar, Users, Building2, ArrowLeft, Share2, Heart, MessageCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const HealthcareDetails = ({ data }) => {
  const navigate = useNavigate();

  if (!data) {
    return null;
  }

  return (
    <div className="space-y-8">
      {/* Navigation and Actions */}
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          className="gap-2"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </Button>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <Heart className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative rounded-2xl overflow-hidden">
        <div className="aspect-[21/9] relative">
          <div className={`absolute inset-0 ${data.color || 'bg-blue-500'} opacity-90`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          <img
            src={data.image || "/no-image-available.jpg"}
            alt={data.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold">{data.name}</h1>
                <p className="text-lg opacity-90">{data.type}</p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{data.rating}</span>
                    <span className="opacity-80">({data.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{data.address}</span>
                  </div>
                </div>
              </div>
              <Button className="bg-green-600 hover:bg-green-700">
                <Calendar className="mr-2 h-4 w-4" />
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Info */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border bg-card p-4 hover:bg-muted/50 transition-colors">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-primary/10 p-3">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium">Operating Hours</p>
              <p className="text-sm text-muted-foreground">{data.hours}</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border bg-card p-4 hover:bg-muted/50 transition-colors">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-primary/10 p-3">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium">Contact Number</p>
              <p className="text-sm text-muted-foreground">{data.contact}</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border bg-card p-4 hover:bg-muted/50 transition-colors">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-primary/10 p-3">
              <Building2 className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium">Facility Type</p>
              <p className="text-sm text-muted-foreground">{data.type}</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border bg-card p-4 hover:bg-muted/50 transition-colors">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-primary/10 p-3">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium">Patient Reviews</p>
              <p className="text-sm text-muted-foreground">{data.reviews}+ Reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Specialties/Services Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-xl border bg-card">
            <div className="border-b p-4">
              <h2 className="text-xl font-semibold">
                {data.specialties ? 'Specialties & Services' : 'Services Offered'}
              </h2>
            </div>
            <div className="grid gap-4 p-4 sm:grid-cols-2">
              {(data.specialties || data.services)?.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-lg border p-3 hover:bg-muted/50 transition-colors"
                >
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Facilities Section */}
          <div className="rounded-xl border bg-card">
            <div className="border-b p-4">
              <h2 className="text-xl font-semibold">Facilities & Amenities</h2>
            </div>
            <div className="grid gap-4 p-4 sm:grid-cols-2">
              {data.facilities?.map((facility, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-lg border p-3 hover:bg-muted/50 transition-colors"
                >
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-sm">{facility}</span>
                </div>
              ))}
            </div>
          </div>

          {/* About Us Section */}
          <div className="rounded-xl border bg-card">
            <div className="border-b p-4">
              <h2 className="text-xl font-semibold">About Us</h2>
            </div>
            <div className="p-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {data.aboutUs}
              </p>
              {data.highlights && (
                <div className="mt-4">
                  <h3 className="mb-2 font-medium">Key Highlights</h3>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {data.highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 rounded-lg border p-3 hover:bg-muted/50 transition-colors"
                      >
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Contact Card */}
          <div className="rounded-xl border bg-card">
            <div className="border-b p-4">
              <h2 className="text-xl font-semibold">Contact Information</h2>
            </div>
            <div className="p-4 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-sm text-muted-foreground">{data.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-sm text-muted-foreground">{data.contact}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Hours</p>
                  <p className="text-sm text-muted-foreground">{data.hours}</p>
                </div>
              </div>
              <Button className="w-full">
                <MessageCircle className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </div>
          </div>

          {/* Emergency Info */}
          <div className="rounded-xl border bg-red-50">
            <div className="p-4">
              <h3 className="text-lg font-semibold text-red-600">Emergency Services</h3>
              <p className="mt-2 text-sm text-red-600">
                24/7 Emergency care available. For immediate assistance, please call our emergency hotline.
              </p>
              <Button className="mt-4 w-full bg-red-600 hover:bg-red-700">
                <Phone className="mr-2 h-4 w-4" />
                Call Emergency
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthcareDetails; 
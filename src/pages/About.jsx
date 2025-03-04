import { Info, Building2, Users, HeartPulse, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const stats = [
    {
      icon: Building2,
      value: "50+",
      label: "Partner Facilities",
      description: "Healthcare centers, clinics & hospitals"
    },
    {
      icon: Users,
      value: "200+",
      label: "Healthcare Providers",
      description: "Doctors, specialists & medical staff"
    },
    {
      icon: HeartPulse,
      value: "10K+",
      label: "Patient Visits",
      description: "Successfully managed appointments"
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Support Available",
      description: "Round-the-clock medical assistance"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-5xl mx-auto space-y-8 py-6"
    >
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <Info className="h-12 w-12 text-primary mx-auto" />
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          About Digos Wellness
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-base">
          Your comprehensive healthcare companion in Digos City. We connect patients with quality healthcare 
          services, making medical care more accessible and efficient for everyone.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-8">
        {stats.map((stat, index) => (
          <Card key={index} className="border-slate-200 hover:bg-slate-50 transition-colors">
            <CardContent className="p-6 text-center space-y-2">
              <stat.icon className="h-8 w-8 text-primary mx-auto" />
              <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
              <div className="text-sm font-medium text-slate-700">{stat.label}</div>
              <p className="text-xs text-slate-500">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-slate-200 hover:bg-slate-50 transition-colors">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">Our Mission</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              To revolutionize healthcare access in Digos City by providing a seamless digital platform 
              that connects patients with quality healthcare services. We strive to make medical care 
              more accessible, efficient, and patient-centered.
            </p>
          </CardContent>
        </Card>
        <Card className="border-slate-200 hover:bg-slate-50 transition-colors">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">Our Vision</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              To be the leading healthcare platform in Digos City, creating a future where quality 
              healthcare is easily accessible to all residents through innovative digital solutions 
              and partnerships with trusted healthcare providers.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Core Values */}
      <Card className="border-slate-200 hover:bg-slate-50 transition-colors">
        <CardContent className="p-6 space-y-6">
          <h2 className="text-xl font-semibold text-slate-900 text-center">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-medium text-slate-800">Excellence</h3>
              <p className="text-sm text-slate-600">
                Committed to providing the highest quality healthcare services and patient experience
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-slate-800">Accessibility</h3>
              <p className="text-sm text-slate-600">
                Making quality healthcare available to all residents of Digos City
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-slate-800">Innovation</h3>
              <p className="text-sm text-slate-600">
                Leveraging technology to improve healthcare delivery and patient care
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-slate-800">Integrity</h3>
              <p className="text-sm text-slate-600">
                Maintaining the highest standards of professional ethics and transparency
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-slate-800">Compassion</h3>
              <p className="text-sm text-slate-600">
                Treating every patient with empathy, respect, and understanding
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-slate-800">Collaboration</h3>
              <p className="text-sm text-slate-600">
                Working together with healthcare providers to deliver the best patient care
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <div className="text-center space-y-4 py-8">
        <h2 className="text-2xl font-semibold text-slate-900">Join Us in Transforming Healthcare</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Whether you're a healthcare provider looking to partner with us or a patient seeking quality 
          medical care, we're here to support your healthcare journey.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Button className="bg-primary hover:bg-primary/90">
            Find Healthcare Services
          </Button>
          <Button variant="outline" className="border-slate-200 text-slate-600 hover:bg-slate-50">
            Partner With Us
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;

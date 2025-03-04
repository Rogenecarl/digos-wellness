import { MoreHorizontal, Pill, Heart, Brain, Eye, Bone, Thermometer } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const More = () => {
  const upcomingServices = [
    {
      icon: Pill,
      title: "Pharmacy",
      description: "24/7 pharmacies and medicine delivery services"
    },
    {
      icon: Heart,
      title: "Cardiology",
      description: "Heart specialists and cardiac care centers"
    },
    {
      icon: Brain,
      title: "Neurology",
      description: "Brain and nervous system specialists"
    },
    {
      icon: Eye,
      title: "Ophthalmology",
      description: "Eye care centers and vision specialists"
    },
    {
      icon: Bone,
      title: "Orthopedics",
      description: "Bone and joint care specialists"
    },
    {
      icon: Thermometer,
      title: "Pediatrics",
      description: "Child healthcare specialists"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-slate-50 p-12 rounded-2xl border border-slate-200">
          <MoreHorizontal className="h-12 w-12 text-primary mx-auto mb-6" />
          <h1 className="text-2xl font-semibold text-slate-900 mb-3">
            More Healthcare Services Coming Soon
          </h1>
          <p className="text-slate-600 mb-8">
            We're expanding our healthcare services to bring you more specialized medical care options. 
            Here's a preview of what's coming to Digos Wellness.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto mb-8">
            {upcomingServices.map((service, index) => (
              <Card key={index} className="border-slate-200">
                <CardContent className="p-4 space-y-2">
                  <service.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <h3 className="font-medium text-slate-800">{service.title}</h3>
                  <p className="text-sm text-slate-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-xl mx-auto">
            <Card className="border-slate-200">
              <CardContent className="p-6 text-center">
                <h3 className="font-medium text-slate-800 mb-2">Stay Tuned</h3>
                <p className="text-sm text-slate-600 mb-4">
                  We're continuously adding new healthcare services to better serve the 
                  Digos City community. Subscribe to get notified when new services launch.
                </p>
                <Button variant="outline" className="text-slate-600 border-slate-200">
                  Subscribe for Updates
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default More; 
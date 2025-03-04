import { PawPrint, Syringe, Microscope, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Veterinary = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center"
    >
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-slate-50 p-12 rounded-2xl border border-slate-200">
          <PawPrint className="h-12 w-12 text-primary mx-auto mb-6" />
          <h1 className="text-2xl font-semibold text-slate-900 mb-3">
            Veterinary Services Coming Soon
          </h1>
          <p className="text-slate-600 mb-8">
            We're working on bringing you a comprehensive directory of veterinary clinics and services 
            in Digos City. Your pets deserve the best care possible.
          </p>

          <div className="grid gap-4 md:grid-cols-3 max-w-3xl mx-auto mb-8">
            <Card className="border-slate-200">
              <CardContent className="p-4 space-y-2">
                <Stethoscope className="h-6 w-6 text-primary mx-auto mb-2" />
                <h3 className="font-medium text-slate-800">General Care</h3>
                <p className="text-sm text-slate-600">Routine check-ups and preventive care for pets</p>
              </CardContent>
            </Card>
            <Card className="border-slate-200">
              <CardContent className="p-4 space-y-2">
                <Syringe className="h-6 w-6 text-primary mx-auto mb-2" />
                <h3 className="font-medium text-slate-800">Vaccinations</h3>
                <p className="text-sm text-slate-600">Essential vaccines and immunizations</p>
              </CardContent>
            </Card>
            <Card className="border-slate-200">
              <CardContent className="p-4 space-y-2">
                <Microscope className="h-6 w-6 text-primary mx-auto mb-2" />
                <h3 className="font-medium text-slate-800">Diagnostics</h3>
                <p className="text-sm text-slate-600">Advanced pet health diagnostics and testing</p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-xl mx-auto">
            <Card className="border-slate-200">
              <CardContent className="p-6 text-center">
                <h3 className="font-medium text-slate-800 mb-2">Launch Update</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Our veterinary services directory will be available soon, featuring trusted clinics 
                  and pet care specialists in Digos City.
                </p>
                <Button variant="outline" className="text-slate-600 border-slate-200">
                  Get Updates
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Veterinary;


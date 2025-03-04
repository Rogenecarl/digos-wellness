import { Sparkles, Shield, Microscope, Clipboard } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Dermatologist = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center"
    >
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-slate-50 p-12 rounded-2xl border border-slate-200">
          <Sparkles className="h-12 w-12 text-primary mx-auto mb-6" />
          <h1 className="text-2xl font-semibold text-slate-900 mb-3">
            Dermatology Services Coming Soon
          </h1>
          <p className="text-slate-600 mb-8">
            We're preparing a comprehensive directory of dermatology clinics and specialists 
            in Digos City. Get ready for expert skincare services.
          </p>

          <div className="grid gap-4 md:grid-cols-3 max-w-3xl mx-auto mb-8">
            <Card className="border-slate-200">
              <CardContent className="p-4 space-y-2">
                <Shield className="h-6 w-6 text-primary mx-auto mb-2" />
                <h3 className="font-medium text-slate-800">Skin Care</h3>
                <p className="text-sm text-slate-600">Professional skin treatments and consultations</p>
              </CardContent>
            </Card>
            <Card className="border-slate-200">
              <CardContent className="p-4 space-y-2">
                <Microscope className="h-6 w-6 text-primary mx-auto mb-2" />
                <h3 className="font-medium text-slate-800">Diagnostics</h3>
                <p className="text-sm text-slate-600">Advanced skin analysis and testing</p>
              </CardContent>
            </Card>
            <Card className="border-slate-200">
              <CardContent className="p-4 space-y-2">
                <Clipboard className="h-6 w-6 text-primary mx-auto mb-2" />
                <h3 className="font-medium text-slate-800">Treatments</h3>
                <p className="text-sm text-slate-600">Customized skincare treatment plans</p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-xl mx-auto">
            <Card className="border-slate-200">
              <CardContent className="p-6 text-center">
                <h3 className="font-medium text-slate-800 mb-2">Coming Soon</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Our dermatology services directory will be launching soon with trusted specialists 
                  and advanced skincare treatments.
                </p>
                <Button variant="outline" className="text-slate-600 border-slate-200">
                  Stay Updated
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dermatologist;



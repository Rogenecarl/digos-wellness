import { Building2, FileText, Users2, ClipboardCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const GovtServices = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center"
    >
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-slate-50 p-12 rounded-2xl border border-slate-200">
          <Building2 className="h-12 w-12 text-primary mx-auto mb-6" />
          <h1 className="text-2xl font-semibold text-slate-900 mb-3">
            Government Healthcare Services
          </h1>
          <p className="text-slate-600 mb-6">
            Access information about government healthcare programs, services, and facilities 
            available to residents of Digos City.
          </p>
          <div className="grid gap-4 md:grid-cols-2 max-w-xl mx-auto">
            <Card className="border-slate-200">
              <CardContent className="p-4 space-y-2">
                <FileText className="h-6 w-6 text-primary mx-auto mb-2" />
                <h3 className="font-medium text-slate-800">Documentation</h3>
                <p className="text-sm text-slate-600">Required documents and procedures for accessing government healthcare</p>
              </CardContent>
            </Card>
            <Card className="border-slate-200">
              <CardContent className="p-4 space-y-2">
                <Users2 className="h-6 w-6 text-primary mx-auto mb-2" />
                <h3 className="font-medium text-slate-800">Programs</h3>
                <p className="text-sm text-slate-600">Available healthcare programs and initiatives</p>
              </CardContent>
            </Card>
            <Card className="border-slate-200">
              <CardContent className="p-4 space-y-2">
                <ClipboardCheck className="h-6 w-6 text-primary mx-auto mb-2" />
                <h3 className="font-medium text-slate-800">Requirements</h3>
                <p className="text-sm text-slate-600">Eligibility criteria and application process</p>
              </CardContent>
            </Card>
          </div>
          <p className="text-sm text-slate-500 mt-8">
            This page is currently under development. Check back soon for detailed information about 
            government healthcare services in Digos City.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default GovtServices;

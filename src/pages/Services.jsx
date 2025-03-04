import { Construction } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center"
    >
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-slate-50 p-12 rounded-2xl border border-slate-200">
          <Construction className="h-12 w-12 text-primary mx-auto mb-6" />
          <h1 className="text-2xl font-semibold text-slate-900 mb-3">
            Services Page Coming Soon
          </h1>
          <p className="text-slate-600 mb-6">
            We're working hard to bring you a comprehensive list of all our healthcare services. 
            This page will showcase detailed information about each service we offer.
          </p>
          <div className="grid gap-4 md:grid-cols-2 max-w-xl mx-auto">
            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <h3 className="font-medium text-slate-800 mb-2">What to Expect</h3>
              <p className="text-sm text-slate-600">Detailed service descriptions, pricing information, and booking options</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <h3 className="font-medium text-slate-800 mb-2">Launch Date</h3>
              <p className="text-sm text-slate-600">We're aiming to launch this page within the next few weeks</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Services; 
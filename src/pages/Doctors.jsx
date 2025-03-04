import { Stethoscope } from "lucide-react";
import { motion } from "framer-motion";

const Doctors = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center"
    >
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-slate-50 p-12 rounded-2xl border border-slate-200">
          <Stethoscope className="h-12 w-12 text-primary mx-auto mb-6" />
          <h1 className="text-2xl font-semibold text-slate-900 mb-3">
            Meet Our Doctors Soon
          </h1>
          <p className="text-slate-600 mb-6">
            We're currently curating profiles of our expert healthcare professionals. 
            Soon you'll be able to learn about their specializations, experience, and book appointments.
          </p>
          <div className="grid gap-4 md:grid-cols-2 max-w-xl mx-auto">
            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <h3 className="font-medium text-slate-800 mb-2">Coming Features</h3>
              <p className="text-sm text-slate-600">Doctor profiles, specializations, availability calendar, and direct booking</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <h3 className="font-medium text-slate-800 mb-2">Estimated Release</h3>
              <p className="text-sm text-slate-600">The doctors directory will be available in the coming weeks</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Doctors; 
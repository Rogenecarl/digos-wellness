import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

const Appointments = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center"
    >
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-slate-50 p-12 rounded-2xl border border-slate-200">
          <Calendar className="h-12 w-12 text-primary mx-auto mb-6" />
          <h1 className="text-2xl font-semibold text-slate-900 mb-3">
            Appointment Management Coming Soon
          </h1>
          <p className="text-slate-600 mb-6">
            We're building a comprehensive appointment management system to help you track and manage 
            all your healthcare appointments in one place.
          </p>
          <div className="grid gap-4 md:grid-cols-2 max-w-xl mx-auto">
            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <h3 className="font-medium text-slate-800 mb-2">Upcoming Features</h3>
              <p className="text-sm text-slate-600">Appointment scheduling, reminders, history, and online consultations</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <h3 className="font-medium text-slate-800 mb-2">Development Status</h3>
              <p className="text-sm text-slate-600">Currently in final stages of development</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Appointments; 
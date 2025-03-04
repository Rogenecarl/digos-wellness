import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center"
    >
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-slate-50 p-12 rounded-2xl border border-slate-200">
          <MessageCircle className="h-12 w-12 text-primary mx-auto mb-6" />
          <h1 className="text-2xl font-semibold text-slate-900 mb-3">
            Contact Page Under Development
          </h1>
          <p className="text-slate-600 mb-6">
            We're building a comprehensive contact system to make it easier for you to reach out 
            to our healthcare providers and support team.
          </p>
          <div className="grid gap-4 md:grid-cols-2 max-w-xl mx-auto">
            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <h3 className="font-medium text-slate-800 mb-2">Coming Features</h3>
              <p className="text-sm text-slate-600">Contact forms, live chat support, FAQ section, and emergency contacts</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <h3 className="font-medium text-slate-800 mb-2">Temporary Contact</h3>
              <p className="text-sm text-slate-600">For urgent inquiries, please call our hotline at (082) 553-XXXX</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact; 
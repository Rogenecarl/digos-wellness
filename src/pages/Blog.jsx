import { Newspaper } from "lucide-react";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center"
    >
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-slate-50 p-12 rounded-2xl border border-slate-200">
          <Newspaper className="h-12 w-12 text-primary mx-auto mb-6" />
          <h1 className="text-2xl font-semibold text-slate-900 mb-3">
            Health Blog Launching Soon
          </h1>
          <p className="text-slate-600 mb-6">
            Stay tuned for our comprehensive health blog featuring expert insights, wellness tips, 
            and the latest healthcare news from Digos City.
          </p>
          <div className="grid gap-4 md:grid-cols-2 max-w-xl mx-auto">
            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <h3 className="font-medium text-slate-800 mb-2">Content Preview</h3>
              <p className="text-sm text-slate-600">Health tips, medical insights, wellness guides, and local healthcare updates</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <h3 className="font-medium text-slate-800 mb-2">Coming Soon</h3>
              <p className="text-sm text-slate-600">Our first articles will be published in the upcoming weeks</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Blog; 
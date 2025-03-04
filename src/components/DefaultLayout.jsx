import { Outlet, Link, useLocation } from "react-router-dom";
import { Clock, ArrowRight, TrendingUp, Newspaper, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Toaster } from "sonner";
import { AnimatePresence, motion } from "framer-motion";

const recentBlogs = [
  {
    title: "Latest Medical Technologies in Digos",
    date: "March 15, 2024",
    category: "Healthcare Tech",
    image: "/blog1.jpg"
  },
  {
    title: "Understanding Preventive Healthcare",
    date: "March 14, 2024",
    category: "Wellness",
    image: "/blog2.jpg"
  },
  {
    title: "COVID-19 Updates and Guidelines",
    date: "March 13, 2024",
    category: "Public Health",
    image: "/blog3.jpg"
  }
];

const pageTransitionVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

const DefaultLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background scale-95 origin-top">
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: '#f0fdf4',
            border: '1px solid #bbf7d0',
            color: '#166534',
            borderRadius: '0.75rem',
            fontSize: '0.875rem',
            fontWeight: 500,
            padding: '0.75rem 1rem',
            transform: 'translateY(0)',
            transition: 'all 0.3s ease-in-out',
          },
          className: 'shadow-lg hover:shadow-xl',
          duration: 3000,
          success: {
            icon: '✓',
            iconTheme: {
              primary: '#22c55e',
              secondary: '#ffffff'
            }
          }
        }}
      />
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
        <div className="container mx-auto max-w-[1800px] flex h-16 items-center justify-between px-2">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
              <img 
                src="/digoswellnessWObg.png" 
                alt="Digos Wellness Logo" 
                className="h-12 w-auto transition-opacity duration-300 hover:opacity-90"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-all duration-300 hover:-translate-y-0.5">HOME</Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-all duration-300 hover:-translate-y-0.5">ABOUT</Link>
            <Link to="/contact" className="text-sm font-medium hover:text-primary transition-all duration-300 hover:-translate-y-0.5">CONTACT US</Link>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors duration-300" />
              <input
                type="search"
                placeholder="Search clinic..."
                className="w-[300px] rounded-full border pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:shadow-md"
              />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden transition-transform duration-300 hover:scale-110"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-background transition-all duration-300 animate-in slide-in-from-top">
            <div className="container mx-auto px-2 py-4 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search clinic..."
                  className="w-full rounded-full border pl-10 pr-4 py-2 text-sm transition-all duration-300 hover:shadow-md"
                />
              </div>
              <nav className="flex flex-col space-y-4">
                <Link to="/" className="text-sm font-medium hover:text-primary transition-all duration-300 hover:translate-x-1">HOME</Link>
                <Link to="/about" className="text-sm font-medium hover:text-primary transition-all duration-300 hover:translate-x-1">ABOUT</Link>
                <Link to="/contact" className="text-sm font-medium hover:text-primary transition-all duration-300 hover:translate-x-1">CONTACT US</Link>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Services Navigation */}
      <div className="sticky top-16 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
        <div className="container mx-auto max-w-[1800px] flex items-center gap-6 overflow-x-auto px-2 py-3 no-scrollbar">
          <Link to="/govt-services" className="whitespace-nowrap text-sm font-medium hover:text-primary transition-all duration-300 hover:-translate-y-0.5">GOVT SERVICES</Link>
          <Link to="/health-center" className="whitespace-nowrap text-sm font-medium hover:text-primary transition-all duration-300 hover:-translate-y-0.5">HEALTH CENTER</Link>
          <Link to="/hospitals" className="whitespace-nowrap text-sm font-medium hover:text-primary transition-all duration-300 hover:-translate-y-0.5">HOSPITALS</Link>
          <Link to="/dental" className="whitespace-nowrap text-sm font-medium hover:text-primary transition-all duration-300 hover:-translate-y-0.5">DENTAL</Link>
          <Link to="/veterinary" className="whitespace-nowrap text-sm font-medium hover:text-primary transition-all duration-300 hover:-translate-y-0.5">VETERINARY</Link>
          <Link to="/dermatologist" className="whitespace-nowrap text-sm font-medium hover:text-primary transition-all duration-300 hover:-translate-y-0.5">DERMATOLOGIST</Link>
          <Link to="/more" className="whitespace-nowrap text-sm font-medium hover:text-primary transition-all duration-300 hover:-translate-y-0.5">MORE</Link>
        </div>
      </div>

      {/* Main Content with Page Transitions */}
      <motion.main 
        className="container mx-auto max-w-[1800px] px-2 py-8 lg:py-10"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransitionVariants}
        key={location.pathname}
      >
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar with Animation */}
          <motion.aside 
            className="w-full lg:w-[350px] flex-shrink-0 lg:sticky lg:top-[144px] lg:h-[calc(100vh-144px)]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-col gap-6">
              {/* Blogs Section with Animation */}
              <motion.div 
                className="rounded-xl border bg-card shadow-sm transition-all duration-300 hover:shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="border-b p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Newspaper className="h-5 w-5 text-primary" />
                      <h2 className="font-semibold">Latest Health Blogs</h2>
                    </div>
                    <Button variant="ghost" size="sm" className="text-xs">
                      View All <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col divide-y">
                  {recentBlogs.map((blog, index) => (
                    <div key={index} className="group p-4 transition-all duration-300 hover:bg-muted/50 hover:translate-x-1">
                      <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {blog.date}
                      </div>
                      <h3 className="mb-1 line-clamp-2 text-sm font-medium group-hover:text-primary">
                        {blog.title}
                      </h3>
                      <span className="inline-block rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                        {blog.category}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Ads Section with Animation */}
              <motion.div 
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {/* Featured Hospital Ad */}
                <div className="overflow-hidden rounded-xl border bg-gradient-to-r from-blue-50 to-indigo-50 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                  <div className="p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-blue-500" />
                      <span className="text-xs font-medium text-blue-500">Featured</span>
                    </div>
                    <h3 className="mb-2 text-sm font-semibold">Digos Medical Center</h3>
                    <p className="mb-3 text-xs text-muted-foreground">
                      State-of-the-art facilities and expert healthcare professionals
                    </p>
                    <Button size="sm" className="w-full bg-blue-500 text-xs hover:bg-blue-600">
                      Book Appointment
                    </Button>
                  </div>
                </div>

                {/* Health Insurance Ad */}
                <div className="overflow-hidden rounded-xl border bg-gradient-to-r from-purple-50 to-pink-50 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                  <div className="p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-purple-500" />
                      <span className="text-xs font-medium text-purple-500">Sponsored</span>
                    </div>
                    <h3 className="mb-2 text-sm font-semibold">Health Insurance Plans</h3>
                    <p className="mb-3 text-xs text-muted-foreground">
                      Protect your family with comprehensive healthcare coverage
                    </p>
                    <Button size="sm" className="w-full bg-purple-500 text-xs hover:bg-purple-600">
                      Learn More
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.aside>
          
          {/* Main Content Area with AnimatePresence for Route Transitions */}
          <motion.div 
            className="flex-1 min-w-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageTransitionVariants}
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.main>
    </div>
  );
};

export default DefaultLayout;

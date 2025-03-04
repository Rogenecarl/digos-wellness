import { Outlet, Link, useLocation } from "react-router-dom";
import { 
  Clock, 
  ArrowRight, 
  TrendingUp, 
  Newspaper, 
  Menu, 
  Search, 
  Building2, 
  Hospital, 
  Stethoscope, 
  HeartPulse,
  PawPrint,
  Sparkles,
  MoreHorizontal 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Toaster } from "sonner";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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

const serviceItems = [
  { icon: Building2, label: "GOVT SERVICES", path: "/govt-services", color: "from-violet-500/20 to-violet-600/20" },
  { icon: Hospital, label: "HEALTH CENTER", path: "/health-center", color: "from-violet-500/20 to-violet-600/20" },
  { icon: Stethoscope, label: "HOSPITALS", path: "/hospitals", color: "from-violet-500/20 to-violet-600/20" },
  { icon: HeartPulse, label: "DENTAL", path: "/dental", color: "from-violet-500/20 to-violet-600/20" },
  { icon: PawPrint, label: "VETERINARY", path: "/veterinary", color: "from-violet-500/20 to-violet-600/20" },
  { icon: Sparkles, label: "DERMATOLOGIST", path: "/dermatologist", color: "from-violet-500/20 to-violet-600/20" },
  { icon: MoreHorizontal, label: "MORE", path: "/more", color: "from-violet-500/20 to-violet-600/20" },
];

const DefaultLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActiveLink = (path) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const isActiveService = (path) => {
    return location.pathname.startsWith(path);
  };

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
      <header className="sticky top-0 z-50 border-b bg-background/98 backdrop-blur-none supports-[backdrop-filter]:bg-background/98 transition-all duration-300">
        <div className="container mx-auto max-w-[1800px] flex h-14 items-center justify-between px-2">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
              <img 
                src="/digoswellnessWObg.png" 
                alt="Digos Wellness Logo" 
                className="h-10 w-auto transition-opacity duration-300 hover:opacity-90"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {['/', '/services', '/doctors', '/appointments', '/blog', '/about', '/contact'].map((path) => (
              <Link 
                key={path}
                to={path === '/' ? '/' : path.slice(1)} 
                className={`text-sm font-medium tracking-wide antialiased transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-violet-500 after:transition-transform after:duration-300 hover:-translate-y-0.5 ${
                  isActiveLink(path) ? 'text-violet-600 after:scale-x-100 font-semibold' : 'hover:text-violet-500'
                }`}
              >
                {path === '/' ? 'HOME' : path.slice(1).toUpperCase()}
              </Link>
            ))}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors duration-300" />
              <input
                type="search"
                placeholder="Search clinic..."
                className="w-[300px] rounded-full border pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all duration-300 hover:shadow-md"
              />
            </div>
            <div className="flex items-center gap-3 pl-2">
              <Button 
                variant="ghost" 
                className="text-sm font-medium hover:text-violet-500 transition-all duration-300 hover:-translate-y-0.5"
                onClick={() => navigate("/login")}
              >
                Log In
              </Button>
              <Button 
                className="bg-violet-500 text-white hover:bg-violet-600 transition-all duration-300 hover:scale-105"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="ghost"
              className="text-sm font-medium hover:text-violet-500 transition-all duration-300"
              onClick={() => navigate("/login")}
            >
              Log In
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="transition-transform duration-300 hover:scale-110"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
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
                {['/', '/services', '/doctors', '/appointments', '/blog', '/about', '/contact'].map((path) => (
                  <Link 
                    key={path}
                    to={path === '/' ? '/' : path.slice(1)}
                    className={`text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                      isActiveLink(path) ? 'text-violet-600 translate-x-2 font-semibold bg-violet-50 rounded-lg p-2' : 'hover:text-violet-500 hover:translate-x-1 p-2'
                    }`}
                  >
                    {path === '/' ? 'HOME' : path.slice(1).toUpperCase()}
                  </Link>
                ))}
                <div className="pt-2 border-t">
                  <Button 
                    className="w-full bg-violet-500 text-white hover:bg-violet-600 transition-all duration-300"
                    onClick={() => navigate("/signup")}
                  >
                    Sign Up
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Services Navigation */}
      <div className="sticky top-14 z-40 bg-background/98 backdrop-blur-none supports-[backdrop-filter]:bg-background/98 transition-all duration-300 border-b">
        <div className="container mx-auto max-w-[1800px] py-1.5 px-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-1.5">
            {serviceItems.map((service, index) => (
              <Link 
                key={index}
                to={service.path}
                className={`group relative overflow-hidden rounded-md border bg-gradient-to-br hover:shadow-sm transition-all duration-300 hover:-translate-y-0.5 ${
                  isActiveService(service.path) ? 'ring-2 ring-violet-500 shadow-md' : ''
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} ${
                  isActiveService(service.path) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                } transition-opacity duration-300`} />
                <div className="relative p-2 flex flex-col items-center gap-1 text-center">
                  <service.icon className={`h-4 w-4 ${
                    isActiveService(service.path) ? 'text-violet-600' : 'text-muted-foreground group-hover:text-violet-500'
                  } transition-colors duration-300`} />
                  <span className={`text-[10px] font-semibold tracking-wide antialiased whitespace-nowrap ${
                    isActiveService(service.path) ? 'text-violet-600' : 'group-hover:text-violet-500'
                  } transition-colors duration-300`}>
                    {service.label}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content with Page Transitions */}
      <motion.main 
        className="container mx-auto max-w-[1800px] px-2 py-6 lg:py-8 antialiased"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransitionVariants}
        key={location.pathname}
      >
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar with Animation */}
          <motion.aside 
            className="w-full lg:w-[300px] flex-shrink-0 lg:sticky lg:top-[120px] lg:h-[calc(100vh-120px)]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-col gap-4">
              {/* Blogs Section with Animation */}
              <motion.div 
                className="rounded-lg border bg-card shadow-sm transition-all duration-300 hover:shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="border-b p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Newspaper className="h-4 w-4 text-violet-500" />
                      <h2 className="font-semibold text-sm tracking-wide antialiased">Latest Health Blogs</h2>
                    </div>
                    <Button variant="ghost" size="sm" className="text-xs h-7 font-medium tracking-wide">
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
                      <h3 className="mb-1 line-clamp-2 text-sm font-medium group-hover:text-violet-500">
                        {blog.title}
                      </h3>
                      <span className="inline-block rounded-full bg-violet-500/10 px-2 py-0.5 text-xs font-medium text-violet-600">
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
                <div className="overflow-hidden rounded-xl border bg-gradient-to-r from-violet-50 to-violet-100 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                  <div className="p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-violet-500" />
                      <span className="text-xs font-medium text-violet-500">Featured</span>
                    </div>
                    <h3 className="mb-2 text-sm font-semibold">Digos Medical Center</h3>
                    <p className="mb-3 text-xs text-muted-foreground">
                      State-of-the-art facilities and expert healthcare professionals
                    </p>
                    <Button size="sm" className="w-full bg-violet-500 text-xs hover:bg-violet-600">
                      Book Appointment
                    </Button>
                  </div>
                </div>

                {/* Health Insurance Ad */}
                <div className="overflow-hidden rounded-xl border bg-gradient-to-r from-violet-50 to-violet-100 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                  <div className="p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-violet-500" />
                      <span className="text-xs font-medium text-violet-500">Sponsored</span>
                    </div>
                    <h3 className="mb-2 text-sm font-semibold">Health Insurance Plans</h3>
                    <p className="mb-3 text-xs text-muted-foreground">
                      Protect your family with comprehensive healthcare coverage
                    </p>
                    <Button size="sm" className="w-full bg-violet-500 text-xs hover:bg-violet-600">
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

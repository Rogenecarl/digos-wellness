import { Outlet, Link } from "react-router-dom";
import { Clock, ArrowRight, TrendingUp, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";

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

const DefaultLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-8 w-8 bg-gray-200 rounded-md">LOGO</div>
            </Link>
          </div>
          <nav className="flex items-center gap-4 md:gap-6">
            <Link to="/" className="text-sm font-medium hover:underline">HOME</Link>
            <Link to="/about" className="text-sm font-medium hover:underline">ABOUT</Link>
            <Link to="/contact" className="text-sm font-medium hover:underline">CONTACT US</Link>
            <div className="relative">
              <input
                type="search"
                placeholder="Search clinic..."
                className="w-[200px] rounded-md border px-3 py-1 text-sm"
              />
            </div>
          </nav>
        </div>
      </header>

      {/* Services Navigation */}
      <div className="border-b">
        <div className="container flex items-center gap-4 overflow-x-auto px-4 py-2 md:px-6">
          <Link to="/govt-services" className="whitespace-nowrap text-sm font-medium hover:underline">GOVT SERVICES</Link>
          <Link to="/health-center" className="whitespace-nowrap text-sm font-medium hover:underline">HEALTH CENTER</Link>
          <Link to="/hospitals" className="whitespace-nowrap text-sm font-medium hover:underline">HOSPITALS</Link>
          <Link to="/dental" className="whitespace-nowrap text-sm font-medium hover:underline">DENTAL</Link>
          <Link to="/veterinary" className="whitespace-nowrap text-sm font-medium hover:underline">VETERINARY</Link>
          <Link to="/dermatologist" className="whitespace-nowrap text-sm font-medium hover:underline">DERMATOLOGIST</Link>
          <Link to="/more" className="whitespace-nowrap text-sm font-medium hover:underline">MORE</Link>
        </div>
      </div>

      {/* Main Content */}
      <main className="container px-4 py-6 md:px-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className="hidden w-[300px] flex-col md:flex">
            <div className="flex flex-col gap-6">
              {/* Blogs Section */}
              <div className="rounded-xl border bg-card">
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
                    <div key={index} className="group p-4 transition-colors hover:bg-muted/50">
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
              </div>

              {/* Ads Section */}
              <div className="space-y-4">
                {/* Featured Hospital Ad */}
                <div className="overflow-hidden rounded-xl border bg-gradient-to-r from-blue-50 to-indigo-50">
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
                <div className="overflow-hidden rounded-xl border bg-gradient-to-r from-purple-50 to-pink-50">
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
              </div>
            </div>
          </aside>
          
          {/* Main Content Area */}
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DefaultLayout;

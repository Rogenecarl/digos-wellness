import { Outlet, Link } from "react-router-dom";

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
          <aside className="hidden w-[240px] flex-col md:flex">
            <div className="flex flex-col gap-4">
              <div className="rounded-lg border p-4">
                <h2 className="mb-2 text-lg font-semibold">BLOGS</h2>
                {/* Add blog links here */}
              </div>
              <div className="rounded-lg border p-4">
                <h2 className="mb-2 text-lg font-semibold">ADS</h2>
                {/* Add advertisement content here */}
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

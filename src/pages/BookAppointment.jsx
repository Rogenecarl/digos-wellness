import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Calendar, Clock, MapPin, Phone, User, Mail, Check, AlertCircle } from "lucide-react";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "sonner";
import { motion } from "framer-motion";

const formTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const stepVariants = {
  active: {
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  },
  inactive: {
    scale: 1,
    transition: {
      duration: 0.3
    }
  }
};

const serviceVariants = {
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2
    }
  }
};

const BookAppointment = () => {
  const { type, id } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  // Validate route parameters
  useEffect(() => {
    if (!type || !id) {
      navigate('/');
      return;
    }
  }, [type, id, navigate]);

  const services = [
    { id: "primary", name: "Primary Care Consultation", description: "General check-up and consultation" },
    { id: "specialty", name: "Specialty Consultation", description: "Specialized medical consultation" },
    { id: "lab", name: "General Lab Tests", description: "Various laboratory tests and diagnostics" },
    { id: "xray", name: "X-Ray Procedures", description: "Diagnostic imaging services" },
  ];

  const timeSlots = [
    "7:00am", "8:00am", "9:00am", "10:00am", "11:00am",
    "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm"
  ];

  const handleNext = () => {
    if (currentStep === 1 && !selectedService) {
      return;
    }
    if (currentStep === 2 && (!formData.firstName || !formData.lastName || !formData.phone || !formData.email)) {
      return;
    }
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const handleBack = () => {
    if (currentStep === 1) {
      const validTypes = ['dental', 'health-center', 'hospitals'];
      const backPath = validTypes.includes(type) ? `/${type}/${id}` : '/';
      navigate(backPath);
    } else {
      setCurrentStep((prev) => Math.max(prev - 1, 1));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmModal(true);
  };

  const handleConfirmAppointment = () => {
    try {
      // Here you would typically make an API call to save the appointment
      console.log({
        service: selectedService,
        date: selectedDate ? format(selectedDate, 'yyyy-MM-dd') : null,
        time: selectedTime,
        ...formData,
      });

      // Close modal
      setShowConfirmModal(false);

      // Show success toast
      toast.success("Appointment Confirmed!", {
        description: "Your appointment has been successfully scheduled. A confirmation email will be sent shortly.",
      });

      // Navigate back to the details page with proper validation
      const validTypes = ['dental', 'health-center', 'hospitals'];
      const backPath = validTypes.includes(type) ? `/${type}/${id}` : '/';
      navigate(backPath);
    } catch (error) {
      console.error('Navigation error:', error);
      toast.error("An error occurred", {
        description: "Please try again or contact support if the problem persists.",
      });
    }
  };

  const getSelectedService = () => {
    return services.find(service => service.id === selectedService);
  };

  return (
    <motion.div 
      className="max-w-3xl mx-auto"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={formTransition}
    >
      {/* Progress Steps with enhanced styling */}
      <div className="mb-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Button
              variant="ghost"
              className="gap-2 hover:bg-primary/5 transition-colors duration-300"
              onClick={handleBack}
            >
              <ArrowLeft className="h-4 w-4" /> Back
            </Button>
          </div>
          <div className="hidden sm:flex items-center justify-center w-full max-w-2xl mx-auto">
            {[
              { step: 1, label: "Choose Appointment", icon: Calendar },
              { step: 2, label: "Your Info", icon: User },
              { step: 3, label: "Confirmation", icon: Check }
            ].map((item, index) => (
              <div key={item.step} className="flex items-center flex-1">
                {index > 0 && (
                  <div className="flex-1 mx-2">
                    <div 
                      className={`h-1 transition-all duration-500 ${
                        currentStep >= item.step ? "bg-primary" : "bg-muted"
                      }`} 
                    />
                  </div>
                )}
                <motion.div 
                  className={`flex flex-col items-center gap-2 transition-colors duration-300 ${
                    currentStep >= item.step ? "text-primary" : "text-muted-foreground"
                  }`}
                  variants={stepVariants}
                  animate={currentStep >= item.step ? "active" : "inactive"}
                >
                  <div 
                    className={`h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      currentStep >= item.step 
                        ? "bg-primary text-white shadow-lg shadow-primary/30" 
                        : "bg-muted"
                    }`}
                  >
                    {<item.icon className="h-5 w-5" />}
                  </div>
                  <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Step Content with enhanced animations */}
      <div className="space-y-6">
        {currentStep === 1 && (
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="text-center max-w-xl mx-auto">
              <h2 className="text-2xl font-semibold mb-3">Choose Your Service</h2>
              <p className="text-muted-foreground">Select the type of service you'd like to book an appointment for.</p>
            </div>

            <div className="grid gap-4 max-w-2xl mx-auto">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  variants={serviceVariants}
                  whileHover="hover"
                  className={`relative flex items-center gap-4 rounded-xl border p-6 cursor-pointer transition-all duration-300 ${
                    selectedService === service.id 
                      ? "border-primary bg-primary/5 shadow-lg shadow-primary/10" 
                      : "hover:border-primary/50 hover:shadow-md"
                  }`}
                  onClick={() => setSelectedService(service.id)}
                >
                  <div className={`h-5 w-5 rounded-full border-2 transition-all duration-300 ${
                    selectedService === service.id 
                      ? "border-primary bg-primary scale-110" 
                      : "border-muted-foreground"
                  }`} />
                  <div>
                    <h3 className="font-medium text-lg mb-1">{service.name}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="max-w-2xl mx-auto">
              <Button
                className="w-full h-12 text-base transition-all duration-300 hover:scale-[1.02]"
                disabled={!selectedService}
                onClick={handleNext}
              >
                Continue <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        )}

        {currentStep === 2 && (
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="text-center max-w-xl mx-auto">
              <h2 className="text-2xl font-semibold mb-3">Your Information</h2>
              <p className="text-muted-foreground">Please provide your contact details and preferred schedule.</p>
            </div>

            <div className="max-w-2xl mx-auto space-y-8">
              {/* Personal Information with Icons */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <User className="h-4 w-4 text-primary" />
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border px-3 py-2 transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <User className="h-4 w-4 text-primary" />
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border px-3 py-2 transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full rounded-lg border px-3 py-2 transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border px-3 py-2 transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email address"
                  required
                />
              </div>

              {/* Date and Time Selection with enhanced styling */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border bg-card shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="border-b p-4">
                    <h3 className="font-medium flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      Select Date
                    </h3>
                  </div>
                  <div className="p-4 flex justify-center">
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      minDate={new Date()}
                      inline
                      calendarClassName="!border-none"
                    />
                  </div>
                </div>

                <div className="rounded-xl border bg-card shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="border-b p-4">
                    <h3 className="font-medium flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      Select Time
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3 p-4">
                    {timeSlots.map((time) => (
                      <motion.div
                        key={time}
                        whileHover={{ scale: 1.05 }}
                        className={`flex items-center justify-center rounded-lg border p-3 cursor-pointer transition-all duration-300 ${
                          selectedTime === time 
                            ? "border-primary bg-primary/5 shadow-md" 
                            : "hover:border-primary/50 hover:bg-primary/5"
                        }`}
                        onClick={() => setSelectedTime(time)}
                      >
                        <span className="text-sm font-medium">{time}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-2xl mx-auto">
              <Button
                className="w-full h-12 text-base transition-all duration-300 hover:scale-[1.02]"
                disabled={!formData.firstName || !formData.lastName || !formData.phone || !formData.email || !selectedDate || !selectedTime}
                onClick={handleNext}
              >
                Continue <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        )}

        {currentStep === 3 && (
          <motion.div 
            className="space-y-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-3">Confirm Your Appointment</h2>
              <p className="text-muted-foreground">Please review your appointment details before confirming.</p>
            </div>

            <div className="rounded-xl border bg-card shadow-sm">
              <div className="border-b p-4">
                <h3 className="font-medium flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  Appointment Details
                </h3>
              </div>
              <div className="divide-y">
                <div className="grid grid-cols-2 p-6">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Service</p>
                    <p className="font-medium text-lg">{getSelectedService()?.name}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Schedule</p>
                    <p className="font-medium text-lg">
                      {selectedDate ? format(selectedDate, 'MMMM d, yyyy') : ''} at {selectedTime}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 p-6">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Name</p>
                    <p className="font-medium text-lg">{formData.firstName} {formData.lastName}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Contact</p>
                    <p className="font-medium text-lg">{formData.phone}</p>
                    <p className="text-sm text-muted-foreground">{formData.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border bg-blue-50 p-6">
              <p className="text-sm text-blue-600 leading-relaxed">
                By confirming this appointment, you agree to our terms and conditions. A confirmation email will be sent to your email address with additional instructions.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <Button 
                type="submit" 
                className="w-full h-12 text-base bg-green-600 hover:bg-green-700 transition-all duration-300 hover:scale-[1.02]"
              >
                <Check className="mr-2 h-5 w-5" /> Confirm Appointment
              </Button>
            </form>
          </motion.div>
        )}
      </div>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-md w-full mx-4 overflow-hidden">
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <AlertCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Confirm Appointment</h3>
                  <p className="text-sm text-muted-foreground">Are you sure you want to confirm this appointment?</p>
                </div>
              </div>

              <div className="rounded-lg border bg-muted/50 p-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Service:</span>
                  <span className="font-medium">{getSelectedService()?.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Date & Time:</span>
                  <span className="font-medium">
                    {selectedDate ? format(selectedDate, 'MMMM d, yyyy') : ''} at {selectedTime}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Name:</span>
                  <span className="font-medium">{formData.firstName} {formData.lastName}</span>
                </div>
              </div>
            </div>

            <div className="border-t p-4 bg-muted/50 flex gap-3 justify-end">
              <Button
                variant="outline"
                onClick={() => setShowConfirmModal(false)}
              >
                Cancel
              </Button>
              <Button
                className="bg-green-600 hover:bg-green-700"
                onClick={handleConfirmAppointment}
              >
                <Check className="mr-2 h-4 w-4" /> Confirm
              </Button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default BookAppointment; 
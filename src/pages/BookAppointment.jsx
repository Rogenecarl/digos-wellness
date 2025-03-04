import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Calendar, Clock, MapPin, Phone, User, Mail, Check } from "lucide-react";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookAppointment = () => {
  const { type, id } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

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
      navigate(-1);
    } else {
      setCurrentStep((prev) => Math.max(prev - 1, 1));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      service: selectedService,
      date: selectedDate ? format(selectedDate, 'yyyy-MM-dd') : null,
      time: selectedTime,
      ...formData,
    });
  };

  const getSelectedService = () => {
    return services.find(service => service.id === selectedService);
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Button
              variant="ghost"
              className="gap-2"
              onClick={handleBack}
            >
              <ArrowLeft className="h-4 w-4" /> Back
            </Button>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-sm">
            <div className={`flex items-center gap-2 ${currentStep >= 1 ? "text-primary" : "text-muted-foreground"}`}>
              <div className={`h-8 w-8 rounded-full flex items-center justify-center ${currentStep >= 1 ? "bg-primary text-white" : "bg-muted"}`}>1</div>
              <span>Choose Appointment</span>
            </div>
            <div className={`h-px w-12 ${currentStep >= 2 ? "bg-primary" : "bg-muted"}`} />
            <div className={`flex items-center gap-2 ${currentStep >= 2 ? "text-primary" : "text-muted-foreground"}`}>
              <div className={`h-8 w-8 rounded-full flex items-center justify-center ${currentStep >= 2 ? "bg-primary text-white" : "bg-muted"}`}>2</div>
              <span>Your Info</span>
            </div>
            <div className={`h-px w-12 ${currentStep >= 3 ? "bg-primary" : "bg-muted"}`} />
            <div className={`flex items-center gap-2 ${currentStep >= 3 ? "text-primary" : "text-muted-foreground"}`}>
              <div className={`h-8 w-8 rounded-full flex items-center justify-center ${currentStep >= 3 ? "bg-primary text-white" : "bg-muted"}`}>3</div>
              <span>Confirmation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Step Content */}
      <div className="space-y-6">
        {currentStep === 1 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Choose Appointment</h2>
              <p className="text-muted-foreground">Please choose the type of service that you will be availing.</p>
            </div>

            <div className="grid gap-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`relative flex items-center gap-4 rounded-lg border p-4 cursor-pointer hover:border-primary transition-colors ${
                    selectedService === service.id ? "border-primary bg-primary/5" : ""
                  }`}
                  onClick={() => setSelectedService(service.id)}
                >
                  <div className={`h-4 w-4 rounded-full border-2 ${
                    selectedService === service.id ? "border-primary bg-primary" : ""
                  }`} />
                  <div>
                    <h3 className="font-medium">{service.name}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              className="w-full"
              disabled={!selectedService}
              onClick={handleNext}
            >
              Continue <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Your Information</h2>
              <p className="text-muted-foreground">Please provide your contact details for the appointment.</p>
            </div>

            <div className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border px-3 py-2"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border px-3 py-2"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Phone Number</label>
                <input
                  type="tel"
                  className="w-full rounded-lg border px-3 py-2"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  className="w-full rounded-lg border px-3 py-2"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {/* Calendar */}
                <div className="rounded-lg border bg-card">
                  <div className="border-b p-4">
                    <h3 className="font-medium">Select Date</h3>
                  </div>
                  <div className="p-4">
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      minDate={new Date()}
                      inline
                      calendarClassName="!border-none"
                    />
                  </div>
                </div>

                {/* Time Slots */}
                <div className="rounded-lg border bg-card">
                  <div className="border-b p-4">
                    <h3 className="font-medium">Select Time</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-2 p-4">
                    {timeSlots.map((time) => (
                      <div
                        key={time}
                        className={`flex items-center justify-center rounded-lg border p-2 cursor-pointer hover:border-primary transition-colors ${
                          selectedTime === time ? "border-primary bg-primary/5" : ""
                        }`}
                        onClick={() => setSelectedTime(time)}
                      >
                        <span className="text-sm">{time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Button
              className="w-full"
              disabled={!formData.firstName || !formData.lastName || !formData.phone || !formData.email || !selectedDate || !selectedTime}
              onClick={handleNext}
            >
              Continue <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Confirmation</h2>
              <p className="text-muted-foreground">Please review your appointment details before confirming.</p>
            </div>

            <div className="rounded-lg border bg-card">
              <div className="border-b p-4">
                <h3 className="font-medium">Appointment Details</h3>
              </div>
              <div className="divide-y">
                <div className="grid grid-cols-2 p-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Service</p>
                    <p className="font-medium">{getSelectedService()?.name}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Schedule</p>
                    <p className="font-medium">
                      {selectedDate ? format(selectedDate, 'MMMM d, yyyy') : ''} at {selectedTime}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 p-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Name</p>
                    <p className="font-medium">{formData.firstName} {formData.lastName}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Contact</p>
                    <p className="font-medium">{formData.phone}</p>
                    <p className="text-sm text-muted-foreground">{formData.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-blue-50 p-4">
              <p className="text-sm text-blue-600">
                By confirming this appointment, you agree to our terms and conditions. A confirmation email will be sent to your email address.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                <Check className="mr-2 h-4 w-4" /> Confirm Appointment
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookAppointment; 
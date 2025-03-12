"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Store } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StepIndicator } from "@/components/custom/store/step-indicator";
import { BasicInfoForm } from "@/components/custom/store/basic-info-form";
import { AppearanceForm } from "@/components/custom/store/appearance-form";
import { ContactInfoForm } from "@/components/custom/store/contact-form";
import { StoreSettingsForm } from "@/components/custom/store/store-settings-form";
import { ReviewForm } from "@/components/custom/store/review-form";

// Define the steps for the store creation process
const steps = [
  { id: "basic-info", title: "Basic Info" },
  { id: "appearance", title: "Appearance" },
  { id: "contact", title: "Contact" },
  { id: "settings", title: "Settings" },
  { id: "review", title: "Review" },
];

// Define the store data structure
export interface StoreFormData {
  // Basic Info
  name: string;
  url: string;
  description: string;
  status: string;

  // Appearance
  logo: string;
  banner: string;
  primaryColor: string;
  accentColor: string;
  fontFamily: string;

  // Contact Info
  email: string;
  phone: string;
  address: string;

  // Settings
  taxCalculation: boolean;
  inventoryTracking: boolean;
  customerAccounts: boolean;
  guestCheckout: boolean;
}

export default function CreateStorePage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<StoreFormData>({
    // Basic Info
    name: "",
    url: "",
    description: "",
    status: "active",

    // Appearance
    logo: "/placeholder.svg?height=100&width=200",
    banner: "/placeholder.svg?height=200&width=800",
    primaryColor: "#0f172a",
    accentColor: "#f97316",
    fontFamily: "inter",

    // Contact Info
    email: "",
    phone: "",
    address: "",

    // Settings
    taxCalculation: true,
    inventoryTracking: true,
    customerAccounts: true,
    guestCheckout: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update form data
  const updateFormData = (data: Partial<StoreFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  // Handle next step
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  // Handle previous step
  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  // Handle form submission
  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      // In a real app, you would send the data to your API here
      console.log("Submitting store data:", formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Redirect to the stores page
      router.push("/stores");
    } catch (error) {
      console.error("Error creating store:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Render the current step form
  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <BasicInfoForm formData={formData} updateFormData={updateFormData} />
        );
      case 1:
        return (
          <AppearanceForm formData={formData} updateFormData={updateFormData} />
        );
      case 2:
        return (
          <ContactInfoForm
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 3:
        return (
          <StoreSettingsForm
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 4:
        return <ReviewForm formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/stores">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back to stores</span>
            </Link>
          </Button>
          <h2 className="text-3xl font-bold tracking-tight">
            Create New Store
          </h2>
        </div>
      </div>

      <div className="mx-auto max-w-3xl">
        <StepIndicator steps={steps} currentStep={currentStep} />

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>{steps[currentStep].title}</CardTitle>
            <CardDescription>
              {currentStep === 0 &&
                "Enter the basic information about your store."}
              {currentStep === 1 &&
                "Customize how your store looks to customers."}
              {currentStep === 2 && "Add contact information for your store."}
              {currentStep === 3 && "Configure your store settings."}
              {currentStep === 4 &&
                "Review your store information before creating."}
            </CardDescription>
          </CardHeader>
          <CardContent>{renderStepContent()}</CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 0}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Previous
            </Button>

            {currentStep < steps.length - 1 ? (
              <Button onClick={handleNext}>
                Next <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="gap-2"
              >
                {isSubmitting ? (
                  <>Creating Store...</>
                ) : (
                  <>
                    <Store className="h-4 w-4" />
                    Create Store
                  </>
                )}
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { FileText, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Passport Submission – YourAthens",
  description: "Submit your passport information for booking verification.",
};

export default function PassportUpload() {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Passport Submission</h1>
          <p className="text-lg text-muted-foreground">
            Please send your passport information via email for booking verification.
          </p>
        </div>

        <div className="bg-card rounded-lg border p-8">
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-start">
              <FileText className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-medium text-blue-900 mb-1">Passport Submission Instructions</p>
                <ul className="text-blue-800 space-y-1">
                  <li>• Please attach a clear image of your passport photo page</li>
                  <li>• Accepted formats: JPG, PNG, PDF (max 10MB per email)</li>
                  <li>• Include your full name and booking reference in the email</li>
                  <li>• Your information will be handled confidentially</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-3 p-4 bg-primary/5 rounded-lg border">
              <Mail className="w-6 h-6 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Send your passport to:</p>
                <a href="mailto:info@yourathens.gr?subject=Passport Submission - Booking Verification" className="text-lg font-semibold text-primary hover:underline">
                  info@yourathens.gr
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3 p-4 bg-green-50 border border-green-200 rounded-lg">
              <Phone className="w-6 h-6 text-green-600" />
              <div>
                <p className="text-sm text-muted-foreground">For urgent inquiries:</p>
                <a href="tel:+306973800584" className="text-lg font-semibold text-green-600 hover:underline">
                  +30 6973800584
                </a>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-sm text-muted-foreground">
                Once we receive your passport information, our team will process your booking confirmation and contact you shortly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

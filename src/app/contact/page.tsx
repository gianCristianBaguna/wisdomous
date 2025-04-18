import ContactForm from "@/app/components/ContactUs";
import Navbar from "../components/navbar";
export default function ContactPage() {
    return (
        <div>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[#0c1119]">
          <ContactForm />
        </div>
        </div>
      )
    }
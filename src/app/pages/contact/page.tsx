import ContactForm from "@/components/contactSections/ContactUs";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
export default function ContactPage() {
    return (
        <div className="z-40 overflow-hidden">
        <Navbar />
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50 to-blue-100 ">
          <ContactForm />
        </div>
        <Footer />
        </div>
      )
    }
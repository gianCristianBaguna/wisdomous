import ContactForm from "@/components/ContactUs";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
export default function ContactPage() {
    return (
        <div className="overflow-hidden">
        <Navbar />
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[#0c1119]">
          <ContactForm />
        </div>
        <Footer />
        </div>
      )
    }
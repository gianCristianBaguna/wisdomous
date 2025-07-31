<<<<<<< HEAD:src/app/pages/contact/page.tsx
import ContactForm from "@/components/contactSections/ContactUs";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
=======
import ContactForm from "@/components/ContactUs";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
>>>>>>> f4940fcd8c161a0c794b1ae41a96a26c5a02056f:src/app/contact/page.tsx
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
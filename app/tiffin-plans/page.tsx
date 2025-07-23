import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TiffinPlansContent } from "@/components/tiffin-plans-content"

export default function TiffinPlansPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <TiffinPlansContent />
      <Footer />
    </main>
  )
}

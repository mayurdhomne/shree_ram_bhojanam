import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { OrderContent } from "@/components/order-content"

export default function OrderPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <OrderContent />
      <Footer />
    </main>
  )
}

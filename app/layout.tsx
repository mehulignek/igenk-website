import "styles/tailwind.css"
import Navigation from "../components/Navigation/Navigation"
import { Footer } from "../components/Common"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}

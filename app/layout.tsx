import "styles/tailwind.css"
import Navigation from "../components/Navigation/Navigation"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black">
        <Navigation />
        {children}
      </body>
    </html>
  )
}

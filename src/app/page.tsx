export const instant = false

import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import PublicHome from '@/components/PublicHome'

export default function Home() {
  return (
    <div>
      <Nav />
      <PublicHome />
      <Footer />
    </div>
  )
}
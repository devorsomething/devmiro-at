import { Navigation } from '@/app/components/navigation'
import { Hero } from '@/app/components/hero'
import { Services } from '@/app/components/services'
import { HowItWorks } from '@/app/components/how-it-works'
import { Projects } from '@/app/components/projects'
import { Stats } from '@/app/components/stats'
import { Testimonials } from '@/app/components/testimonials'
import { FAQ } from '@/app/components/faq'
import { Contact } from '@/app/components/contact'
import { Footer } from '@/app/components/footer'

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Services />
      <HowItWorks />
      <Projects />
      <Stats />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}

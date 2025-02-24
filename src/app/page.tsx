import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Textarea } from "@/app/components/ui/textarea"
import { HeroCarousel } from "./components/hero-carousel"
import { DonationForm } from "./components/donation-form"
import { Heart, Mail, MapPin, Phone, Globe, Users, Book, ArrowRight, Handshake } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Logo } from "./components/logo"
import { SectionHeader } from "./components/section-header"
import { BackgroundSection } from "./components/background-section"
import { ProjectCard } from "./components/project-card"
import { TeamCard } from "./components/team-card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <Logo src="/placeholder.svg" fallback="Genesis Global Partners" />
          <nav className="hidden gap-8 md:flex">
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#mission" className="text-sm font-medium transition-colors hover:text-primary">
              Mission
            </Link>
            <Link href="#impact" className="text-sm font-medium transition-colors hover:text-primary">
              Impact
            </Link>
            <Link href="#donate" className="text-sm font-medium transition-colors hover:text-primary">
              Donate
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button className="hidden md:inline-flex" size="lg">
            Donate Now
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <HeroCarousel />
        <section id="about" className="py-24 md:py-32">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-6">
                <SectionHeader
                  title="About Us"
                  subtitle="Genesis Global Partners is dedicated to creating lasting change in communities around the world. Through our innovative programs and partnerships, we work tirelessly to address critical challenges and empower individuals to build better futures."
                />
                <div className="flex flex-col gap-4">
                  <div className="flex items-start space-x-4">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <Heart className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Community First</h3>
                      <p className="text-muted-foreground">We put communities at the heart of everything we do</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Global Impact</h3>
                      <p className="text-muted-foreground">Creating positive change across borders</p>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
              <div className="grid gap-4 lg:grid-cols-2">
                <div className="grid gap-4">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <Image
                      alt="Community Work"
                      className="object-cover"
                      height="300"
                      src="/placeholder.svg"
                      width="400"
                    />
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <Image
                      alt="Global Impact"
                      className="object-cover"
                      height="300"
                      src="/placeholder.svg"
                      width="400"
                    />
                  </div>
                </div>
                <div className="relative aspect-square overflow-hidden rounded-xl lg:aspect-auto">
                  <Image alt="Our Mission" className="object-cover" fill src="/placeholder.svg" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="mission" className="bg-muted py-16 md:py-24">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square">
                <Image alt="Mission Image" className="object-cover" height="600" src="/placeholder.svg" width="600" />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Mission & Vision</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold">Mission</h3>
                    <p className="text-muted-foreground">
                      To empower communities through sustainable development and innovative solutions that create
                      lasting positive change.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Vision</h3>
                    <p className="text-muted-foreground">
                      A world where every community has the resources and opportunities to thrive and prosper.
                    </p>
                  </div>
                </div>
                <Button size="lg">Learn More</Button>
              </div>
            </div>
          </div>
        </section>

        <BackgroundSection imageUrl="/placeholder.svg" className="py-24 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm text-primary backdrop-blur">
                Why Partner With Us
              </span>
              <h2 className="mt-6 text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                Making a Difference Together
              </h2>
              <p className="mt-4 text-xl text-white/80">
                Join us in our mission to create lasting change and empower communities worldwide
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <ProjectCard
                title="Education Initiative"
                description="Providing quality education and learning resources to underprivileged communities."
                image="/placeholder.svg"
                icon={<Book className="h-6 w-6 text-primary" />}
              />
              <ProjectCard
                title="Healthcare Access"
                description="Improving access to healthcare services in remote and underserved areas."
                image="/placeholder.svg"
                icon={<Heart className="h-6 w-6 text-primary" />}
              />
              <ProjectCard
                title="Community Development"
                description="Building sustainable infrastructure and empowering local communities."
                image="/placeholder.svg"
                icon={<Users className="h-6 w-6 text-primary" />}
              />
              <ProjectCard
                title="Global Outreach"
                description="Extending our impact through international partnerships and programs."
                image="/placeholder.svg"
                icon={<Globe className="h-6 w-6 text-primary" />}
              />
            </div>
          </div>
        </BackgroundSection>

        <section id="donate" className="relative overflow-hidden py-24 md:py-32">
          <div className="container relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-6">
                <span className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm text-primary">
                  Partner With Us
                </span>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Your Support Makes a Difference
                </h2>
                <p className="text-xl text-muted-foreground">
                  Join us in our mission to create lasting change. Every contribution helps us reach more communities
                  and make a bigger impact.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Handshake className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Trusted Partnership</h3>
                      <p className="text-muted-foreground">100% of your donation goes directly to our programs</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Global Impact</h3>
                      <p className="text-muted-foreground">Supporting communities in over 50 countries</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -right-4 top-0 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
                <div className="relative rounded-xl border bg-background/60 p-8 backdrop-blur">
                  <DonationForm />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-muted/50" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </section>

        <section id="team" className="py-24 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm text-primary">Our Team</span>
              <h2 className="mt-6 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Volunteers</h2>
              <p className="mt-4 text-xl text-muted-foreground">
                Dedicated individuals working together to make a difference in communities worldwide
              </p>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <TeamCard
                image="/placeholder.svg"
                name="Sarah Johnson"
                role="Community Outreach Director"
                linkedin="#"
                twitter="#"
              />
              <TeamCard
                image="/placeholder.svg"
                name="Michael Chen"
                role="Education Program Lead"
                linkedin="#"
                twitter="#"
              />
              <TeamCard
                image="/placeholder.svg"
                name="Aisha Patel"
                role="Healthcare Initiative Coordinator"
                linkedin="#"
                twitter="#"
              />
              <TeamCard
                image="/placeholder.svg"
                name="David Kim"
                role="Global Partnerships Manager"
                linkedin="#"
                twitter="#"
              />
              <TeamCard
                image="/placeholder.svg"
                name="Maria Rodriguez"
                role="Volunteer Coordinator"
                linkedin="#"
                twitter="#"
              />
              <TeamCard
                image="/placeholder.svg"
                name="John Smith"
                role="Project Development Lead"
                linkedin="#"
                twitter="#"
              />
            </div>
          </div>
        </section>

        <BackgroundSection imageUrl="/placeholder.svg" className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                Ready to Make a Difference?
              </h2>
              <p className="mt-4 text-xl text-white/80">
                Join us in our mission to create lasting change and empower communities worldwide
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Donate Now
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </BackgroundSection>

        <section id="impact" className="relative overflow-hidden bg-muted py-24 md:py-32">
          <div className="absolute inset-0 bg-primary/5" />
          <div className="container relative">
            <SectionHeader
              title="Our Impact"
              subtitle="Through dedication and partnership, we've achieved meaningful results that transform lives and communities."
              centered
            />
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="relative overflow-hidden rounded-lg border bg-background p-8">
                <div className="absolute right-0 top-0 h-16 w-16 translate-x-1/2 -translate-y-1/2 bg-primary/10 rounded-full" />
                <Heart className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-2xl font-bold">1M+</h3>
                <p className="text-muted-foreground">Lives Impacted</p>
                <div className="mt-4">
                  <Image
                    src="/placeholder.svg"
                    alt="Impact Visual"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg border bg-background p-8">
                <div className="absolute right-0 top-0 h-16 w-16 translate-x-1/2 -translate-y-1/2 bg-primary/10 rounded-full" />
                <MapPin className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-2xl font-bold">50+</h3>
                <p className="text-muted-foreground">Countries Reached</p>
                <div className="mt-4">
                  <Image
                    src="/placeholder.svg"
                    alt="Global Reach"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg border bg-background p-8">
                <div className="absolute right-0 top-0 h-16 w-16 translate-x-1/2 -translate-y-1/2 bg-primary/10 rounded-full" />
                <Users className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-2xl font-bold">100+</h3>
                <p className="text-muted-foreground">Active Projects</p>
                <div className="mt-4">
                  <Image
                    src="/placeholder.svg"
                    alt="Project Visual"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="py-16 md:py-24">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <span>contact@genesisglobal.org</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-primary" />
                    <span>+234 123 456 7890</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-primary" />
                    <span>Lagos, Nigeria</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input placeholder="Name" />
                  <Input placeholder="Email" type="email" />
                </div>
                <Input placeholder="Subject" />
                <Textarea className="min-h-[150px]" placeholder="Message" />
                <Button className="w-full" size="lg">
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-muted">
        <div className="container py-8 md:py-12">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Genesis Global Partners</h3>
              <p className="text-sm text-muted-foreground">
                Making a difference in communities worldwide through sustainable development and innovative solutions.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#about" className="hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#mission" className="hover:text-primary">
                    Mission & Vision
                  </Link>
                </li>
                <li>
                  <Link href="#donate" className="hover:text-primary">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Connect</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-primary">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Newsletter</h3>
              <form className="flex space-x-2">
                <Input placeholder="Enter your email" type="email" />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Genesis Global Partners. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
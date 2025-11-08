"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroImages = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8.1%20Housing%20Projects-Mx1k1bsK3gVA8JX8vCSKv62oMbvR03.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.1%20TIS%20Projects-I0eCBSAik05MvMU5HBOTRW0Cc8mP0n.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6.2%20Pre-Cast%20Projects-nIq7Uf2GuIOe5rNV6XsenyIsZ1HoNh.jpg",
  ]

  const services = [
    { title: "Infrastructure Projects", icon: "🏗️" },
    { title: "Roads & Highways", icon: "🛣️" },
    { title: "Transportation", icon: "🚗" },
    { title: "Facilities", icon: "🏢" },
    { title: "BIM Support", icon: "📐" },
  ]

  const coreValues = [
    { title: "Quality", desc: "Excellence in every project" },
    { title: "Integrity", desc: "Honest and transparent practices" },
    { title: "Innovation", desc: "Cutting-edge solutions" },
    { title: "Commitment", desc: "Dedicated to success" },
    { title: "Value", desc: "Cost-effective delivery" },
  ]

  const clients = [
    "CDM Smith Inc.",
    "Vision Nine Consultancy (VNC)",
    "Al Turath Engineering Consultants",
    "Khatib & Al Alami",
    "Finite Engineering Pvt. Ltd",
  ]

  const featuredProjects = [
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.1%20TIS%20Projects-I0eCBSAik05MvMU5HBOTRW0Cc8mP0n.jpg",
      title: "TIS Projects",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6.2%20Pre-Cast%20Projects-nIq7Uf2GuIOe5rNV6XsenyIsZ1HoNh.jpg",
      title: "Pre-Cast Projects",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8.1%20Housing%20Projects-Mx1k1bsK3gVA8JX8vCSKv62oMbvR03.jpg",
      title: "Housing Projects",
    },
  ]

  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative h-[500px] md:h-[600px] overflow-hidden">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}

          {/* Hero Content */}
          <div className="relative h-full flex flex-col justify-center items-center text-center px-6 z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-2xl">
              High-Quality CAD & BIM Solutions for Infrastructure Projects
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
              Delivering accuracy, coordination, and efficiency from concept to construction
            </p>
            <Link href="/services" className="btn-primary">
              Our Services
            </Link>
          </div>

          {/* Slider Controls */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1))}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 p-2 rounded text-white transition"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1))}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 p-2 rounded text-white transition"
          >
            <ChevronRight size={24} />
          </button>
        </section>

        {/* Services Overview */}
        <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#222222] text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-[#f7f7f7] p-8 rounded text-center hover:shadow-lg transition">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-[#222222]">{service.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* About Snippet */}
        <section className="py-16 md:py-24 px-6 bg-[#f7f7f7]">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-6">About BIMCAD</h2>
              <p className="text-[#666666] leading-relaxed mb-6">
                BIMCAD Engineering Partners is a multidisciplinary design and engineering service provider, established
                in 2019. We specialize in high-quality CAD drafting and Building Information Modeling (BIM) solutions
                for infrastructure projects. Our team of experienced professionals is dedicated to delivering
                innovative, accurate, and cost-effective engineering solutions from concept to construction.
              </p>
              <Link href="/about" className="btn-primary inline-block">
                Learn More About Us
              </Link>
            </div>
            <div className="aspect-video bg-gray-300 rounded overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.4%20Infrastructure%20Projects-O7xwP2WKO7SYJHDARcXhs77Uhlr9dE.jpg"
                alt="About BIMCAD"
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#222222] text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="group cursor-pointer overflow-hidden rounded">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    priority={index === 0}
                  />
                </div>
                <div className="p-6 bg-[#f7f7f7]">
                  <h3 className="text-lg font-semibold text-[#222222]">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/projects" className="btn-secondary">
              View All Projects
            </Link>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 md:py-24 px-6 bg-[#f7f7f7]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#222222] text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-5 gap-6">
              {coreValues.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded shadow-sm">
                  <h3 className="text-xl font-bold text-[#222222] mb-2">{value.title}</h3>
                  <p className="text-[#666666] text-sm">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients Carousel */}
        <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#222222] text-center mb-12">Our Valued Clients</h2>
          <div className="bg-[#f7f7f7] p-8 rounded">
            <div className="flex flex-wrap justify-center gap-8">
              {clients.map((client, index) => (
                <div key={index} className="text-center">
                  <p className="font-semibold text-[#222222]">{client}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-6 bg-[#222222]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Your Trusted Global Partner in Digital Design
            </h2>
            <Link
              href="/contact"
              className="px-8 py-3 bg-white text-[#222222] font-semibold rounded hover:bg-gray-100 transition inline-block"
            >
              Contact Us Today
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

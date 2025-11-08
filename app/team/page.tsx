"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Team() {
  const teamMembers = [
    {
      name: "Sheikh Muhammad Asif",
      position: "Director",
    },
    {
      name: "Zafar Iqbal",
      position: "Estimation Specialist",
    },
    {
      name: "Amar Khalid",
      position: "Geometric Design Expert",
    },
    {
      name: "Iftikhar Ahmed",
      position: "BIM/CAD Specialist",
    },
    {
      name: "Shajeel Shahzad",
      position: "CAD/Civil 3D Expert",
    },
    {
      name: "Sajid Ali",
      position: "BIM Modeler/CAD",
    },
  ]

  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-6 bg-[#f7f7f7]">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#222222] mb-6">Meet Our Core Team</h1>
            <p className="text-lg text-[#666666] max-w-2xl mx-auto">
              Our experienced professionals are dedicated to delivering excellence in every project
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-[#f7f7f7] p-8 rounded text-center hover:shadow-lg transition">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-6" />
                <h3 className="text-xl font-bold text-[#222222] mb-2">{member.name}</h3>
                <p className="text-[#666666] font-medium">{member.position}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

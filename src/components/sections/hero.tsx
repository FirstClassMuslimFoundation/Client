"use client";

import { Container } from "@/components/Container";
import { FadeIn } from "../uis/FadeIn";
import Link from "next/link";

import {
  BookOpen,
  Users,
  Heart,
  Info,
  ChevronLeft,
  ChevronRight,
  Calendar,
  CheckCircle,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const slides = [
  {
    title: "FCM Foundation Board Scholarship",
    description:
      "The FCM Foundation Board Scholarship empowers the next generation of female leaders by supporting female undergraduates in selected public universities across Nigeria. This scholarship program aims to uplift and provide opportunities for young Muslim women to excel academically and professionally.",
    status: "Ongoing",
    image: "/images/boardScholars.png",
    eligibility: [
      "Muslim youth aged 13-21",
      "Committed to personal growth",
      "Willing to meet regularly with a mentor",
      "Parental consent required for minors",
    ],
    deadline: "Rolling applications",
    link: "programs/fbs",
  },
  {
    title: "STUDENTS’ MENTORSHIP PROGRAMME 2024",
    description:
      "Students’ Mentorship Programme is specially planned to drive undergraduate students towards academic excellence and future career fulfilment. The programme aims to create a supportive and enriching environment for students by exposing them to experienced mentors and experts who can provide guidance, and encouragement as they navigate their academic and professional journeys.",
    status: "Past",
    image: "/images/mentorship.png",
    eligibility: [
      "Undergraduate student at state and federal universities within Lagos State",
      "Must have a minimum CGPA of 4.0 out of 5.0 or equivalence",
    ],
    deadline: "N/A",
    link: "#",
  },
];

const trustees = [
  {
    name: "Dr. Aisha Rahman",
    role: "Chairperson",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Dr. Rahman is a renowned Islamic scholar with over 20 years of experience in community leadership.",
  },
  {
    name: "Yusuf Abdullah",
    role: "Vice Chairperson",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Mr. Abdullah is a successful entrepreneur and philanthropist, dedicated to empowering Muslim youth.",
  },
  {
    name: "Maryam Hassan",
    role: "Secretary",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Ms. Hassan is a civil rights attorney and advocate for Muslim representation in public service.",
  },
  {
    name: "Ibrahim Malik",
    role: "Treasurer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Mr. Malik is a certified public accountant with extensive experience in non-profit financial management.",
  },
];

export const HomeHero = () => {
  // Move useState hook inside the HomeHero component
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="hero-container">
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-purple-600 font-semibold tracking-tight text-purple-950 text-balance sm:text-7xl">
            Welcome to The First Class Muslim Foundation
          </h1>
          <p className="mt-6 text-xl text-purple-600 text-balance">
            Empowering excellence through faith-based initiatives, nurturing
            talent, and building a strong, unified community.
          </p>
        </FadeIn>
      </Container>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Our Programs and Initiatives
          </h2>
          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden rounded-lg bg-white shadow-lg">
              <div className="flex flex-col md:flex-row">
                <div className="p-6 md:p-8 md:w-1/2 flex flex-col">
                  <div className="mb-4">
                    <span className="inline-block bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">
                      {slides[currentSlide].status}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    {slides[currentSlide].title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {slides[currentSlide].description}
                  </p>
                  <div className="space-y-6 flex-grow">
                    <div>
                      <h4 className="text-lg font-semibold mb-2 flex items-center">
                        <CheckCircle className="h-5 w-5 text-purple-600 mr-2" />
                        Eligibility Criteria
                      </h4>
                      <ul className="list-disc pl-6 space-y-2">
                        {slides[currentSlide].eligibility.map(
                          (criterion, index) => (
                            <li key={index} className="text-sm text-gray-600">
                              {criterion}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-purple-600 mr-2" />
                      <span className="text-sm font-medium">
                        Deadline: {slides[currentSlide].deadline}
                      </span>
                    </div>
                    <div className="flex items-start">
                      <Info className="h-5 w-5 text-purple-600 mr-2 mt-0.5" />
                      <p className="text-sm text-gray-600">
                        NB: Only shortlisted applicants will be contacted.
                      </p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Link href={slides[currentSlide].link}>
                      <Button className="w-full sm:w-auto bg-purple-600 text-white hover:bg-purple-700">
                        Apply Now
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <Image
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 border-purple-600 text-purple-600 hover:bg-purple-100"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous slide</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 border-purple-600 text-purple-600 hover:bg-purple-100"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next slide</span>
            </Button>
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? "bg-purple-600" : "bg-gray-300"
                }`}
                onClick={() => setCurrentSlide(index)}
              >
                <span className="sr-only">Slide {index + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Our Focus Areas
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <BookOpen className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Islamic Education</h3>
              <p className="text-gray-600">
                Providing quality Islamic education to Muslims of all ages.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Community Service</h3>
              <p className="text-gray-600">
                Organizing initiatives to serve and uplift our local
                communities.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Heart className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Spiritual Growth</h3>
              <p className="text-gray-600">
                Fostering an environment for personal and spiritual development.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-50">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-purple-800">
            Board of Trustees
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {trustees.map((trustee, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 ease-in-out hover:scale-105"
              >
                <div className="relative w-40 h-40 mb-6">
                  <Image
                    src={trustee.image}
                    alt={trustee.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full border-4 border-purple-200"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-purple-800">
                  {trustee.name}
                </h3>
                <p className="text-purple-600 font-medium mb-3">
                  {trustee.role}
                </p>
                <p className="text-gray-600 text-sm mb-6">{trustee.bio}</p>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="text-purple-600 hover:text-purple-800 transition-colors duration-300"
                  >
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a
                    href="#"
                    className="text-purple-600 hover:text-purple-800 transition-colors duration-300"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a
                    href="#"
                    className="text-purple-600 hover:text-purple-800 transition-colors duration-300"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

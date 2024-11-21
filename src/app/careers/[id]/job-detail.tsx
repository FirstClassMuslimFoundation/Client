"use client";

import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { jobListings } from "@/data/jobListings";
import { useParams } from "next/navigation";
import { FadeIn } from "@/components/uis/FadeIn";
import EmbeddedForm from "@/components/sections/iform";

import {
  CalendarIcon,
  MapPinIcon,
  BriefcaseIcon,
  ClockIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const JobDetail = () => {
  const params = useParams();
  const job = jobListings.find((j) => j.id === params.id);

  if (!job) {
    return <div>Job not found</div>;
  }

  const handleApply = () => {
    const subject = encodeURIComponent(`Application for ${job.title}`);
    const body = encodeURIComponent(
      `Dear Hiring Manager,\n\nI am writing to apply for the position of ${job.title}.\n\nPlease find my CV and cover letter attached.\n\nBest regards,`
    );
    window.location.href = `mailto:${job.applicationEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <Container className="mt-24 sm:mt-32 md:mt-40 mb-32">
      <FadeIn>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-8 mb-8 text-white shadow-lg">
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              {job.title}
            </h1>
            <div className="flex flex-wrap gap-4">
              <Badge variant="secondary" className="text-sm py-1 px-3">
                <MapPinIcon className="w-4 h-4 mr-2" />
                {job.location}
              </Badge>
              <Badge variant="secondary" className="text-sm py-1 px-3">
                <BriefcaseIcon className="w-4 h-4 mr-2" />
                {job.type}
              </Badge>
              <Badge variant="secondary" className="text-sm py-1 px-3">
                <ClockIcon className="w-4 h-4 mr-2" />
                {job.mode}
              </Badge>
            </div>
          </div>

          <div className="grid gap-8">
            <Card className="overflow-hidden">
              <CardHeader className="bg-purple-50">
                <CardTitle className="text-purple-900">
                  Key Information
                </CardTitle>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-2 gap-6 pt-6">
                <div>
                  <p className="text-sm font-medium text-purple-600 mb-1">
                    Location
                  </p>
                  <p className="text-lg">{job.location}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-purple-600 mb-1">
                    Type
                  </p>
                  <p className="text-lg">{job.type}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-purple-600 mb-1">
                    Mode
                  </p>
                  <p className="text-lg">{job.mode}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-purple-600 mb-1">
                    Application Deadline
                  </p>
                  <p className="text-lg flex items-center">
                    <CalendarIcon className="w-5 h-5 mr-2 text-purple-600" />
                    {job.deadline}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-purple-50">
                <CardTitle className="text-purple-900">
                  Job Description
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 leading-relaxed">
                  {job.description}
                </p>
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-2 gap-8">
              <Card>
                <CardHeader className="bg-purple-50">
                  <CardTitle className="text-purple-900">
                    Responsibilities
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {job.responsibilities.map((resp, index) => (
                      <li key={index} className="flex items-start">
                        <span className="bg-purple-100 text-purple-600 rounded-full p-1 mr-3 mt-1">
                          <svg
                            className="w-3 h-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="text-gray-700">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-purple-50">
                  <CardTitle className="text-purple-900">
                    Qualifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {job.qualifications.map((qual, index) => (
                      <li key={index} className="flex items-start">
                        <span className="bg-purple-100 text-purple-600 rounded-full p-1 mr-3 mt-1">
                          <svg
                            className="w-3 h-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="text-gray-700">{qual}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {job.isActive && (
              <div className="mt-8">
                <Separator className="my-8" />
                <div className="flex flex-col items-center">
                  <h2 className="text-2xl font-semibold text-purple-900 mb-4">
                    Ready to Apply?
                  </h2>
                  <div className="overflow-y-auto mt-8 mb-9">
                    <EmbeddedForm link={job.applicationLink} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </FadeIn>
    </Container>
  );
};

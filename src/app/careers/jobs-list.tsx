"use client";

import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { jobListings } from "@/data/jobListings";
import { useRouter } from "next/navigation";
import {
  MapPinIcon,
  BriefcaseIcon,
  ClockIcon,
  CalendarIcon,
} from "lucide-react";
import { FadeIn } from "@/components/uis/FadeIn";

export const JobsList = () => {
  const router = useRouter();

  return (
    <Container className="mt-16 mb-32">
      <FadeIn>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {jobListings.map((job) => (
            <Card
              key={job.id}
              className="border-gray-200 hover:border-purple-300 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-semibold text-purple-900">
                    {job.title}
                  </CardTitle>
                  <Badge
                    variant={job.isActive ? "secondary" : "secondary"}
                    className="ml-2"
                  >
                    {job.isActive ? "Active" : "Closed"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <MapPinIcon className="w-4 h-4 mr-2" />
                    <p className="text-sm">{job.location}</p>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <BriefcaseIcon className="w-4 h-4 mr-2" />
                    <p className="text-sm">{job.type}</p>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <ClockIcon className="w-4 h-4 mr-2" />
                    <p className="text-sm">{job.mode}</p>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    <p className="text-sm">Apply by: {job.deadline}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-4">
                <Button
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-300"
                  onClick={() => router.push(`/careers/${job.id}`)}
                >
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </FadeIn>
    </Container>
  );
};

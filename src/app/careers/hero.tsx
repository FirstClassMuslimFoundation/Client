import { Container } from "@/components/Container";
import { FadeIn } from "@/components/uis/FadeIn";
import { ArrowDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CareersHero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-white">
      <Container className="relative z-10 pt-20 pb-12 md:pt-28 md:pb-16">
        <FadeIn className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight text-purple-950 sm:text-6xl md:text-7xl">
            <span className="relative whitespace-nowrap">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute left-0 top-2/3 h-[0.58em] w-full fill-purple-300/70"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
              <span className="relative">Join Our Impact Journey</span>
            </span>
          </h1>
          <p className="mt-6 text-xl text-purple-700 leading-8">
            Be a part of our mission to make a difference. Explore our exciting
            career opportunities and help us shape the future.
          </p>
          <div className="mt-8">
            <Button
              variant="default"
              size="lg"
              className="group bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              View Open Positions
              <ArrowDownIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
            </Button>
          </div>
        </FadeIn>
      </Container>
      <div
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] flex-none bg-gradient-to-tr from-purple-300 to-purple-400 opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
};

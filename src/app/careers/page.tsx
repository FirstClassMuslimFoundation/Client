import { BackgroundBeams } from "@/components/ui/background-beams";
import { CareersHero } from "./hero";
import  {JobsList} from "./jobs-list";

export default function Careers() {
  return (
    <main>
      <CareersHero />
      <JobsList />
      <BackgroundBeams />
    </main>
  );
}
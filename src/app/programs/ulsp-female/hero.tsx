import { Container } from "@/components/Container";
import EmbeddedForm from "@/components/sections/iform";
import { FadeIn } from "@/components/uis/FadeIn";
let link = `https://zfrmz.com/YL2Twvqurqfbl1XWhnhN`;

export const FBS = () => {
  return (
    <div className="hero-container">
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-purple-600 font-semibold tracking-tight text-purple-950 text-balance sm:text-7xl">
            Undergraduate Learning Support Programme (Female) 2025
          </h1>
          <p className="mt-6 text-xl text-purple-600 text-balance">
            Undergraduate Learning Support Programme (Female) is a scholarship
            and mentorship programme for female Muslim undergraduate students
            who demonstrates excellent academic abilities. The programme
            provides Islamic mentorship as well as academic support, in the form
            of stipends, to selected scholars in a bid to enhance the building
            of academically excellent students with good Islamic and moral
            background.
          </p>
        </FadeIn>
      </Container>
      <div className="overflow-y-auto mt-8 mb-96">
        <EmbeddedForm link={link} />
      </div>
    </div>
  );
};

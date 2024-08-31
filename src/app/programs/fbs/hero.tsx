import { Container } from "@/components/Container";
import EmbeddedForm from "@/components/sections/iform";
import { FadeIn } from "@/components/uis/FadeIn";
let link = `https://zfrmz.com/iUIzXj659Sb6CrZFBPyO`;

export const FBS = () => {
  return (
    <div className="hero-container">
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-purple-600 font-semibold tracking-tight text-purple-950 text-balance sm:text-7xl">
            FCM Foundation Board Scholarship (FBS)
          </h1>
          <p className="mt-6 text-xl text-purple-600 text-balance">
            FCM Foundation Board scholarship is a scholarship and mentorship
            programme for female Muslim undergraduates in sophomore or
            penultimate years. The scholarship includes one-time monetary
            support and a one-day mentorship session for selected scholars.
          </p>
        </FadeIn>
      </Container>
      <div className="overflow-y-auto mt-8 mb-96">
        <EmbeddedForm link={link} />
      </div>
    </div>
  );
};

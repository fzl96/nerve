import { Container, Main, Section } from "@/components/craft";
import CTA from "@/components/homepage/cta";
import FeatureSet from "@/components/homepage/feature-set";
import Footer from "@/components/homepage/footer";
import Hero from "@/components/homepage/hero";

export default function Home() {
  return (
    <Main>
      <Section>
        <Container>
          <Hero />
          <FeatureSet />
          <CTA />
          <Footer />
        </Container>
      </Section>
    </Main>
  );
}

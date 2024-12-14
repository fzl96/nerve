// React and Next.js imports
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// UI component imports
import { Button } from "@/components/ui/button";

// Custom components
import { Section, Container } from "@/components/craft";

const CTA = () => {
  return (
    <Section className="px-4">
      <Container className="flex flex-col items-center gap-6 rounded-lg border bg-accent/50 p-6 text-center md:rounded-xl md:p-12">
        <h2 className="!my-0">Siap untuk Memulai?</h2>
        <h3 className="!mb-0 text-muted-foreground">
          <Balancer>
            Dapatkan analisis untuk membantu Anda memahami kondisi Anda. Mulai
            sekarang dan ambil langkah pertama menuju solusi.
          </Balancer>
        </h3>
        <div className="not-prose mx-auto flex items-center gap-2">
          <Button className="w-fit" asChild>
            <Link href="/diagnosa">Mulai Diagnosa</Link>
          </Button>
          <Button className="w-fit" variant="link" asChild>
            <Link href="#">Selengkapnya</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default CTA;

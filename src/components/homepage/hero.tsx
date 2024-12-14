// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { ArrowRight } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

import Placeholder from "../../../public/hand.webp";

const Hero = () => {
  return (
    <Section>
      <Container>
        <div>
          <Button
            asChild
            className="mb-6 w-fit"
            size={"sm"}
            variant={"outline"}
          >
            <span className="not-prose">
              Sistem Pakar Carpal Tunnel Syndrome
            </span>
          </Button>
          <h1>
            <Balancer>
              Kenali Gejala Carpal Tunnel Syndrome Lebih Cepat
            </Balancer>
          </h1>
          <h3 className="text-muted-foreground">
            <Balancer>
              Dengan sistem pakar kami, Anda dapat mendeteksi potensi Carpal
              Tunnel Syndrome lebih dini dan mendapatkan saran yang tepat untuk
              langkah selanjutnya.
            </Balancer>
          </h3>
          <Link className={cn(buttonVariants())} href="/diagnosa">
            <span className="text-primary-foreground flex gap-2 items-center">
              Diagnosa <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
          <div className="not-prose my-8 h-96 w-full overflow-hidden rounded-lg border md:h-[500px] md:rounded-xl">
            <Image
              className="h-full w-full object-cover object-bottom"
              src={Placeholder}
              width={1920}
              height={1080}
              alt="hero image"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;

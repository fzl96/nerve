// Layout
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import Link from "next/link";

// Icons
import { Coins, ArrowRight } from "lucide-react";

type FeatureText = {
  // @ts-expect-error jsx is not defined
  icon: JSX.Element;
  title: string;
  description: string;
  href?: string;
  cta?: string;
};

const featureText: FeatureText[] = [
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Tentang Kami",
    href: "/tentang-kami",
    description:
      "Pelajari bagaimana sistem kami membantu mendeteksi Carpal Tunnel Syndrome.",
    cta: "Selengkapnya",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Carpal Tunnel Syndrome",
    href: "/carpal-tunnel-syndrome",
    description:
      "Ketahui apa itu Carpal Tunnel Syndrome, gejala, penyebab, dan cara mencegahnya.",
    cta: "Selengkapnya",
  },
];

const FeatureSet = () => {
  return (
    <Section>
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">
            <Balancer>Jelajahi untuk memahami lebih dalam</Balancer>
          </h3>
          <h4 className="text-2xl font-light opacity-70">
            <Balancer>
              Temukan Informasi dan Panduan yang Telah Kami Siapkan untuk Anda
            </Balancer>
          </h4>

          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-2">
            {featureText.map(
              ({ icon, title, description, href, cta }, index) => (
                <Link
                  href={`${href}`}
                  className="flex flex-col justify-between gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2"
                  key={index}
                >
                  <div className="grid gap-4">
                    {icon}
                    <h4 className="text-xl text-primary">{title}</h4>
                    <p className="text-base opacity-75">{description}</p>
                  </div>
                  {cta && (
                    <div className="flex h-fit items-center text-sm font-semibold">
                      <p>{cta}</p> <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  )}
                </Link>
              ),
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default FeatureSet;

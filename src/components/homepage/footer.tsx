// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// Local component imports
import { Section, Container } from "../craft";

// Asset imports
export default function Footer() {
  return (
    <footer>
      <Section>
        <Container className="flex gap-12 md:flex-row flex-col justify-between">
          <div className="grid gap-6">
            <Link
              href="/"
              className="no-underline font-bold text-3xl border-none not-prose w-fit"
            >
              nerve.
            </Link>
            <p>
              <Balancer>
                Sistem pakar untuk mendeteksi Carpal Tunnel Syndrome
              </Balancer>
            </p>
            <p className="text-muted-foreground">
              © nerve. All rights reserved. 2024-present.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h5>Website</h5>
            <Link href="/diagnosa">Diagnosa</Link>
            <Link href="/tentang-kami">Tentang Kami</Link>
            <Link href="/carpal-tunnel-syndrome">Informasi Penyakit</Link>
          </div>
          {/* <div className="flex flex-col gap-2"> */}
          {/*   <h5>Legal</h5> */}
          {/*   <Link href="/privacy-policy">Privacy Policy</Link> */}
          {/*   <Link href="/terms-of-service">Terms of Service</Link> */}
          {/*   <Link href="/cookie-policy">Cookie Policy</Link> */}
          {/* </div> */}
        </Container>
      </Section>
    </footer>
  );
}

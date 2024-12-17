import { Container, Main, Section } from "@/components/craft";

export default function AboutUs() {
  return (
    <Main>
      <Section>
        <Container>
          <Section>
            <Container>
              <h1>Informasi Penyakit</h1>
              <h2>Apa itu Carpal Tunnel Syndrome?</h2>
              <p>
                Carpal Tunnel Syndrome (CTS) adalah kondisi yang terjadi akibat
                tekanan pada saraf median, yang berjalan melalui terowongan
                karpal di pergelangan tangan. Saraf ini bertanggung jawab untuk
                memberikan sensasi dan mengontrol sebagian gerakan di tangan,
                terutama pada ibu jari, jari telunjuk, jari tengah, dan sebagian
                jari manis.
              </p>
              <h2>Penyebab Carpal Tunnel Syndrome</h2>
              <p>
                CTS disebabkan oleh tekanan berlebihan pada saraf median, yang
                bisa dipicu oleh:
              </p>
              <ul>
                <li>
                  Gerakan Repetitif: Aktivitas seperti mengetik, menggunakan
                  mouse, atau pekerjaan manual lainnya.
                </li>
                <li>
                  Cedera atau Pembengkakan: Cedera pada pergelangan tangan atau
                  kondisi seperti arthritis.
                </li>
                <li>
                  Kehamilan: Perubahan hormonal selama kehamilan dapat
                  menyebabkan pembengkakan di terowongan karpal.
                </li>
                <li>
                  Kondisi Medis: Penyakit seperti diabetes, hipotiroidisme, atau
                  obesitas.
                </li>
              </ul>
            </Container>
          </Section>
        </Container>
      </Section>
    </Main>
  );
}

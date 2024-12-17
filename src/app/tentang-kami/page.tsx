import { Container, Main, Section } from "@/components/craft";

export default function AboutUs() {
  return (
    <Main>
      <Section>
        <Container>
          <Section>
            <Container>
              <h1>Tentang Kami</h1>
              <p>
                Aplikasi Sistem Pakar Diagnosa Penyakit Carpal Tunnel Syndrome
                Dengan Metode Forward Chaining Berbasis Web ini dibuat untuk
                memenuhi tugas akhir perkuliahan dan sebagai salah satu
                persyaratan untuk memperoleh gelar Sarjana di Program Studi
                Teknik Informatika Fakultas Teknik Universitas Riau
              </p>
              <h2>Contact</h2>
              <p className="flex flex-col">
                Nama: Encik Muhammad Surya,
                <span>
                  Email:{" "}
                  <a href="mailto:encikms18@gmail.com">encikms18@gmail.com</a>
                </span>
              </p>
            </Container>
          </Section>
        </Container>
      </Section>
    </Main>
  );
}

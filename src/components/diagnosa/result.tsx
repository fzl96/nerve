"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertTriangle, CheckCircle } from "lucide-react";

export default function Result({ score }: { score: number }) {
  const getResult = (score: number) => {
    if (score === 6) {
      return {
        title: "Terindikasi penyakit Carpal Tunnel Syndrome",
        description:
          "Berdasarkan data gejala yang telah Anda masukkan, Anda terindikasi mengalami penyakit Carpal Tunnel Syndrome.",
        icon: <AlertTriangle className="w-12 h-12 text-red-500" />,
        action: "Konsultasi dengan Dokter",
        actionText:
          "Anda disarankan untuk segera menemui dan melalukan pemeriksaan lebih lanjut dengan dokter spesialis saraf untuk menghindari semakin memburuknya gejala yang Anda alami.",
      };
    } else {
      return {
        title: "Tidak terindikasi penyakit Carpal Tunnel Syndrome",
        description:
          "Berdasarkan data gejala yang telah Anda masukkan, Anda tidak terindikasi mengalami penyakit Carpal Tunnel Syndrome.",
        icon: <CheckCircle className="w-12 h-12 text-green-500" />,
        action: "Tetap waspada",
        actionText:
          "Walaupun saat ini Anda tidak terindikasi Carpal Tunnel Syndrome, penting untuk menjaga pola hidup sehat dan menghindari aktivitas yang berisiko.",
      };
    }
  };

  const result = getResult(score);

  return (
    <div className="mt-5">
      <Card className="w-full md:border border-none md:shadow shadow-none">
        <CardHeader className="space-y-1 border-b pb-4">
          <CardTitle className="text-2xl font-bold flex items-center gap-3">
            {result.icon}
            {result.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <p className="text-lg">{result.description}</p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">
              Langkah berikutnya: {result.action}
            </h3>
            <p className="text-blue-700">{result.actionText}</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-4">
          <Link href="/">
            <Button variant="outline">Beranda</Button>
          </Link>
          <a href="/diagnosa">
            <Button>Tes Ulang</Button>
          </a>
        </CardFooter>
        <div className="px-6 pb-4"></div>
      </Card>
    </div>
  );
}

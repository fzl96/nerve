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
import { AlertTriangle, CheckCircle, Info } from "lucide-react";

export default function Result({ score }: { score: number }) {
  const getResult = (score: number) => {
    if (score >= 4) {
      return {
        title: "High likelihood of Carpal Tunnel Syndrome",
        description:
          "Based on your responses, there is a high likelihood that you may be experiencing symptoms of Carpal Tunnel Syndrome. It is strongly recommended that you consult with a healthcare professional for a proper diagnosis and treatment plan.",
        icon: <AlertTriangle className="w-12 h-12 text-red-500" />,
        action: "Consult a Doctor",
      };
    } else if (score >= 2) {
      return {
        title: "Moderate likelihood of Carpal Tunnel Syndrome",
        description:
          "Based on your responses, there is a moderate likelihood that you may be experiencing symptoms of Carpal Tunnel Syndrome. It is recommended that you monitor your symptoms and consult with a healthcare professional if they persist or worsen.",
        icon: <Info className="w-12 h-12 text-yellow-500" />,
        action: "Monitor Symptoms",
      };
    } else {
      return {
        title: "Low likelihood of Carpal Tunnel Syndrome",
        description:
          "Based on your responses, there is a low likelihood that you are experiencing Carpal Tunnel Syndrome. However, if you continue to have concerns about your symptoms, its always best to consult with a healthcare professional.",
        icon: <CheckCircle className="w-12 h-12 text-green-500" />,
        action: "Stay Vigilant",
      };
    }
  };

  const result = getResult(score);

  return (
    <div className="min-h-screen flex items-center justify-center py-8">
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
              Next Steps: {result.action}
            </h3>
            <p className="text-blue-700">
              Remember, this assessment is not a definitive diagnosis. Carpal
              Tunnel Syndrome can only be properly diagnosed by a healthcare
              professional through a combination of physical examination,
              medical history, and potentially additional tests.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Additional Resources:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>
                National Institute of Neurological Disorders and Stroke - Carpal
                Tunnel Syndrome Information Page
              </li>
              <li>
                American Academy of Orthopaedic Surgeons - Carpal Tunnel
                Syndrome
              </li>
              <li>Mayo Clinic - Carpal Tunnel Syndrome</li>
            </ul>
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
        <div className="px-6 pb-4">
          <p className="text-sm text-gray-500">
            This assessment is for informational purposes only and does not
            constitute medical advice. Always consult with a qualified
            healthcare provider for proper diagnosis and treatment.
          </p>
        </div>
      </Card>
    </div>
  );
}

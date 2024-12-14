"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ChevronLeft, ChevronRight, Loader } from "lucide-react";
import { questions } from "@/lib/questions";
import Result from "./result";

export function Questionnaire() {
  const [questionnaireMode, setQuestionnaireMode] = useState(true);
  const [loading, setLoading] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const score = Object.values(answers).filter(
    (answer) => answer === "yes",
  ).length;

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: value });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      if (currentQuestion !== 3) {
        setCurrentQuestion(currentQuestion + 1);
        return;
      }
      if (score < 4) {
        handleShowResult();
        return;
      }
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleShowResult();
    }
  };

  const handleShowResult = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setQuestionnaireMode(false);
    }, 500);
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  if (!questionnaireMode && !loading) {
    return (
      <div>
        <Result score={score} />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="grid place-items-center mt-10 h-[50vh]">
        <Loader className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className=" flex justify-center mt-10">
      <Card className="w-full md:border md:shadow shadow-none border-none">
        <CardHeader className="space-y-1 border-b pb-4">
          <CardTitle className="text-2xl font-bold">Diagnosa</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <p className="text-lg font-medium">
                  {questions[currentQuestion].text}
                </p>
                <p className="text-sm text-gray-600">
                  {questions[currentQuestion].description}
                </p>
              </div>
            </div>
            <RadioGroup
              onValueChange={handleAnswer}
              value={answers[questions[currentQuestion].id] || ""}
              className="space-y-3"
            >
              <div className="flex items-center space-x-3 border rounded-lg p-4 transition-colors hover:bg-gray-50">
                <RadioGroupItem value="yes" id="yes" className="" />
                <Label htmlFor="yes" className="flex-grow cursor-pointer">
                  Ya
                </Label>
              </div>
              <div className="flex items-center space-x-3 border rounded-lg p-4 transition-colors hover:bg-gray-50">
                <RadioGroupItem value="no" id="no" />
                <Label htmlFor="no" className="flex-grow cursor-pointer">
                  Tidak
                </Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-4">
          <Button
            onClick={handleBack}
            disabled={currentQuestion === 0}
            variant="outline"
          >
            <ChevronLeft className="mr-2 h-4 w-4" /> Kembali
          </Button>
          <Button
            onClick={handleNext}
            disabled={!answers[questions[currentQuestion].id]}
          >
            {currentQuestion === questions.length - 1
              ? "Finish"
              : "Selanjutnya"}{" "}
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

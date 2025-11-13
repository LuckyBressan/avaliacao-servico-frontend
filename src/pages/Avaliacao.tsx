import { useState } from "react";
import TelaInicial from "../components/TelaInicial";
import TelaQuestoes from "../components/TelaQuestoes";
import TelaAgradecimento from "../components/TelaAgradecimento";
import { useAvaliacaoContext } from "../providers/AvaliacaoProvider";

export default function Avaliacao() {
  const [screen, setScreen] = useState<"inicial" | "questoes" | "agradecimento">(
    "inicial"
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<Record<number, number>>({});

  const { avaliar, concluirAvaliacao, perguntas } = useAvaliacaoContext();

  const handleStartEvaluation = async () => {
    await avaliar(location.search.replace("?dispositivo=", ""));
    setScreen("questoes");
    setCurrentQuestionIndex(0);
    setResponses({});
  };

  const handleRateQuestion = (rating: number) => {
    const questionId = perguntas[currentQuestionIndex].id;
    setResponses((prev) => ({
      ...prev,
      [questionId]: rating,
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < perguntas.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setScreen("agradecimento");
    setTimeout(() => {
      setScreen("inicial");
      setCurrentQuestionIndex(0);
      setResponses({});
    }, 4000);
  };

  return (
    <>
      {screen === "inicial" && (
        <TelaInicial onStart={handleStartEvaluation} />
      )}
      {screen === "questoes" && (
        <TelaQuestoes
          question={perguntas[currentQuestionIndex]}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={perguntas.length}
          currentRating={perguntas.length ? responses[perguntas[currentQuestionIndex].id] : 1}
          onRate={handleRateQuestion}
          onNext={handleNextQuestion}
          onPrevious={handlePreviousQuestion}
          onSubmit={handleSubmit}
          isLastQuestion={currentQuestionIndex === perguntas.length - 1}
          canGoBack={currentQuestionIndex > 0}
        />
      )}
      {screen === "agradecimento" && <TelaAgradecimento />}
    </>
  );
}

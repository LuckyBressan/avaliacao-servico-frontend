import { useState } from "react";
import TelaInicial from "../components/TelaInicial";
import TelaQuestoes from "../components/TelaQuestoes";
import TelaAgradecimento from "../components/TelaAgradecimento";
import { useAvaliacaoContext } from "../providers/AvaliacaoProvider";
import type { Resposta } from "../@types/Resposta";
import TelaErro from "../components/TelaErro";

export default function AvaliacaoPage() {
  const [screen, setScreen] = useState<"inicial" | "questoes" | "agradecimento" | "error">(
    "inicial"
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<Record<number|string, Resposta>>({});

  const { avaliar, concluirAvaliacao, perguntas } = useAvaliacaoContext();

  const handleStartEvaluation = async () => {
    await avaliar(location.search.replace("?dispositivo=", "") || '1');
    setScreen("questoes");
    setCurrentQuestionIndex(0);
    setResponses({});
  };

  const handleRateQuestion = (rating: number) => {
    const questionId = perguntas[currentQuestionIndex].id;
    const responseQuestion = responses[questionId] ?? { idPergunta: questionId };
    setResponses((prev) => ({
      ...prev,
      [questionId]: {
        ...responseQuestion,
        resposta: rating
      },
    }));
  };

  const handleFeedbackChange = (feedback: string) => {
    const questionId = perguntas[currentQuestionIndex].id;
    const responseQuestion = responses[questionId] ?? { idPergunta: questionId };
    setResponses((prev) => ({
      ...prev,
      [questionId]: {
        ...responseQuestion,
        feedbackTextual: feedback
      }
    }));
  }

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
    //request para concluir avaliação
    const { data } = await concluirAvaliacao(
      responses,
      location.search.replace("?dispositivo=", "") || '1'
    );
    if( data.code && data.code !== 200 ) {
      console.error("Erro ao enviar avaliação:", data);
      setScreen("error");
    } else {
      //volta para a tela inicial ao fim da request
      setScreen("inicial");
    }
    setCurrentQuestionIndex(0);
    setResponses({});
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
          currentRating={
              perguntas.length
                ? responses[perguntas[currentQuestionIndex].id]?.resposta
                : 1
            }
          onRate={handleRateQuestion}
          onNext={handleNextQuestion}
          onPrevious={handlePreviousQuestion}
          onSubmit={handleSubmit}
          isLastQuestion={currentQuestionIndex === perguntas.length - 1}
          canGoBack={currentQuestionIndex > 0}
          onFeedbackChange={handleFeedbackChange}
        />
      )}
      {screen === "agradecimento" && <TelaAgradecimento />}
      {screen === "error" && <TelaErro />}
    </>
  );
}

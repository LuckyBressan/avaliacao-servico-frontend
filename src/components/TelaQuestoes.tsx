import type { Pergunta } from "../@types/Pergunta"

interface TelaQuestoesProps {
  question: Pergunta
  questionNumber: number
  totalQuestions: number
  currentRating?: number
  onRate: (rating: number) => void
  onNext: () => void
  onPrevious: () => void
  onSubmit: () => void
  isLastQuestion: boolean
  canGoBack: boolean
  onFeedbackChange?: (feedback: string) => void
  currentFeedback?: string
}

export default function TelaQuestoes({
  question,
  questionNumber,
  totalQuestions,
  currentRating,
  onRate,
  onNext,
  onPrevious,
  onSubmit,
  isLastQuestion,
  canGoBack,
  onFeedbackChange,
  currentFeedback,
}: TelaQuestoesProps) {
  const ratings = Array.from({ length: 11 }, (_, i) => i)

  const getColorForRating = (rating: number): string => {
    if (rating <= 5) {
      const ratio = rating / 5
      const r = 255
      const g = Math.round(165 * ratio)
      const b = 0
      return `rgb(${r}, ${g}, ${b})`
    } else {
      const ratio = (rating - 5) / 5
      const r = Math.round(255 * (1 - ratio))
      const g = 255
      const b = 0
      return `rgb(${r}, ${g}, ${b})`
    }
  }

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-8 px-8">
      <div className="text-xs text-muted-foreground tracking-widest mb-4">
        {questionNumber} / {totalQuestions}
      </div>
      <h1 className="text-4xl font-light text-center max-w-2xl leading-relaxed">{question.texto}</h1>
      <div className="flex gap-3 justify-center flex-wrap max-w-3xl my-8">
        {ratings.map((rating) => (
          <button
            key={rating}
            onClick={() => onRate(rating)}
            className={`w-14 h-14 rounded-lg font-light transition-all text-white ${
              currentRating === rating ? "scale-110 ring-4 ring-foreground" : "hover:opacity-80"
            }`}
            style={{
              backgroundColor: getColorForRating(rating),
            }}
          >
            {rating}
          </button>
        ))}
      </div>

      {isLastQuestion && (
        <textarea
          value={currentFeedback || ""}
          onChange={(e) => onFeedbackChange?.(e.target.value)}
          placeholder="Deixe seu comentário (opcional)"
          className="w-full max-w-2xl h-32 p-4 border border-border rounded-lg bg-background text-foreground font-light resize-none focus:outline-none focus:ring-2 focus:ring-accent"
        />
      )}
      <div className="flex gap-4 w-full max-w-md mt-8">
        {canGoBack ? (
          <button
            onClick={onPrevious}
            className="flex-1 py-3 px-4 border border-border rounded-lg text-foreground font-light hover:bg-secondary transition-colors"
          >
            Anterior
          </button>
        ) : (
          <div className="flex-1"></div>
        )}

        {isLastQuestion ? (
          <button
            onClick={onSubmit}
            disabled={currentRating === undefined}
            className="flex-1 py-3 px-4 bg-accent text-accent-foreground rounded-lg font-light hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
          >
            Enviar
          </button>
        ) : (
          <button
            onClick={onNext}
            disabled={currentRating === undefined}
            className="flex-1 py-3 px-4 bg-accent text-accent-foreground rounded-lg font-light hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
          >
            Próxima
          </button>
        )}
      </div>
    </div>
  )
}

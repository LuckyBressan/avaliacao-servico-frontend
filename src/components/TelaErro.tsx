interface TelaErroProps {
  onRetry?: () => void
}

export default function TelaErro({ onRetry }: TelaErroProps) {

    const handleRetry = () => {
        if( onRetry ) {
            onRetry()
        } else {
            window.location.reload()
        }
    }

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-8 px-8">
      <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center">
        <div className="text-4xl text-destructive">!</div>
      </div>

      <div className="text-center max-w-md">
        <h1 className="text-3xl font-light mb-4 leading-relaxed">Oops! Algo deu errado</h1>
        <p className="text-muted-foreground font-light leading-relaxed">
          Houve um problema ao enviar seu feedback. Por favor, tente novamente.
        </p>
      </div>

      <button
        onClick={handleRetry}
        className="cursor-pointer mt-8 px-12 py-4 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-light text-lg transition-colors"
      >
        Tentar Novamente
      </button>
    </div>
  )
}

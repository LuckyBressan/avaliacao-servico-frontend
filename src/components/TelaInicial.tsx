interface TelaInicialProps {
  onStart: () => void
}

export default function TelaInicial({ onStart }: TelaInicialProps) {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-12 px-8">
      {/* Logo placeholder */}
      <div className="w-24 h-24 rounded-lg bg-muted flex items-center justify-center">
        <div className="text-center">
          <div className="text-3xl font-light text-muted-foreground mb-2">◇</div>
          <div className="text-xs text-muted-foreground tracking-widest">LOGO</div>
        </div>
      </div>

      {/* Main button */}
      <button
        onClick={onStart}
        className="w-full max-w-xs py-6 px-8 rounded-full bg-accent text-accent-foreground font-light text-2xl tracking-wide hover:opacity-90 transition-opacity active:scale-95 transition-transform"
      >
        Iniciar Avaliação
      </button>

      {/* Optional instruction text */}
      <div className="text-center text-muted-foreground text-sm font-light tracking-wide max-w-sm">
        Sua avaliação é anônima e ajuda-nos a melhorar constantemente.
      </div>
    </div>
  )
}

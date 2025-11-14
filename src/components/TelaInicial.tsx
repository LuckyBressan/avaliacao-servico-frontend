import LogoRestaurante from "../assets/logo/LogoRestaurante"

interface TelaInicialProps {
  onStart: () => void
}

export default function TelaInicial({ onStart }: TelaInicialProps) {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-12 px-8">
      <div className="flex items-center justify-center">
        <div className="text-center">
          <LogoRestaurante className="w-36 h-36"/>
        </div>
      </div>

      <button
        onClick={onStart}
        className="cursor-pointer w-full max-w-xs py-6 px-8 rounded-full bg-accent text-accent-foreground font-light text-2xl tracking-wide hover:opacity-90 transition-opacity active:scale-95 transition-transform"
      >
        Iniciar Avaliação
      </button>

      <div className="text-center text-muted-foreground text-sm font-light tracking-wide max-w-sm">
        Sua avaliação é anônima e ajuda-nos a melhorar constantemente.
      </div>
    </div>
  )
}

export default function TelaAgradecimento() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-8 px-8">
      <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center">
        <div className="text-4xl text-accent-foreground">✓</div>
      </div>

      <div className="text-center max-w-md">
        <h1 className="text-3xl font-light mb-4 leading-relaxed">Obrigado pelo seu feedback!</h1>
        <p className="text-muted-foreground font-light leading-relaxed">Sua opinião é muito importante para nós.</p>
      </div>

      <div className="mt-8 flex gap-1">
        <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
        <div className="w-2 h-2 rounded-full bg-accent animate-pulse delay-100"></div>
        <div className="w-2 h-2 rounded-full bg-accent animate-pulse delay-200"></div>
      </div>
    </div>
  )
}

const HeroSection = () => {
  return (
    <section id="inicio" className="relative bg-[hsl(var(--primary))] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-light))] opacity-90">
        <img 
          src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1600&h=800" 
          alt="Consultório de psicologia acolhedor"
          className="object-cover w-full h-full mix-blend-overlay"
        />
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Cuide da sua saúde mental com quem entende
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8">
            Terapia personalizada para ajudar você a enfrentar desafios, superar obstáculos e viver com mais equilíbrio e bem-estar.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#contato" 
              className="bg-white text-[hsl(var(--primary))] font-medium px-8 py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300 text-center"
            >
              Agendar Consulta
            </a>
            <a 
              href="#servicos" 
              className="bg-transparent border-2 border-white text-white font-medium px-8 py-3 rounded-md hover:bg-white/10 transition-all duration-300 text-center"
            >
              Conhecer Serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

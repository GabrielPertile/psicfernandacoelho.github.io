interface Testimonial {
  text: string;
  name: string;
  role: string;
  initials: string;
  color: string;
}

const testimonials: Testimonial[] = [
  {
    text: "As sessões com a Ana me ajudaram a superar um período de ansiedade intensa que estava afetando minha vida profissional e pessoal. Hoje me sinto muito mais preparada para lidar com situações desafiadoras.",
    name: "Marina B.",
    role: "Professora, 34 anos",
    initials: "MB",
    color: "primary"
  },
  {
    text: "A terapia de casal salvou meu casamento. Aprendemos a nos comunicar melhor e a entender as necessidades um do outro. A Ana criou um ambiente seguro onde pudemos ser honestos sem medo de julgamentos.",
    name: "Roberto L.",
    role: "Engenheiro, 42 anos",
    initials: "RL",
    color: "secondary"
  },
  {
    text: "Depois de anos lutando contra a depressão, finalmente encontrei na Ana alguém que realmente me entendeu. As técnicas que aprendi nas sessões me deram ferramentas para gerenciar meus pensamentos negativos.",
    name: "Carolina S.",
    role: "Designer, 29 anos",
    initials: "CS",
    color: "accent"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-20 bg-[hsl(var(--neutral-lightest))]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[hsl(var(--secondary))] uppercase tracking-wider text-sm font-medium mb-2">
            O que dizem sobre o tratamento
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Depoimentos de <span className="text-[hsl(var(--primary))]">Pacientes</span>
          </h2>
          <p className="text-[hsl(var(--neutral-dark))]">
            Histórias reais de pessoas que transformaram suas vidas através da terapia. Por razões de confidencialidade, nomes foram alterados.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8 relative testimonial-card transition-all duration-300">
              <div className="text-[hsl(var(--primary))] text-5xl absolute -top-4 left-6">"</div>
              <div className="pt-4">
                <p className="text-[hsl(var(--neutral-dark))] mb-6 italic">{testimonial.text}</p>
                
                <div className="flex items-center">
                  <div className={`w-12 h-12 bg-[hsl(var(--${testimonial.color}))] rounded-full mr-4 overflow-hidden`}>
                    <div className={`w-full h-full bg-[hsl(var(--${testimonial.color}))]/30 flex items-center justify-center text-[hsl(var(--${testimonial.color}))] font-bold`}>
                      {testimonial.initials}
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-[hsl(var(--neutral-medium))]">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

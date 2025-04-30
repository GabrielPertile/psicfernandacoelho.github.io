interface Service {
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: "fas fa-brain",
    title: "Terapia Individual",
    description: "Sessões personalizadas para adultos lidando com ansiedade, depressão, estresse, traumas e desafios de relacionamento."
  },
  {
    icon: "fas fa-users",
    title: "Terapia de Casal",
    description: "Abordagem colaborativa para casais que desejam melhorar a comunicação, resolver conflitos e fortalecer o relacionamento."
  },
  {
    icon: "fas fa-heart",
    title: "Desenvolvimento Pessoal",
    description: "Programas específicos para autoconhecimento, inteligência emocional e desenvolvimento de habilidades sociais."
  },
  {
    icon: "fas fa-laptop",
    title: "Atendimento Online",
    description: "Sessões de terapia via videoconferência com a mesma qualidade e confidencialidade do atendimento presencial."
  },
  {
    icon: "fas fa-comments",
    title: "Orientação Familiar",
    description: "Auxílio para famílias que enfrentam desafios de comunicação, transições de vida e questões de relacionamento."
  },
  {
    icon: "fas fa-briefcase",
    title: "Psicologia Corporativa",
    description: "Programas para empresas focados em saúde mental no trabalho, gestão de estresse e desenvolvimento de liderança."
  }
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 bg-[hsl(var(--accent-light))]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[hsl(var(--secondary))] uppercase tracking-wider text-sm font-medium mb-2">
            Como posso ajudar
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Serviços e <span className="text-[hsl(var(--primary))]">Especialidades</span>
          </h2>
          <p className="text-[hsl(var(--neutral-dark))]">
            Ofereço uma variedade de serviços terapêuticos adaptados às suas necessidades específicas, sempre com uma abordagem personalizada e baseada em evidências.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-all duration-300">
              <div className="bg-[hsl(var(--primary))]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <i className={`${service.icon} text-2xl text-[hsl(var(--primary))]`}></i>
              </div>
              <h3 className="font-display text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-[hsl(var(--neutral-medium))] mb-4">{service.description}</p>
              <a 
                href="#contato" 
                className="inline-flex items-center text-[hsl(var(--primary))] font-medium hover:text-[hsl(var(--primary-dark))] transition-colors text-sm"
              >
                Saiba mais
                <i className="fas fa-chevron-right ml-2 text-xs"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

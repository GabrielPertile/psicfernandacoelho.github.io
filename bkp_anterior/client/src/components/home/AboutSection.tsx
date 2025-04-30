const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-[hsl(var(--neutral-lightest))]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1580465446361-8aae5321522b?auto=format&fit=crop&w=800&h=900" 
              alt="Ana Silva, psicóloga clínica" 
              className="rounded-lg shadow-md w-full object-cover"
            />
          </div>
          
          <div className="md:w-1/2">
            <div className="text-[hsl(var(--secondary))] uppercase tracking-wider text-sm font-medium mb-2">
              Conheça sua psicóloga
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ana Silva, <span className="text-[hsl(var(--primary))]">Psicóloga Clínica</span>
            </h2>
            
            <p className="text-[hsl(var(--neutral-dark))] mb-4">
              Formada em Psicologia pela Universidade de São Paulo (USP), com especialização em Terapia Cognitivo-Comportamental e mais de 10 anos de experiência clínica.
            </p>
            
            <p className="text-[hsl(var(--neutral-dark))] mb-6">
              Minha abordagem é centrada no paciente, criando um espaço seguro onde você pode explorar suas emoções, pensamentos e comportamentos sem julgamentos, trabalhando juntos para desenvolver estratégias eficazes para lidar com seus desafios.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="bg-[hsl(var(--primary))]/10 p-2 rounded-full mr-4">
                  <i className="fas fa-graduation-cap text-[hsl(var(--primary))]"></i>
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1">Formação Acadêmica</h4>
                  <p className="text-sm text-[hsl(var(--neutral-medium))]">USP, PUC e formações internacionais</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[hsl(var(--primary))]/10 p-2 rounded-full mr-4">
                  <i className="fas fa-certificate text-[hsl(var(--primary))]"></i>
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1">Certificações</h4>
                  <p className="text-sm text-[hsl(var(--neutral-medium))]">CRP, APA e especializações</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[hsl(var(--primary))]/10 p-2 rounded-full mr-4">
                  <i className="fas fa-clock text-[hsl(var(--primary))]"></i>
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1">Experiência</h4>
                  <p className="text-sm text-[hsl(var(--neutral-medium))]">+10 anos de atendimento clínico</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[hsl(var(--primary))]/10 p-2 rounded-full mr-4">
                  <i className="fas fa-book text-[hsl(var(--primary))]"></i>
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1">Abordagem</h4>
                  <p className="text-sm text-[hsl(var(--neutral-medium))]">TCC e Integrativa</p>
                </div>
              </div>
            </div>
            
            <a 
              href="#contato" 
              className="inline-flex items-center text-[hsl(var(--primary))] font-medium hover:text-[hsl(var(--primary-dark))] transition-colors"
            >
              Agende uma consulta
              <i className="fas fa-arrow-right ml-2 text-sm"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

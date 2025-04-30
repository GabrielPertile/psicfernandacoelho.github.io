import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Quanto tempo dura uma sessão de terapia?",
    answer: "As sessões individuais têm duração de 50 minutos. Para terapia de casal ou familiar, as sessões podem durar até 90 minutos, dependendo da necessidade."
  },
  {
    question: "Com que frequência devo fazer terapia?",
    answer: "Geralmente, as sessões são semanais, especialmente no início do tratamento. Conforme você progride, podemos ajustar para sessões quinzenais ou mensais. O plano terapêutico é sempre personalizado conforme suas necessidades."
  },
  {
    question: "Qual a diferença entre psicólogo e psiquiatra?",
    answer: "Psicólogos são especialistas em comportamento humano e terapia conversacional, sem prescrever medicamentos. Psiquiatras são médicos que podem receitar medicamentos para tratar condições de saúde mental. Muitas vezes, trabalham em conjunto para um tratamento completo."
  },
  {
    question: "A terapia online é tão eficaz quanto a presencial?",
    answer: "Pesquisas mostram que a terapia online pode ser tão eficaz quanto a presencial para muitas condições. Oferece comodidade e flexibilidade, mantendo a confidencialidade e qualidade do tratamento. Avaliamos juntos qual modalidade é mais adequada para o seu caso."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleFaq = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="py-20 bg-[hsl(var(--accent-light))]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[hsl(var(--secondary))] uppercase tracking-wider text-sm font-medium mb-2">
            Dúvidas frequentes
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Perguntas <span className="text-[hsl(var(--primary))]">Frequentes</span>
          </h2>
          <p className="text-[hsl(var(--neutral-dark))]">
            Encontre respostas para as dúvidas mais comuns sobre terapia e o processo terapêutico.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button 
                  className="w-full text-left p-6 focus:outline-none" 
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-lg">{faq.question}</h3>
                    <i className={`fas fa-chevron-down text-[hsl(var(--primary))] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}></i>
                  </div>
                </button>
                <div className={`px-6 pb-6 ${openIndex === index ? 'block' : 'hidden'}`}>
                  <p className="text-[hsl(var(--neutral-medium))]">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

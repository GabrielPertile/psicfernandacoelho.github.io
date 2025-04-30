import { Link } from 'wouter';

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--neutral-dark))] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <span className="text-white font-display text-2xl font-bold">Ana Silva</span>
              <span className="ml-2 text-[hsl(var(--primary))] text-sm font-light">Psicóloga</span>
            </div>
            
            <p className="text-[hsl(var(--neutral-light))] mb-6">
              Ajudando pessoas a alcançarem o equilíbrio emocional e bem-estar mental através de terapia personalizada.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-[hsl(var(--neutral-light))] hover:text-[hsl(var(--primary))] transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-[hsl(var(--neutral-light))] hover:text-[hsl(var(--primary))] transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-[hsl(var(--neutral-light))] hover:text-[hsl(var(--primary))] transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-[hsl(var(--neutral-light))] hover:text-[hsl(var(--primary))] transition-colors">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#inicio" className="text-[hsl(var(--neutral-light))] hover:text-[hsl(var(--primary))] transition-colors">Início</a></li>
              <li><a href="#sobre" className="text-[hsl(var(--neutral-light))] hover:text-[hsl(var(--primary))] transition-colors">Sobre Mim</a></li>
              <li><a href="#servicos" className="text-[hsl(var(--neutral-light))] hover:text-[hsl(var(--primary))] transition-colors">Serviços</a></li>
              <li><a href="#depoimentos" className="text-[hsl(var(--neutral-light))] hover:text-[hsl(var(--primary))] transition-colors">Depoimentos</a></li>
              <li><a href="#contato" className="text-[hsl(var(--neutral-light))] hover:text-[hsl(var(--primary))] transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Serviços</h4>
            <ul className="space-y-3">
              <li><a href="#servicos" className="text-[hsl(var(--neutral-light))] hover:text-[hsl(var(--primary))] transition-colors">Terapia Individual</a></li>
              <li><a href="#servicos" className="text-[hsl(var(--neutral-light))] hover:text-[hsl(var(--primary))] transition-colors">Terapia de Casal</a></li>
              <li><a href="#servicos" className="text-[hsl(var(--neutral-light))] hover:text-[hsl(var(--primary))] transition-colors">Orientação Familiar</a></li>
              <li><a href="#servicos" className="text-[hsl(var(--neutral-light))] hover:text-[hsl(var(--primary))] transition-colors">Desenvolvimento Pessoal</a></li>
              <li><a href="#servicos" className="text-[hsl(var(--neutral-light))] hover:text-[hsl(var(--primary))] transition-colors">Atendimento Online</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt text-[hsl(var(--primary))] mr-3"></i>
                <span className="text-[hsl(var(--neutral-light))]">Rua das Flores, 123 - Jardins, São Paulo/SP</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone text-[hsl(var(--primary))] mr-3"></i>
                <span className="text-[hsl(var(--neutral-light))]">(11) 98765-4321</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope text-[hsl(var(--primary))] mr-3"></i>
                <span className="text-[hsl(var(--neutral-light))]">contato@anasilva-psicologa.com.br</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-clock text-[hsl(var(--primary))] mr-3"></i>
                <span className="text-[hsl(var(--neutral-light))]">Seg-Sex: 9h às 18h</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[hsl(var(--neutral-medium))]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[hsl(var(--neutral-light))] text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Ana Silva Psicologia. Todos os direitos reservados.
            </p>
            
            <div className="flex space-x-6">
              <a href="#" className="text-[hsl(var(--neutral-light))] hover:text-[hsl(var(--primary))] transition-colors text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="text-[hsl(var(--neutral-light))] hover:text-[hsl(var(--primary))] transition-colors text-sm">
                Termos de Uso
              </a>
              <a href="#" className="text-[hsl(var(--neutral-light))] hover:text-[hsl(var(--primary))] transition-colors text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

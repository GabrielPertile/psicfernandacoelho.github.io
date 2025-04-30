import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(3, { message: "Nome deve ter pelo menos 3 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  phone: z.string().min(10, { message: "Telefone inválido" }),
  service: z.string().optional(),
  message: z.string().optional(),
  privacy: z.boolean().refine(val => val === true, {
    message: "Você precisa concordar com a política de privacidade"
  })
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      privacy: false
    }
  });
  
  const contactMutation = useMutation({
    mutationFn: async (values: FormValues) => {
      const { privacy, ...dataToSend } = values;
      const response = await apiRequest("POST", "/api/contact", dataToSend);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Mensagem enviada",
        description: "Entraremos em contato em breve.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    }
  });
  
  function onSubmit(values: FormValues) {
    contactMutation.mutate(values);
  }

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[hsl(var(--secondary))] uppercase tracking-wider text-sm font-medium mb-2">
            Entre em contato
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Agende sua <span className="text-[hsl(var(--primary))]">Consulta</span>
          </h2>
          <p className="text-[hsl(var(--neutral-dark))]">
            O primeiro passo para a mudança é buscar ajuda. Entre em contato para agendar sua consulta ou esclarecer dúvidas sobre o processo terapêutico.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-display text-xl font-bold mb-4">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-[hsl(var(--primary))]/10 p-2 rounded-full mr-4">
                    <i className="fas fa-map-marker-alt text-[hsl(var(--primary))]"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">Endereço</h4>
                    <p className="text-[hsl(var(--neutral-medium))]">Rua das Flores, 123 - Jardins<br/>São Paulo, SP - CEP 01234-567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[hsl(var(--primary))]/10 p-2 rounded-full mr-4">
                    <i className="fas fa-phone text-[hsl(var(--primary))]"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">Telefone</h4>
                    <p className="text-[hsl(var(--neutral-medium))]">(11) 98765-4321</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[hsl(var(--primary))]/10 p-2 rounded-full mr-4">
                    <i className="fas fa-envelope text-[hsl(var(--primary))]"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">Email</h4>
                    <p className="text-[hsl(var(--neutral-medium))]">contato@anasilva-psicologa.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[hsl(var(--primary))]/10 p-2 rounded-full mr-4">
                    <i className="fas fa-clock text-[hsl(var(--primary))]"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">Horário de Atendimento</h4>
                    <p className="text-[hsl(var(--neutral-medium))]">Segunda a Sexta: 9h às 18h<br/>Sábados: 9h às 12h (mediante agendamento)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-display text-xl font-bold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-[hsl(var(--primary))]/10 w-10 h-10 rounded-full flex items-center justify-center text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-white transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="bg-[hsl(var(--primary))]/10 w-10 h-10 rounded-full flex items-center justify-center text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-white transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="bg-[hsl(var(--primary))]/10 w-10 h-10 rounded-full flex items-center justify-center text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-white transition-colors">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="bg-[hsl(var(--primary))]/10 w-10 h-10 rounded-full flex items-center justify-center text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-white transition-colors">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-display text-xl font-bold mb-4">Localização</h3>
              <div className="bg-[hsl(var(--neutral-light))] h-64 rounded-lg overflow-hidden flex items-center justify-center">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1972082332853!2d-46.6729607!3d-23.5653846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sJardins%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1sen!2sbr!4v1623348087230!5m2!1sen!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy"
                  title="Localização do consultório"
                />
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="bg-[hsl(var(--neutral-lightest))] p-8 rounded-lg shadow-sm">
              <h3 className="font-display text-xl font-bold mb-6">Formulário de Contato</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome Completo*</FormLabel>
                          <FormControl>
                            <Input placeholder="Seu nome" {...field} className="px-4 py-3" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email*</FormLabel>
                          <FormControl>
                            <Input placeholder="Seu email" {...field} className="px-4 py-3" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefone*</FormLabel>
                        <FormControl>
                          <Input placeholder="(00) 00000-0000" {...field} className="px-4 py-3" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Serviço de Interesse</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="px-4 py-3">
                              <SelectValue placeholder="Selecione uma opção" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="individual">Terapia Individual</SelectItem>
                            <SelectItem value="couple">Terapia de Casal</SelectItem>
                            <SelectItem value="family">Orientação Familiar</SelectItem>
                            <SelectItem value="personal">Desenvolvimento Pessoal</SelectItem>
                            <SelectItem value="corporate">Psicologia Corporativa</SelectItem>
                            <SelectItem value="other">Outro</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensagem</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Sua mensagem ou dúvida" 
                            {...field} 
                            className="px-4 py-3 min-h-[100px] resize-y"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="privacy"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm text-[hsl(var(--neutral-medium))]">
                            Concordo com a <a href="#" className="text-[hsl(var(--primary))] hover:underline">Política de Privacidade</a> e autorizo o tratamento dos meus dados para contato.
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-[hsl(var(--primary))] text-white font-medium px-8 py-6 rounded-md shadow-md hover:bg-[hsl(var(--primary-dark))] transition-colors"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Enviando..." : "Enviar Mensagem"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

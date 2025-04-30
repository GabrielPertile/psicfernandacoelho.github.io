# Landing Page Estática para Psicólogo

Uma landing page moderna, elegante e otimizada para SEO, criada para psicólogos e terapeutas. Esta é uma versão totalmente estática, sem dependências de frameworks ou backend.

## Características

- Design moderno e atraente
- Totalmente responsivo (mobile-first)
- Otimizado para SEO
- Carregamento rápido
- HTML/CSS/JS puro
- Formulário de contato com validação
- Botão de WhatsApp para contato rápido

## Estrutura do Projeto

```
site-estatico/
│
├── index.html        # Página principal
├── css/              
│   └── style.css     # Estilos da página
├── js/               
│   └── script.js     # Funcionalidades JavaScript
└── images/           # Pasta para imagens
    └── logo.png      # Logo exemplo
```

## Tecnologias Utilizadas

- HTML5
- CSS3 (com variáveis CSS para fácil personalização)
- JavaScript (vanilla)
- Font Awesome (para ícones)
- Google Fonts

## SEO

- Meta tags otimizadas
- Schema.org markup para melhor indexação
- Conteúdo estruturado com headings adequados
- Velocidade de carregamento otimizada
- Textos alternativos para imagens

## Como Usar Localmente

Simplesmente abra o arquivo `index.html` em qualquer navegador para visualizar o site.

Para desenvolvimento, você pode usar:
```
# Python 3
python -m http.server 8000

# Node.js
npx serve .
```

## Hospedagem

Esta landing page é 100% estática e pode ser hospedada em qualquer serviço de hospedagem web com custo mínimo:

### Opções Gratuitas
- **GitHub Pages**: Faça upload dos arquivos para um repositório GitHub e ative o GitHub Pages
- **Netlify**: Faça upload direto ou conecte a um repositório Git
- **Vercel**: Conecte a um repositório Git para deploy automático

### Opções de Baixo Custo
- **Amazon S3 + CloudFront**: Hospedagem de arquivos estáticos com CDN global
- **Google Cloud Storage**: Similar ao S3, com opções de CDN
- **DigitalOcean Spaces**: Alternativa mais simples ao S3

## Customização

- As cores podem ser facilmente alteradas no arquivo `css/style.css` nas variáveis CSS no início do arquivo
- As fontes podem ser trocadas importando novas fontes do Google Fonts
- As imagens podem ser substituídas mantendo o mesmo nome ou atualizando os caminhos no HTML

## Licença

Este projeto está disponível para uso pessoal e comercial.
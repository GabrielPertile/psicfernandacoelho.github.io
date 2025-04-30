# Instruções de Instalação e Configuração

Este documento fornece instruções detalhadas sobre como baixar, configurar e personalizar esta landing page para seu próprio uso.

## 1. Requisitos

Nenhum requisito especial além de um editor de texto e acesso a um servidor web básico. Como este é um site estático, não há necessidade de PHP, Node.js, ou qualquer outra linguagem de programação no servidor.

## 2. Download dos Arquivos

Há várias formas de obter os arquivos:

### Via Git

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/landing-page-psicologo.git

# Entre na pasta do projeto
cd landing-page-psicologo
```

### Download Direto

1. Baixe o arquivo ZIP contendo todos os arquivos do site
2. Descompacte em seu computador

## 3. Estrutura de Arquivos

```
site-estatico/
│
├── index.html        # Página principal do site
├── css/              
│   └── style.css     # Todos os estilos do site
├── js/               
│   └── script.js     # Funcionalidades JavaScript
├── images/           # Pasta para imagens
│   └── logo.png      # Logo padrão
├── 404.html          # Página de erro 404
├── robots.txt        # Instruções para mecanismos de busca
├── sitemap.xml       # Mapa do site para SEO
├── .htaccess         # Configurações para servidor Apache
└── README.md         # Documentação básica
```

## 4. Personalização

### 4.1 Informações Pessoais

Para personalizar o site com suas informações, você precisará editar vários arquivos. Os principais pontos de personalização são:

#### Em `index.html`:

1. Altere o título do site e metatags (linhas 5-10)
2. Altere o nome, slogan e informações do psicólogo (seção header, aproximadamente linhas 30-40)
3. Atualize os textos da seção "Sobre" (aproximadamente linhas 70-100)
4. Modifique os serviços oferecidos (aproximadamente linhas 120-180)
5. Atualize as conquistas com seus números reais (aproximadamente linhas 190-220)
6. Substitua os depoimentos de clientes (aproximadamente linhas 230-280)
7. Personalize as perguntas frequentes (aproximadamente linhas 290-350)
8. Atualize as informações de contato (aproximadamente linhas 360-420)
9. Modifique o rodapé com seus dados (aproximadamente linhas 430-480)

#### Em `css/style.css`:

1. Altere as cores principais no início do arquivo (variáveis `:root`)
2. Ajuste as fontes se desejar usar outras famílias tipográficas

### 4.2 Personalização de Cores

As cores principais do site são definidas como variáveis CSS no início do arquivo `css/style.css`:

```css
:root {
  --primary: #7c3aed;        /* Cor principal (roxo) */
  --primary-light: #9f67ff;  /* Versão mais clara da cor principal */
  --primary-dark: #6027c7;   /* Versão mais escura da cor principal */
  --secondary: #0ea5e9;      /* Cor secundária (azul) */
  --secondary-light: #38bdf8;
  --secondary-dark: #0369a1;
  --accent: #ec4899;         /* Cor de destaque (rosa) */
  --accent-light: #fbcfe8;
  /* ...outras variáveis... */
}
```

Altere estes valores para mudar o esquema de cores do site. Recomenda-se usar ferramentas como o [Color Designer](https://colordesigner.io/) para criar paletas harmoniosas.

### 4.3 Imagens

1. Substitua o logo em `images/logo.png` com sua própria identidade visual.
2. Substitua as imagens de fundo nas seções relevantes (como o hero e sobre).
3. Adicione suas próprias imagens na pasta `images/`.

#### Recomendações para imagens:

- **Foto de perfil**: 600x600px, formato quadrado, fundo neutro
- **Imagens de fundo**: Pelo menos 1920x1080px para boa qualidade em telas grandes
- **Logos**: Preferencialmente em PNG com transparência
- **Formatos**: Utilize WebP quando possível, com fallback para JPEG/PNG

### 4.4 Formulário de Contato

O formulário de contato precisa ser configurado para enviar mensagens. Há várias opções:

1. **Serviço de Terceiros**: Integre com Formspree, Netlify Forms ou similar.
2. **Processamento Próprio**: Se sua hospedagem suportar PHP ou outro backend, crie um script para processar o formulário.

Para integrar com Formspree (opção gratuita):

1. Crie uma conta no [Formspree](https://formspree.io/)
2. Modifique a tag `<form>` no HTML:

```html
<form action="https://formspree.io/f/seu-codigo" method="POST" class="contact-form">
```

## 5. Teste Local

Para testar o site localmente antes de publicar:

### Utilizando Python:

```bash
cd site-estatico
python -m http.server 8000
```

Depois, abra seu navegador em `http://localhost:8000`

### Utilizando Node.js:

```bash
cd site-estatico
npx serve
```

## 6. Publicação

Veja o arquivo `HOSPEDAGEM.md` para instruções detalhadas sobre como publicar o site em diferentes plataformas de hospedagem.

## 7. SEO e Otimização

Veja o arquivo `OTIMIZACAO_SEO.md` para instruções detalhadas sobre como otimizar ainda mais o site para mecanismos de busca.

## 8. Suporte

Se precisar de ajuda adicional para personalizar ou configurar o site, entre em contato com o desenvolvedor ou consulte a documentação online em [https://github.com/seu-usuario/landing-page-psicologo](https://github.com/seu-usuario/landing-page-psicologo).
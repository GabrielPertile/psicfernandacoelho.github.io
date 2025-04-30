# Como Baixar o Projeto

Para baixar este projeto para uso em seu computador ou servidor, siga uma das opções abaixo:

## Opção 1: Download direto da pasta site-estatico

Você pode baixar todos os arquivos da pasta `site-estatico` diretamente do Replit:

1. No Replit, navegue até a pasta `site-estatico`
2. Para cada arquivo, você pode clicar nele, depois clicar no botão de download (ou usar o menu de contexto)
3. Para pastas, você precisará navegar dentro delas e baixar os arquivos individualmente

## Opção 2: Usando o Git

Se você estiver familiarizado com Git, pode clonar este repositório:

```bash
git clone https://github.com/SEU_USUARIO/landing-page-psicologo.git
cd landing-page-psicologo/site-estatico
```

Substitua `SEU_USUARIO` pelo seu nome de usuário se hospedar este projeto no GitHub.

## Opção 3: Download em um terminal local

Se você tiver acesso a um terminal em seu computador, pode usar o comando `git clone` ou usar `wget` ou `curl` para baixar arquivos individuais:

```bash
# Exemplo usando curl
curl -O https://CAMINHO_PARA_O_ARQUIVO/index.html
curl -O https://CAMINHO_PARA_O_ARQUIVO/css/style.css
# e assim por diante
```

## Opção 4: Exportação via GitHub

1. Crie um novo repositório no GitHub
2. Envie os arquivos da pasta `site-estatico` para este repositório
3. Use o GitHub para clonar ou baixar como ZIP

## Estrutura de Arquivos para Download

Certifique-se de manter a seguinte estrutura de arquivos ao baixar:

```
site-estatico/
│
├── index.html        # Página principal
├── css/              
│   └── style.css     # Estilos CSS
├── js/               
│   └── script.js     # JavaScript
├── images/           # Pasta de imagens
│   └── logo.png      # Logo exemplo
├── 404.html          # Página de erro
├── robots.txt        # Arquivo para SEO
├── sitemap.xml       # Mapa do site
├── .htaccess         # Configuração do servidor
├── README.md         # Documentação
├── HOSPEDAGEM.md     # Instruções de hospedagem
├── OTIMIZACAO_SEO.md # Guia de SEO
└── INSTALACAO.md     # Instruções de instalação
```

Após o download, consulte o arquivo `INSTALACAO.md` para instruções sobre como personalizar e usar o site.
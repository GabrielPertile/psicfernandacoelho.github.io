# Guia de Hospedagem

Este documento fornece orientações detalhadas sobre como hospedar esta landing page em diferentes plataformas. Como se trata de um site estático (HTML, CSS e JavaScript puro), ele pode ser hospedado em diversas plataformas com custo baixo ou até mesmo gratuito.

## Opções Gratuitas de Hospedagem

### GitHub Pages

1. Crie uma conta no [GitHub](https://github.com/) se ainda não tiver.
2. Crie um novo repositório com o nome `seu-nome-de-usuario.github.io`.
3. Faça upload de todos os arquivos da pasta `site-estatico` para este repositório.
4. Vá em "Settings" > "Pages" e ative o GitHub Pages apontando para a branch principal (main ou master).
5. O site estará disponível em `https://seu-nome-de-usuario.github.io`.

**Vantagens**: Totalmente gratuito, integrado com Git para controle de versões.

### Netlify

1. Crie uma conta no [Netlify](https://www.netlify.com/).
2. Na dashboard, clique em "Add new site" > "Import an existing project".
3. Você pode conectar ao GitHub ou fazer upload manual via "Deploy manually".
4. Para upload manual, arraste e solte a pasta `site-estatico` na área indicada.
5. O site estará disponível em uma URL aleatória fornecida pelo Netlify (ex: `https://your-site-name.netlify.app`).
6. Você pode configurar um domínio personalizado posteriormente.

**Vantagens**: Gratuito com plano básico, deploy automático, certificado SSL incluído.

### Vercel

1. Crie uma conta no [Vercel](https://vercel.com/).
2. Na dashboard, clique em "Add New..." > "Project".
3. Importe o projeto de um repositório Git ou faça upload manual.
4. Para configurar manualmente, instale a CLI Vercel e execute:
   ```
   vercel login
   cd site-estatico
   vercel
   ```
5. Siga as instruções na tela.

**Vantagens**: Gratuito para projetos pessoais, deploy automático, bom desempenho global.

## Opções de Baixo Custo

### Amazon S3 + CloudFront

1. Crie uma conta na [AWS](https://aws.amazon.com/) (o nível gratuito permite uso limitado por 12 meses).
2. Crie um bucket S3 com o nome do seu domínio (ex: `www.anasilva-psicologa.com.br`).
3. Configure o bucket para hospedagem de site estático.
4. Faça upload de todos os arquivos da pasta `site-estatico`.
5. Configure o CloudFront para distribuição global (opcional, mas recomendado).
6. Configure seu domínio para apontar para o CloudFront ou para o endpoint S3.

**Vantagens**: Escalável, desempenho global com CDN, custo proporcional ao tráfego.

### Google Cloud Storage

1. Crie uma conta no [Google Cloud](https://cloud.google.com/) (oferece crédito inicial para novos usuários).
2. No Console do GCP, vá para Cloud Storage e crie um novo bucket.
3. Configure o bucket para hospedagem de site estático.
4. Faça upload dos arquivos da pasta `site-estatico`.
5. Configure o domínio (se tiver) para apontar para o URL do bucket.

**Vantagens**: Similar ao S3, boa integração com outros serviços Google.

### Hostinger ou Hospedagem Compartilhada

1. Registre-se em um serviço de hospedagem compartilhada, como [Hostinger](https://www.hostinger.com.br/).
2. Compre um plano básico (normalmente entre R$10-20 por mês).
3. Acesse o painel de controle (cPanel ou similar) e abra o gerenciador de arquivos.
4. Faça upload dos arquivos da pasta `site-estatico` para a pasta `public_html` ou raiz do site.
5. Configure o domínio, se necessário.

**Vantagens**: Interface amigável, suporte em português, domínio gratuito geralmente incluído.

## Configuração de Domínio Personalizado

Para qualquer opção acima, você pode configurar um domínio personalizado:

1. Registre um domínio em um serviço como [Registro.br](https://registro.br/), [Namecheap](https://www.namecheap.com/) ou [GoDaddy](https://www.godaddy.com/).
2. Configure os registros DNS do domínio para apontar para sua hospedagem:
   - Para GitHub Pages: Configure um registro CNAME para `seu-nome-de-usuario.github.io`.
   - Para Netlify/Vercel: Siga as instruções específicas na plataforma para adicionar domínios personalizados.
   - Para S3/Cloud Storage: Configure registros A ou CNAME conforme instruções do serviço.

## Considerações de SEO

Após a implantação, lembre-se de:

1. Verificar se o arquivo `robots.txt` está acessível em `seu-dominio.com/robots.txt`.
2. Verificar se o arquivo `sitemap.xml` está acessível em `seu-dominio.com/sitemap.xml`.
3. Enviar o sitemap para o Google Search Console e Bing Webmaster Tools.
4. Garantir que todas as imagens tenham atributos `alt` descritivos.
5. Verificar se as meta tags estão corretamente configuradas.

## Manutenção

Depois de implantado, realize estas verificações periodicamente:

1. Teste o site em diferentes navegadores e dispositivos.
2. Verifique a velocidade do site usando ferramentas como Google PageSpeed Insights.
3. Atualize o conteúdo regularmente para manter o site relevante para o SEO.
4. Monitore o desempenho do site através de ferramentas como Google Analytics.
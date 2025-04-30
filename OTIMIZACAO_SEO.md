# Guia de Otimização SEO

Este documento fornece informações detalhadas sobre como otimizar ainda mais seu site para mecanismos de busca (SEO).

## Meta Tags Essenciais

Certifique-se de que essas meta tags estejam presentes em todas as páginas:

```html
<!-- Meta tags básicas -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Fernanda Coelho | Psicóloga Clínica em São Paulo</title>
<meta name="description" content="Psicóloga Fernanda Coelho - Atendimento online e presencial em São Paulo. Especialista em terapia cognitivo-comportamental, ansiedade, depressão e relacionamentos.">

<!-- Controle de indexação -->
<meta name="robots" content="index, follow">

<!-- Meta tags Open Graph (para compartilhamento em redes sociais) -->
<meta property="og:title" content="Fernanda Coelho | Psicóloga Clínica em São Paulo">
<meta property="og:description" content="Atendimento psicológico online e presencial. Especialista em ansiedade, depressão e relacionamentos.">
<meta property="og:image" content="https://www.anasilva-psicologa.com.br/images/og-image.jpg">
<meta property="og:url" content="https://www.anasilva-psicologa.com.br">
<meta property="og:type" content="website">

<!-- Meta tags Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Fernanda Coelho | Psicóloga Clínica em São Paulo">
<meta name="twitter:description" content="Atendimento psicológico online e presencial. Especialista em ansiedade, depressão e relacionamentos.">
<meta name="twitter:image" content="https://www.anasilva-psicologa.com.br/images/og-image.jpg">

<!-- Canonical URL (evita conteúdo duplicado) -->
<link rel="canonical" href="https://www.anasilva-psicologa.com.br">
```

## Schema.org (JSON-LD)

Adicione o seguinte código no `<head>` do seu HTML para fornecer informações estruturadas aos motores de busca:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Fernanda Coelho - Psicóloga Clínica",
  "image": "https://www.anasilva-psicologa.com.br/images/logo.png",
  "url": "https://www.anasilva-psicologa.com.br",
  "telephone": "+5511XXXXXXXXX",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Paulista, 1000, Conjunto 123",
    "addressLocality": "São Paulo",
    "addressRegion": "SP",
    "postalCode": "01310-000",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -23.5558,
    "longitude": -46.6616
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "$$",
  "sameAs": [
    "https://www.facebook.com/anasilva.psicologa",
    "https://www.instagram.com/anasilva.psicologa",
    "https://www.linkedin.com/in/anasilva-psicologa"
  ]
}
</script>
```

## Otimização de Conteúdo

1. **Palavras-chave**: Use as seguintes palavras-chave estrategicamente ao longo do conteúdo:
   - Psicóloga em São Paulo
   - Terapia online
   - Ansiedade
   - Depressão
   - Terapia cognitivo-comportamental
   - Atendimento psicológico

2. **Estrutura de Headings**: Use uma hierarquia clara de headings (H1, H2, H3):
   - Use apenas um H1 por página (geralmente o título principal)
   - Use H2 para títulos de seções principais
   - Use H3 para subtítulos dentro de seções

3. **Conteúdo de Qualidade**:
   - Escreva textos informativos e originais
   - Mantenha o conteúdo atualizado
   - Evite textos muito curtos (menos de 300 palavras)
   - Adicione referências e citações quando apropriado

## Otimização de Imagens

1. **Formato e compressão**:
   - Use formatos modernos como WebP com fallback para JPEG/PNG
   - Comprima todas as imagens antes de fazer upload
   - Dimensione corretamente as imagens para o tamanho em que serão exibidas

2. **Atributos Alt**:
   - Adicione atributos alt descritivos em todas as imagens
   - Inclua palavras-chave relevantes nos alts, mas de forma natural

Exemplo:
```html
<img src="images/consultorio.jpg" alt="Consultório de psicologia da Dra. Fernanda Coelho em São Paulo, ambiente acolhedor e calmo" width="800" height="600">
```

## Links Internos e Externos

1. **Links internos**:
   - Crie links entre seções relevantes do site
   - Use âncoras para navegação interna na página
   - Use textos de link descritivos (evite "clique aqui")

2. **Links externos**:
   - Crie links para fontes confiáveis e relevantes
   - Use atributo `rel="noopener"` para links externos
   - Considere abrir links externos em novas abas

## Velocidade e Desempenho

1. **Carregamento rápido**:
   - Minifique CSS e JavaScript
   - Use compressão GZIP/Brotli (já configurado no .htaccess)
   - Carregue recursos críticos primeiro

2. **Core Web Vitals**:
   - Otimize para Largest Contentful Paint (LCP) < 2.5s
   - Otimize para First Input Delay (FID) < 100ms
   - Otimize para Cumulative Layout Shift (CLS) < 0.1

3. **Ferramentas de teste**:
   - [Google PageSpeed Insights](https://pagespeed.web.dev/)
   - [GTmetrix](https://gtmetrix.com/)
   - [WebPageTest](https://www.webpagetest.org/)

## Responsividade

1. **Design mobile-first**:
   - Teste em diferentes dispositivos e tamanhos de tela
   - Garanta que todos os elementos sejam acessíveis em dispositivos móveis
   - Use media queries para ajustes específicos por tamanho de tela

## Monitoramento

1. **Ferramentas de Analytics**:
   - Configure o Google Analytics para monitorar o tráfego
   - Configure o Google Search Console para monitorar a indexação
   - Monitore regularmente as palavras-chave e rankings

2. **Acompanhamento de desempenho**:
   - Verifique mensalmente as páginas mais acessadas
   - Analise o comportamento dos usuários (tempo de permanência, taxa de rejeição)
   - Ajuste a estratégia com base nos dados coletados

## Atualizações Regulares

1. **Blog ou Seção de Artigos**:
   - Considere adicionar um blog com artigos sobre psicologia
   - Atualize regularmente com conteúdo relevante (idealmente uma vez por semana)
   - Compartilhe os artigos nas redes sociais

2. **Revisões periódicas**:
   - Revise e atualize o conteúdo a cada 3-6 meses
   - Atualize informações de contato e horários quando necessário
   - Monitore links quebrados e corrija-os
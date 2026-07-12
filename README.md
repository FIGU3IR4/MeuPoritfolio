# Portfólio — Next.js

Projeto de portfólio pessoal construído com **Next.js 14 (App Router)**, **TypeScript** e **Tailwind CSS**.

## Identidade visual

O design segue um conceito de **"blueprint técnico"** (papel de desenho de engenharia): fundo azul profundo, grade sutil, cantos de anotação técnica nos cards, tipografia `Space Grotesk` + `IBM Plex Sans` + `IBM Plex Mono`.

### Animações e interatividade
- **Hero com composição 3D**: a foto de perfil e o cartão de terminal reagem ao movimento do mouse com um efeito de inclinação 3D (perspective + rotateX/rotateY), como um verdadeiro objeto físico na tela.
- **Revelação da foto**: ao carregar a página, a foto aparece com uma transição de "varredura" (scan-line), como um desenho técnico sendo revelado — não é um fade simples, é uma animação com camadas.
- **Chips flutuantes**: pequenas etiquetas de tecnologia (`TypeScript`, `Next.js`) flutuam suavemente ao redor da composição do herói.
- **Scroll reveal**: cada seção aparece com uma animação sutil de entrada conforme o usuário rola a página (usando `framer-motion`).
- **Barra de progresso de leitura**: barra fina no topo da página que preenche conforme o scroll, no estilo de régua técnica.
- **Botão "voltar ao topo"**: aparece após rolar a página.

Paleta:
- `blueprint` `#0E2A3D` — fundo principal
- `blueprint-darker` `#081C29` — fundo alternado / navbar
- `paper` `#EAF2F5` — texto principal
- `cyan-signal` `#5EC8D8` — linhas, destaques, links
- `amber-signal` `#F2A65A` — call-to-action, acentos
- `muted` `#7C97A6` — texto secundário

## Como rodar localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Sua foto de perfil

Coloque sua foto em:

```
public/foto.jpg
```

O caminho é lido de `profile.photo` em `lib/data.ts` — se quiser usar outro nome de arquivo (ex: `.png`), só trocar esse valor. Recomendo uma foto vertical (retrato), bem iluminada e com fundo neutro — o card tem proporção 4:5. Enquanto o arquivo não existir, aparece um placeholder no lugar (sem quebrar o site).



## Como personalizar

**Todo o conteúdo do site (textos, projetos, experiências, links) está centralizado em um único arquivo:**

```
lib/data.ts
```

Edite esse arquivo para:
- Trocar nome, cargo, stack, e-mail, LinkedIn, GitHub, WhatsApp
- Adicionar/remover projetos
- Editar experiências profissionais
- Editar grupos de habilidades
- Editar os cards de serviços

Não é necessário mexer nos componentes para atualizar conteúdo básico.

### Currículo em PDF
Coloque seu arquivo em `public/curriculo.pdf` (o link "Download CV" já aponta para esse caminho, definido em `profile.resumeUrl` no `lib/data.ts`).

### Cores
As cores estão definidas em `tailwind.config.ts` (seção `theme.extend.colors`) e em `app/globals.css` (grade de fundo, cantos técnicos). Troque os valores hexadecimais para mudar a paleta inteira.

### Fontes
As fontes são carregadas via Google Fonts em `app/layout.tsx` (tag `<link>`). Para trocar, basta atualizar a URL do Google Fonts e os nomes em `tailwind.config.ts` (`fontFamily`).

## Estrutura

```
app/
  layout.tsx      → layout raiz, metadata, fontes
  page.tsx        → monta todas as seções
  globals.css     → grade blueprint, cantos técnicos, utilitários
components/
  Navbar.tsx
  Hero.tsx        → seção herói com terminal animado
  About.tsx
  Skills.tsx
  Projects.tsx
  Experience.tsx  → timeline
  Services.tsx
  Contact.tsx
  Footer.tsx
lib/
  data.ts         → TODO o conteúdo do site (edite aqui)
```

## Deploy

Pronto para deploy na [Vercel](https://vercel.com): basta importar o repositório e não é necessária nenhuma configuração adicional.

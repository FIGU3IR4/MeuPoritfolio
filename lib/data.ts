
export const profile = {
  name: "Victor Figueira",
  role: "Desenvolvedor(a) Full-Stack",
  stackHighlight: "Next.js · TypeScript · Node.js · Java",
  secondaryStack: "Java · Spring Boot · PostgreSQL",
  location: "Recife, Brasil",
  availability: "Disponível para novos projetos",
 photo: "/foto.jpg",
  photoAlt:"minha foto",
  email: "victorgfigueira@gmail.com",
  linkedin: {
    label: "linkedin.com/in/figu3ir4",
    url: "https://www.linkedin.com/in/figu3ir4",
  },
  github: {
    label: "github.com/FIGU3IR4",
    url: "https://github.com/FIGU3IR4",
  },
  whatsapp: {
    url: "https://wa.me/5581996259614?text=Ol%C3%A1!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.",
  },
  resumeUrl: "/curriculo.pdf",
};

export const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Projetos", href: "#projetos" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

export const aboutStats = [
  { value: "3+", label: "Anos de Experiência" },
  { value: "20+", label: "Projetos Entregues" },
  { value: "20+", label: "Clientes Atendidos" },
  { value: "100%", label: "Comprometimento" },
];

export const aboutParagraphs = [
  "Sou desenvolvedor em Recife e estudo ADS na CESAR School. Comecei na área movido pela vontade de construir soluções web que geram impacto real.",
"Utilizo Java, Spring Boot, React e Next.js no dia a dia. Como experiência marcante, destaco meu trabalho para o Banco do Brasil, onde desenvolvi um portal de acessibilidade.",
"Prezo por código limpo, design mobile-first e boas práticas. Busco novos desafios na área de desenvolvimento para construir produtos inovadores."
];

export const skillGroups = [
  {
    category: "Linguagens",
    items: ["JavaScript (ES6+)", "TypeScript", "Java"],
  },
  {
    category: "Frameworks & Libs",
    items: ["React.js", "Next.js", "Node.js", "Spring Boot"],
  },
  {
    category: "Estilização",
    items: [
    "Tailwind CSS","Styled-Components","Sass / SCSS","Chakra UI","Material-UI (MUI)","Framer Motion"
  ],
  },
  {
    category: "Banco de Dados",
    items: ["PostgreSQL", "MySQL", "SQL", "MongoDB"],
  },
  {
    category: "Ferramentas",
    items: ["Git", "GitHub", "APIs REST", "Docker"],
  },
  {
    category: "Metodologias",
    items: ["Clean Code", "Scrum", "Kanban", "Code Review"],
  },
];

export const projects = [
  {
    title: "FluFlu Pet",
    description:
    "API REST desenvolvida para a gestão de clínicas veterinárias, estruturada com foco em escalabilidade, segurança e eficiência nos endpoints para integração.",
    tags: ["Java - ", "Springboot - ", "APIs REST"],
    link: "https://github.com/FIGU3IR4/fluflu-api-springboot",
    linkLabel: "Código",
  },
  {
    title: "Tropical Mate ",
    description:
      "Plataforma de apresentação de produtos e gestão de pedidos para a marca Tereré Invasor, focada em atrair clientes e converter vendas diretamente pelo WhatsApp.|",
    tags: ["React.js", "Tailwind css", "Node.js"],
    link: "https://www.tropicalmate.com.br",
    linkLabel: "Site",
  },
  {
    title: "Faq BB",
    description:
     "Portal de acessibilidade linguística desenvolvido para o Banco do Brasil, com o foco em traduzir e simplificar a linguagem e os processos bancários para povos indígenas. A plataforma promove a inclusão financeira e foi construída utilizando uma arquitetura robusta com Spring Boot e Next.js.",
    tags:  ["React.js", "Tailwind css", "Node.js"],
    link: "https://faq.darkartsbm.com",
    linkLabel: "Site",
  },
];

export const experience = [
  {
    period: "jul 2026 — Atual",
    role: "Estagiario em TI",
    company: "Kastel manibu ",
    description:
      "Descreva suas principais responsabilidades, tecnologias utilizadas e resultados alcançados nessa posição.",
  },
  {
    period: "jan 2026 — jul 2026",
    role: "Desenvolvedor FullStack",
    company: "Banco do Brasil",
    description:
      "Descreva suas principais responsabilidades, tecnologias utilizadas e resultados alcançados nessa posição.",
  },
  {
    period: "jun 2024 — mar 2025",
    role: "Suporte Tecnico",
    company: "Datametrica",
    description:
      "Descreva suas principais responsabilidades, tecnologias utilizadas e resultados alcançados nessa posição.",
  },
];

export const services = [
  {
    title: "Landing Pages",
    tagline: "Páginas com foco em conversão",
    description:
      "Desenvolvimento de páginas estáticas de alta performance focadas em captar leads e alavancar vendas. Crio experiências visuais impactantes com animações fluidas para prender a atenção do usuário desde o primeiro segundo.",
    bullets: [
      "Performance extrema e SEO técnico",
      "Animações e interações modernas",
      "Integração com formulários e WhatsApp",
    ],
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
  },
  {
    title: "Sites Institucionais",
    tagline: "Presença digital para empresas",
    description:
      "Construção de sites profissionais para posicionar sua marca de forma sólida na internet. Estrutura moderna, carregamento ultrarrápido e design totalmente adaptável para transmitir autoridade ao seu cliente.",
    bullets: [
      "Design totalmente responsivo (Mobile First)",
      "Estrutura otimizada para o Google (SEO local)",
      "Acessibilidade e navegação intuitiva",
    ],
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    title: "Sistemas Web",
    tagline: "Aplicações sob medida",
    description:
      "Desenvolvimento de aplicações web complexas, como dashboards, painéis administrativos e plataformas (SaaS). Código limpo, tipado e escalável para garantir segurança e facilitar manutenções futuras.",
    bullets: [
      "Interfaces dinâmicas e reativas",
      "Autenticação e controle de acesso",
      "Integração com APIs externas e Banco de Dados",
    ],
    tags: ["TypeScript", "Next.js", "Node.js"],
  },
];
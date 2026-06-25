import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "dbx-v2",
    title: "DBX V2",
    summary: "Sistema para gestao de desenhos tecnicos com foco em organizacao operacional e escalabilidade.",
    impact:
      "Mostra capacidade de estruturar dominio, persistencia e fluxo de trabalho em um produto mais proximo do mundo real.",
    tagline: "Plataforma para padronizar organizacao tecnica, fluxo operacional e evolucao de produto.",
    period: "Projeto autoral em evolucao",
    role: "Arquitetura, backend e modelagem do produto",
    status: "Em desenvolvimento continuo",
    imageUrl: "/images/projects/dbx-v2.png",
    gallery: [
      {
        src: "/images/projects/dbx-v2.png",
        alt: "Tela do projeto DBX V2 destacando a interface principal da plataforma.",
      },
    ],
    techStack: ["Python", "TypeScript", "FastAPI", "PostgreSQL"],
    highlights: [
      { label: "Foco", value: "Gestao tecnica estruturada" },
      { label: "Stack", value: "FastAPI + PostgreSQL" },
      { label: "Valor", value: "Menos friccao operacional" },
    ],
    challenge: [
      "Organizar um dominio tecnico com muitas regras implicitas, arquivos, estados e dependencias operacionais.",
      "Desenhar uma base que permitisse crescer com clareza sem transformar o sistema em um acoplamento dificil de manter.",
    ],
    solution: [
      "Estruturei o projeto em torno de responsabilidades claras de dominio, API e persistencia.",
      "Pensei o sistema como produto interno escalavel, priorizando previsibilidade de fluxo e clareza de evolucao.",
    ],
    outcomes: [
      "Projeto forte para demonstrar raciocinio de arquitetura e traducao de processo real em software.",
      "Base adequada para evoluir novas funcionalidades sem comprometer legibilidade e manutencao.",
    ],
    sections: [
      {
        title: "Contexto",
        content: [
          "O DBX V2 evoluiu para um desktop executavel voltado a engenharia e PCP, com foco em padronizar leitura de pedidos, organizacao de materiais e preparo tecnico de corte.",
          "O projeto se destaca por unir regras operacionais de fabrica a uma interface utilizavel no dia a dia, sem depender de ambiente Python instalado no cliente final.",
        ],
      },
      {
        title: "Decisoes tecnicas",
        content: [
          "Pelo README publico, a versao 2.0.4 incorpora PyQt5, pandas e ezdxf em uma distribuicao empacotada via PyInstaller, o que evidencia preocupacao com distribuicao, UX e executabilidade em Windows.",
          "A feature de nesting com parametros dinamicos por espessura, relatorios de sucata e processamento em segundo plano reforca dominio sobre heuristica operacional, exportacao e responsividade da interface.",
        ],
      },
    ],
    testSteps: [
      "Baixar ou gerar o executavel a partir do projeto usando `pyinstaller main.spec`.",
      "Manter `DBX-V2.0.4.exe`, `codigo_database.xlsx` e opcionalmente `dados_producao.xlsx` na mesma pasta.",
      "Executar o aplicativo no Windows e validar os fluxos de leitura de pedidos, otimizacao de corte e exportacao para Excel ou DXF.",
    ],
    links: [{ label: "Repositorio", href: "https://github.com/zuckalez0-oss/DBX-V2" }],
  },

  {
    slug: "promptmaster",
    title: "PromptMaster",
    summary: "Ferramenta CLI em Python para acelerar interacoes com IA por meio de um fluxo produtivo no terminal.",
    impact:
      "Reforca interesse por automacao, experiencia de desenvolvedor e produtos utilitarios orientados a eficiencia.",
    tagline: "CLI utilitaria pensada para deixar o uso de IA mais rapido, repetivel e integrado ao terminal.",
    period: "Projeto utilitario",
    role: "Produto, experiencia de desenvolvedor e implementacao",
    status: "Pronto para expansao",
    imageUrl: "/images/projects/promptMaster.png",
    gallery: [
      {
        src: "/images/projects/promptMaster.png",
        alt: "Imagem de capa do PromptMaster representando a ferramenta em contexto de terminal.",
      },
    ],
    techStack: ["Python", "CLI", "IA", "Automacao"],
    highlights: [
      { label: "Foco", value: "Produtividade no terminal" },
      { label: "Formato", value: "Ferramenta CLI" },
      { label: "Valor", value: "Menos atrito em fluxos com IA" },
    ],
    challenge: [
      "Transformar interacoes com IA em um fluxo mais disciplinado e rapido para quem ja trabalha muito via terminal.",
      "Reduzir repeticao manual sem perder flexibilidade para diferentes cenarios de uso.",
    ],
    solution: [
      "Modelei a ferramenta como utilitario pragmatico, priorizando rapidez de uso e integracao com o ambiente de desenvolvimento.",
      "A proposta central foi empacotar conveniencia, automacao e repetibilidade em uma experiencia simples de linha de comando.",
    ],
    outcomes: [
      "Projeto relevante para mostrar perfil de automacao aplicada e preocupacao com experiencia de desenvolvedor.",
      "Boa vitrine para demonstrar como pequenos produtos podem gerar ganho real de eficiencia.",
    ],
    sections: [
      {
        title: "Visao de produto",
        content: [
          "O PromptMaster atua como uma CLI em Python para transformar ideias vagas em prompts estruturados, apoiando fluxos de analise, machine learning, criacao de conteudo e escrita.",
          "O valor tecnico esta em encapsular engenharia de prompt e acesso ao Gemini em uma interface textual simples, reutilizavel e de baixa friccao.",
        ],
      },
      {
        title: "Aprendizados",
        content: [
          "Pelo README publico, o sistema organiza cinco modos especializados e usa `google-genai` com `.env` para autenticacao, demonstrando integracao com API externa, templates e experiencia interativa via terminal.",
          "Esse tipo de ferramenta comunica bem preocupacao com DX, automacao e padronizacao de saidas para uso real em LLMs.",
        ],
      },
    ],
    testSteps: [
      "Instalar as dependencias com `pip install google-genai python-dotenv`.",
      "Criar um arquivo `.env` com `GEMINI_API_KEY=sua_chave`.",
      "Executar `python promptMaster.py`, escolher um dos modos do menu e informar uma ideia bruta para validar a geracao do prompt em Markdown.",
    ],
    links: [{ label: "Repositorio", href: "https://github.com/zuckalez0-oss/promptMaster" }],
  },
  {
    slug: "automacao-desenho-tecnico",
    title: "Automacao para desenho tecnico",
    summary: "Pipeline para separar arquivos e preparar materiais para corte a laser com menos operacao manual.",
    impact:
      "Bom exemplo de software resolvendo gargalo operacional com automacao pragmatica e foco em produtividade.",
    tagline: "Automacao aplicada a um processo tecnico real para eliminar repeticao e reduzir gargalos operacionais.",
    period: "Projeto aplicado",
    role: "Diagnostico do gargalo, automacao e entrega funcional",
    status: "Caso relevante de eficiencia operacional",
    imageUrl: "/images/projects/laser.png",
    gallery: [
      {
        src: "/images/projects/laser.png",
        alt: "Fluxo visual do projeto de automacao para preparacao de arquivos tecnicos e corte a laser.",
      },
    ],
    techStack: ["Python", "ezdxf", "openpyxl", "Tkinter"],
    highlights: [
      { label: "Foco", value: "Reducao de trabalho manual" },
      { label: "Formato", value: "Pipeline operacional" },
      { label: "Valor", value: "Mais velocidade no preparo" },
    ],
    challenge: [
      "O processo manual de preparacao de arquivos gerava perda de tempo, repeticao de passos e risco de inconsistencias.",
      "Era preciso criar uma automacao util de verdade, conectada ao fluxo de operacao e nao apenas a um experimento tecnico.",
    ],
    solution: [
      "Desenhei um pipeline para separar arquivos, organizar insumos e reduzir o esforco humano em etapas repetitivas.",
      "A implementacao priorizou pragmatismo: resolver o gargalo com uma ferramenta acessivel e direcionada ao uso real.",
    ],
    outcomes: [
      "Projeto forte para demonstrar capacidade de identificar gargalo e converter isso em ganho operacional direto.",
      "Boa evidencia de software aplicado a industria e a rotinas tecnicas de alto atrito.",
    ],
    sections: [
      {
        title: "Problema resolvido",
        content: [
          "Este projeto se destaca por sair da teoria e atuar diretamente sobre um processo operacional que consumia tempo e energia de forma desnecessaria.",
          "O valor principal nao esta apenas no codigo, mas em como ele reorganiza o trabalho e cria fluidez para a execucao.",
        ],
      },
      {
        title: "Raciocinio de engenharia",
        content: [
          "Foi necessario equilibrar interface simples, processamento de arquivos e consistencia na geracao de saidas.",
          "Esse equilibrio mostra a capacidade de pensar software como alavanca de produtividade em contextos tecnicos.",
        ],
      },
    ],
    testSteps: [
      "Clonar o repositorio publico correspondente e instalar as dependencias Python do projeto.",
      "Executar a interface local com arquivos de desenho e planilhas de apoio para validar separacao de camadas, organizacao de materiais e exportacao de saida.",
      "Confirmar o ganho operacional comparando o fluxo automatizado com o preparo manual dos arquivos.",
    ],
    verificationNote:
      "Nao consegui validar o link `Layer_desenhos_Laser` publicamente no GitHub. A descricao tecnica deste case foi mantida a partir do stack exibido no portfolio atual e da correspondencia mais provavel encontrada no perfil publico.",
    links: [{ label: "Repositorio", href: "https://github.com/zuckalez0-oss/Layers_e_Cotas_Area" }],
  },
  {
    slug: "landing-page-lypsyos",
    title: "Landing Page da Lypsyos",
    summary: "Uma landing page para divulgar meus trabalhos comerciais, SaaS e solucoes para a industria.",
    impact:
      "Uma rota direta para contato com a empresa proporcionando a possibilidade do possivel cliente testar e validar a aplicacao DBX antes de fazer a assinatura.",
    tagline: "Landing page comercial orientada a conversao, clareza de proposta e geracao de conversas qualificadas.",
    period: "Projeto comercial",
    role: "Estruturacao da narrativa, implementacao e interface",
    status: "Em uso como frente comercial",
    imageUrl: "/images/projects/landing-page-lypsyos.png",
    gallery: [
      {
        src: "/images/projects/landing-page-lypsyos.png",
        alt: "Tela principal da landing page comercial da Lypsyos.",
      },
    ],
    techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
    highlights: [
      { label: "Foco", value: "Conversao comercial" },
      { label: "Stack", value: "Next.js + Tailwind" },
      { label: "Valor", value: "Mais clareza para clientes" },
    ],
    challenge: [
      "Traduzir servicos tecnicos e produtos em uma narrativa comercial clara, objetiva e com boa legibilidade.",
      "Equilibrar posicionamento, credibilidade e incentivo ao contato sem sobrecarregar o usuario com excesso de informacao.",
    ],
    solution: [
      "Estruturei a interface para destacar proposta de valor, organizacao da oferta e chamadas de acao diretas.",
      "A composicao visual foi pensada para reforcar percepcao de profissionalismo e facilitar entendimento rapido do negocio.",
    ],
    outcomes: [
      "Projeto importante para demonstrar versatilidade entre produto tecnico e experiencia comercial.",
      "Serve como vitrine de como apresentacao, mensagem e estrutura visual impactam o contato com clientes.",
    ],
    sections: [
      {
        title: "Objetivo de negocio",
        content: [
          "A landing da Lypsyos funciona como ponte entre capacidade tecnica e demanda comercial, organizando a proposta de valor em uma experiencia clara.",
          "Ela tambem ajuda a validar interesse em solucoes, apresentando caminhos concretos para demonstracao e contato.",
        ],
      },
      {
        title: "Resultado estrategico",
        content: [
          "Mesmo sendo uma interface mais enxuta, o projeto comunica bem intencao, posicionamento e maturidade na apresentacao.",
          "Para um portfolio, isso reforca capacidade de construir nao apenas software, mas tambem narrativa de produto.",
        ],
      },
    ],
    testSteps: [
      "Executar o projeto localmente com `npm install` e `npm run dev`.",
      "Validar a estrutura comercial da landing em desktop e mobile, incluindo clareza de proposta, CTA e navegacao.",
      "Conferir a experiencia publicada em `lypsyos.com` para comparar a execucao local com o ambiente produtivo.",
    ],
    links: [
      { label: "Repositorio", href: "https://github.com/zuckalez0-oss/Layer_desenhos_Laser" },
      { label: "Projeto online", href: "https://lypsyos.com" },
    ],
  },

  // ... (outros projetos acima continuam iguais)

  {
    slug: "dashboard-desenhos-orcamentos",
    title: "Controle de Desenhos e Orçamentos",
    summary: "Painel operacional conectado ao Google Sheets para gestão e acompanhamento de demandas de desenhos técnicos e orçamentos industriais.",
    impact: "Garante uma gestão centralizada de orçamentos para engenharia de corte, eliminando gargalos e trazendo inteligência sobre a conversão de pedidos.",
    tagline: "Gestão visual e simplificada de demandas de engenharia integradas via planilha.",
    period: "Projeto autoral (Versão 2.0.0)",
    role: "Desenvolvimento UI/UX e Integração",
    status: "Em produção",
    imageUrl: "/images/projects/controle-de-desenhos.png",
    gallery: [
      {
        src: "/images/projects/controle-de-desenhos.png",
        alt: "Tela do dashboard Controle de Desenhos e Orçamentos, exibindo métricas diárias, filtros avançados e tabela de registros conectada ao Google Sheets.",
      },
    ],
    techStack: ["JavaScript/TypeScript", "Google Sheets API", "Frontend Web"],
    highlights: [
      { label: "Foco", value: "Gestão de demandas operacionais" },
      { label: "Stack", value: "Web UI + Google Sheets" },
      { label: "Valor", value: "Controle visual e filtros em tempo real" },
    ],
    challenge: [
      "Criar uma interface ágil e moderna para o controle de projetos de corte a laser e plasma, sem forçar a equipe a abandonar a base de dados legada em planilhas.",
      "Garantir que a leitura de dados suporte métricas instantâneas (pendentes, concluídos) e filtros complexos (por status, vendedor, desenhista) em uma única tela.",
    ],
    solution: [
      "Desenvolvimento de um painel web consumindo os dados diretamente do Google Sheets, atuando como um front-end dinâmico e otimizado.",
      "Implementação de cards indicadores para a entrada do dia e uma tabela interativa que permite focar apenas nas solicitações que exigem ação imediata.",
    ],
    outcomes: [
      "Aceleração drástica na consulta de status de projetos industriais e orçamentos.",
      "Experiência de usuário (UX) muito superior à navegação direta em células, mantendo a simplicidade da manutenção dos dados na planilha original.",
    ],
    sections: [
      {
        title: "Contexto",
        content: [
          "Para organizar o fluxo do setor de engenharia e orçamentos, foi necessário evoluir o acompanhamento tático das demandas. A equipe precisava de clareza imediata sobre o que estava pendente, concluído ou aguardando link de pasta.",
          "Como a operação já domina o Google Sheets para registros, a solução ideal foi construir um dashboard sobre essa infraestrutura. Ele consome os dados e entrega uma visão corporativa e limpa para o dia a dia.",
        ],
      },
      {
        title: "Decisões técnicas",
        content: [
          "A arquitetura foi pensada para separar completamente a visualização da persistência. O front-end lida com a reatividade, paginação e filtros cruzados (processo, status, cidade, gerente), enquanto o Google Sheets serve como um banco de dados acessível.",
          "O design inclui feedback visual rápido (tags de status, ícones) e um modal lateral de detalhes, garantindo que o usuário tenha o panorama geral e as informações específicas de cada projeto na mesma tela.",
        ],
      },
    ],
    businessImpact: {
      sectionTitle: "O impacto do projeto no negócio",
      columns: [
        {
          title: "IMPACTO OPERACIONAL",
          content: "Gestão altamente eficiente e centralizada das demandas de orçamento de peças cortadas no laser, plasma e oxicorte. O painel elimina completamente os gargalos manuais de acompanhamento e acelera o tempo de resposta entre a engenharia e o setor comercial."
        },
        {
          title: "RESOLUÇÃO DA DOR",
          content: "Eliminação completa do ponto cego da operação através de inteligência de dados. A plataforma entrega previsibilidade comercial: permite mapear o comportamento da carteira para identificar qual cliente ou filial gera maior volume, além de rastrear a taxa exata de quantos orçamentos solicitados viram de fato um pedido fechado."
        }
      ]
    },
    links: [],
  },
];

export function getProjects() {
  return projects;
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

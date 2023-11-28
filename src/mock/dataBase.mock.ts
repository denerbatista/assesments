import { ISimulator } from "./interfaces";

export const dataBaseMock: ISimulator = {
  name: "Prova de Conhecimento",
  questions: [
    {
      title: "O que significa API?",
      right: "Application Programming Interface",
      options: [
        "Application Programming Interface",
        "Advanced Programming Interface",
        "Automated Programming Interface",
      ],
    },
    {
      title:
        "Qual é a principal responsabilidade do back-end em uma aplicação?",
      right: "Gerenciar a lógica de negócios e o acesso ao banco de dados",
      options: [
        "Lidar com a interface do usuário",
        "Gerenciar a lógica de negócios e o acesso ao banco de dados",
        "Implementar o design e a aparência da aplicação",
      ],
    },
    {
      title:
        "Qual é o framework Node.js recomendado para desenvolvimento back-end usando TypeScript?",
      right: "NestJs",
      options: ["Express", "NestJs", "Koa"],
    },
    {
      title: "Qual é a principal função do Prisma ORM?",
      right: "Mapeamento objeto-relacional para bancos de dados",
      options: [
        "Framework de front-end",
        "Mapeamento objeto-relacional para bancos de dados",
        "Linguagem de consulta para APIs REST",
      ],
    },
    {
      title: "O que é TypeScript?",
      right: "Uma extensão do JavaScript que adiciona tipagem estática",
      options: [
        "Uma linguagem de marcação",
        "Uma extensão do JavaScript que adiciona tipagem estática",
        "Um sistema operacional",
      ],
    },
    {
      title:
        "Quais são as tecnologias principais para desenvolvimento front-end?",
      right: "React, Angular, Vue",
      options: [
        "HTML, CSS, Python",
        "JavaScript, TypeScript, Java",
        "React, Angular, Vue",
      ],
    },
    {
      title: "Qual é o objetivo do Electron em conjunto com React?",
      right: "Desenvolvimento de aplicativos desktop usando tecnologias web",
      options: [
        "Desenvolvimento de aplicativos mobile",
        "Desenvolvimento de aplicativos desktop usando tecnologias web",
        "Desenvolvimento de jogos em Unity",
      ],
    },
    {
      title: "O que significa CSS?",
      right: "Cascading Style Sheets",
      options: [
        "Computer Style Sheets",
        "Creative Style Sheets",
        "Cascading Style Sheets",
      ],
    },
    {
      title: "O que é o Swagger?",
      right: "Uma especificação para documentação de APIs",
      options: [
        "Uma ferramenta para criar animações em páginas web",
        "Uma especificação para documentação de APIs",
        "Um framework para desenvolvimento mobile",
      ],
    },
    {
      title: "Qual é o principal uso do GitHub?",
      right: "Rede social",
      options: [
        "Rede social",
        "Plataforma para hospedar e revisar código-fonte",
        "Ferramenta de design gráfico",
      ],
    },
    {
      title: "O que significa REST no contexto de APIs web?",
      right: "Representational State Transfer",
      options: [
        "Representational State Transfer",
        "Responsive Environment for Server Tasks",
        "Random Endpoint Service Transfer",
      ],
    },
    {
      title: "O que é uma rota no desenvolvimento back-end?",
      right:
        "Um caminho específico em uma aplicação para lidar com solicitações HTTP",
      options: [
        "Um caminho físico",
        "Um meio de transporte",
        "Um caminho específico em uma aplicação para lidar com solicitações HTTP",
      ],
    },
    {
      title: "O que é Dependency Injection no NestJs?",
      right: "Um padrão de projeto que ajuda a controlar a criação de objetos",
      options: [
        "Uma técnica para tratar dependências químicas",
        "Um padrão de projeto que ajuda a controlar a criação de objetos",
        "Uma função de console no JavaScript",
      ],
    },
    {
      title:
        "Como você define uma relação 'muitos para muitos' (many-to-many) com o Prisma ORM?",
      right: "@manyToMany()",
      options: [
        "@relation('many-to-many')",
        "@manyToMany()",
        "@hasManyToMany()",
      ],
    },
    {
      title:
        "Em TypeScript, como você define um tipo de dados que pode ser uma string ou um número?",
      right: "type StringOrNumber = string | number;",
      options: [
        "type StringOrNumber = string | number;",
        "let StringOrNumber: string | number;",
        "interface StringOrNumber extends string, number {}",
      ],
    },
    {
      title:
        "O que são frameworks JavaScript populares para desenvolvimento front-end?",
      right: "React, Angular, Vue",
      options: [
        "Django, Flask, Express",
        "React, Angular, Vue",
        "Java, C#, Python",
      ],
    },
    {
      title:
        "Qual é a principal vantagem de usar o Electron para desenvolvimento de aplicativos desktop com React?",
      right:
        "Possibilidade de empacotar aplicativos para Windows, macOS e Linux",
      options: [
        "Suporte nativo a dispositivos móveis",
        "Possibilidade de empacotar aplicativos para Windows, macOS e Linux",
        "Melhor desempenho em navegadores web",
      ],
    },
    {
      title: "O que significa a cascata em Cascading Style Sheets (CSS)?",
      right:
        "A aplicação de estilos de várias fontes, onde as regras se sobrepõem",
      options: [
        "Uma cachoeira de estilos",
        "Um padrão de estilo específico",
        "A aplicação de estilos de várias fontes, onde as regras se sobrepõem",
      ],
    },
    {
      title: "Qual é o principal propósito do Swagger na documentação de APIs?",
      right: "Padronizar a documentação de APIs REST",
      options: [
        "Criar animações interativas",
        "Padronizar a documentação de APIs REST",
        "Realizar testes automatizados",
      ],
    },
    {
      title: "Além de hospedar código-fonte, o que mais o GitHub oferece?",
      right: "Controle de versão distribuído",
      options: [
        "Serviços de streaming",
        "Controle de versão distribuído",
        "Plataforma de jogos online",
      ],
    },
  ],
};

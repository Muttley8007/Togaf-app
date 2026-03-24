// TOGAF TOOL v0.8.3
// lesson1.js

const lesson1 = {
  title: "Lesson 1 - TOGAF Foundations",
  description: "Understand TOGAF, enterprise architecture, domains, ADM and requirements.",

  cards: [
    {
      title: "What is TOGAF?",
      summary: "A framework for guiding enterprise architecture decisions.",
      concept: "TOGAF is a structured framework used to design, plan, implement, and govern enterprise architecture. It helps organisations align business goals with data, applications, and technology so change is coordinated rather than fragmented.",
      why: "Without a common architecture approach, organisations often make disconnected decisions across teams. TOGAF provides a consistent structure for aligning strategy, systems, information, and technology.",
      analogy: "TOGAF is like a city blueprint and planning framework. Instead of building roads, utilities, and buildings randomly, everything is planned so the city can grow in a connected and governed way.",

      textbook: {
        intro: "TOGAF is an enterprise architecture framework. In practice, that means it gives organisations a structured way to think about change at the enterprise level rather than treating business, data, applications, and technology as separate problems.",
        sections: [
          {
            heading: "Purpose",
            body: "The purpose of TOGAF is to provide a repeatable and governed approach for developing and using enterprise architecture. It helps organisations move from current state to future state with more consistency and less duplication."
          },
          {
            heading: "What it includes",
            body: "TOGAF includes the Architecture Development Method, guidance on architecture content, and governance concepts. So it is not just a definition of architecture — it is a practical framework for doing architecture work."
          },
          {
            heading: "Why organisations use it",
            body: "Organisations use TOGAF because large-scale change usually affects multiple layers at once. A business decision may drive data changes, which drive application changes, which then affect technology platforms. TOGAF helps keep those relationships visible."
          },
          {
            heading: "What it is not",
            body: "TOGAF is not a software development lifecycle and not a project management methodology. It does not replace delivery methods. Instead, it helps shape and govern the architectural direction within which delivery happens."
          }
        ]
      },

      references: [
        {
          label: "TOGAF Standard Overview",
          url: "https://www.opengroup.org/togaf"
        },
        {
          label: "TOGAF Standard (10th Edition) - Official",
          url: "https://publications.opengroup.org/togaf-standard"
        },
        {
          label: "Architecture Development Method (ADM)",
          url: "https://www.opengroup.org/togaf/adm"
        }
      ],

      detail: "TOGAF provides a method, a common vocabulary, and a way to think about architecture as an enterprise capability rather than just a one-off design exercise.",
      example: "If an organisation wants to modernise customer service, TOGAF helps make sure business goals, customer data, applications, and infrastructure are considered together instead of each team making separate decisions.",
      exam: [
        "TOGAF is an enterprise architecture framework",
        "It supports alignment across business and IT",
        "The ADM is central, but TOGAF is broader than just the ADM",
        "TOGAF is not a project delivery method"
      ],
      takeaway: "TOGAF provides a structured way to align business goals with enterprise-wide architectural change."
    },

    {
      title: "What is Enterprise Architecture?",
      summary: "The structure of the organisation across business and technology.",
      concept: "Enterprise architecture defines how business processes, data, applications and technology work together. It gives an organisation a way to understand its current state, define a future state, and plan how to move between them.",
      why: "It prevents siloed decisions and gives a whole-of-organisation view. Instead of choosing systems or processes in isolation, enterprise architecture helps decisions fit the broader strategy.",
      analogy: "Like a full city map showing roads, services, districts, and infrastructure. It helps you see how everything connects before making changes.",
      detail: "Enterprise architecture links strategy to execution. It provides structure for understanding relationships between business capabilities, information, systems, and technology platforms.",
      example: "Before building a new system, enterprise architecture checks whether it fits the bigger picture, duplicates existing capability, or creates new dependencies.",
      exam: [
        "Enterprise architecture links strategy and execution",
        "It is broader than just IT",
        "It helps describe current state and future state"
      ],
      takeaway: "Enterprise architecture connects business strategy to systems and technology."
    },

    {
      title: "Architecture Domains",
      summary: "The four areas TOGAF uses to structure architecture.",
      concept: "TOGAF divides architecture into Business, Data, Application, and Technology domains. Each domain focuses on a different dimension of the enterprise, but all four work together.",
      why: "Breaking architecture into domains makes complexity manageable. It gives architects a way to organise thinking without losing sight of how the parts interact.",
      analogy: "Like layers of a city: business is what the city does, data is the information flowing through it, applications are the services people use, and technology is the infrastructure underneath.",
      detail: "Business Architecture focuses on capabilities, processes, and stakeholders. Data Architecture focuses on information structure and governance. Application Architecture focuses on systems and their interactions. Technology Architecture focuses on platforms and infrastructure.",
      example: "Changing a customer service platform might affect business processes, customer data, application interfaces, and the hosting environment.",
      exam: [
        "Know all four domains",
        "Business, Data, Application, Technology",
        "Security is important but not one of the four core domains"
      ],
      takeaway: "The four domains provide a structured way to think about the enterprise."
    },

    {
      title: "The ADM",
      summary: "TOGAF’s core method.",
      concept: "The Architecture Development Method is the central method in TOGAF. It provides a repeatable cycle for developing, governing, and evolving architecture.",
      why: "It gives a structured approach instead of reinventing the process each time. That makes architecture work more consistent, repeatable, and easier to govern.",
      analogy: "Like a city planning cycle that starts with a vision, moves through design and implementation, and then adjusts as the city grows and changes.",
      detail: "The ADM is iterative and continuous, not strictly linear. It supports ongoing refinement as business needs, constraints, and priorities evolve.",
      example: "An organisation modernising a legacy platform can use the ADM to move from vision, through business and technology architecture, into implementation planning and change management.",
      exam: [
        "ADM = Architecture Development Method",
        "The ADM is iterative",
        "The ADM is the core method in TOGAF"
      ],
      takeaway: "The ADM is a repeatable architecture cycle for planning and managing change."
    },

    {
      title: "Requirements Management",
      summary: "Requirements are continuous.",
      concept: "Requirements are managed throughout the entire ADM lifecycle rather than being captured once and forgotten. They evolve as business and architecture understanding improves.",
      why: "Requirements change and must stay aligned. If they are not continuously managed, the architecture can drift away from business needs.",
      analogy: "Like updating a city plan as conditions change. If population, regulations, or priorities shift, the plan has to shift too.",
      detail: "Requirements management interacts with every phase of the ADM. It helps keep architecture decisions traceable and connected to stakeholder needs.",
      example: "If a new regulation appears halfway through a program, requirements management helps ensure the architecture is updated rather than continuing on outdated assumptions.",
      exam: [
        "Requirements are continuous",
        "Requirements management supports all ADM phases",
        "It is not a one-time activity"
      ],
      takeaway: "Requirements in TOGAF are continuously managed across the architecture lifecycle."
    }
  ],

  quiz: [
    {
      q: "TOGAF is best described as a:",
      a: [
        "Programming language",
        "Project delivery method",
        "Enterprise architecture framework"
      ],
      c: 2
    },
    {
      q: "Enterprise architecture mainly links:",
      a: [
        "Business strategy with systems and technology",
        "Only infrastructure with hardware vendors",
        "Only project plans with budgets"
      ],
      c: 0
    },
    {
      q: "How many core TOGAF architecture domains are there?",
      a: [
        "3",
        "4",
        "5"
      ],
      c: 1
    },
    {
      q: "Which is NOT one of the four core domains?",
      a: [
        "Application",
        "Security",
        "Technology"
      ],
      c: 1
    },
    {
      q: "ADM stands for:",
      a: [
        "Architecture Design Method",
        "Architecture Development Method",
        "Application Delivery Model"
      ],
      c: 1
    },
    {
      q: "The ADM is:",
      a: [
        "A repeatable architecture cycle",
        "A one-off checklist",
        "A budgeting process"
      ],
      c: 0
    },
    {
      q: "Requirements management in TOGAF is:",
      a: [
        "Only done at the start",
        "Continuous across the ADM",
        "Only relevant during implementation"
      ],
      c: 1
    },
    {
      q: "TOGAF helps organisations avoid:",
      a: [
        "Aligned planning",
        "Disconnected decisions",
        "Business strategy"
      ],
      c: 1
    },
    {
      q: "Business, Data, Application, and Technology are:",
      a: [
        "Architecture domains",
        "Project phases",
        "Governance committees"
      ],
      c: 0
    },
    {
      q: "TOGAF is NOT primarily a:",
      a: [
        "Framework for architecture",
        "Software development lifecycle",
        "Guide for enterprise change"
      ],
      c: 1
    }
  ],

  summary: [
    "TOGAF is an enterprise architecture framework.",
    "Enterprise architecture links business strategy with systems and technology.",
    "The four core domains are Business, Data, Application, and Technology.",
    "The ADM is the core method used in TOGAF.",
    "Requirements management is continuous across the architecture lifecycle."
  ]
};

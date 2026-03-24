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
]

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
      concept: "Enterprise architecture defines how business processes, data, applications and technology work together.",
      why: "It prevents siloed decisions and gives a whole-of-organisation view.",
      analogy: "Like a full city map showing roads, services, and infrastructure.",
      detail: "Enterprise architecture links strategy to execution. It helps organisations move from current state to future state.",
      example: "Before building a new system, enterprise architecture checks if it fits the bigger picture.",
      exam: [
        "Enterprise architecture links strategy and execution",
        "It is broader than just IT"
      ],
      takeaway: "Enterprise architecture connects strategy to systems."
    },
    {
      title: "Architecture Domains",
      summary: "The four areas TOGAF uses to structure architecture.",
      concept: "TOGAF divides architecture into Business, Data, Application, and Technology domains.",
      why: "Breaking architecture into domains makes complexity manageable.",
      analogy: "Like layers of a city — purpose, information, services, infrastructure.",
      detail: "Each domain focuses on a different part of the organisation, but they must all align.",
      example: "Changing a system affects data, processes, applications, and infrastructure.",
      exam: [
        "Know all four domains",
        "Security is important but not a core domain"
      ],
      takeaway: "The four domains structure architecture thinking."
    },
    {
      title: "The ADM",
      summary: "TOGAF’s core method.",
      concept: "The ADM is a repeatable cycle for developing and managing architecture.",
      why: "It gives a structured approach instead of reinventing the process.",
      analogy: "Like a city planning cycle that evolves over time.",
      detail: "The ADM is iterative and continuous, not strictly linear.",
      example: "Used to guide system modernisation work.",
      exam: [
        "ADM = Architecture Development Method",
        "It is iterative"
      ],
      takeaway: "The ADM is a repeatable architecture cycle."
    },
    {
      title: "Requirements Management",
      summary: "Requirements are continuous.",
      concept: "Requirements are managed throughout the entire ADM lifecycle.",
      why: "Requirements change and must stay aligned.",
      analogy: "Like updating a city plan as conditions change.",
      detail: "Requirements interact with every phase of the ADM.",
      example: "New regulations update architecture decisions mid-project.",
      exam: [
        "Requirements are continuous",
        "They support all ADM phases"
      ],
      takeaway: "Requirements are continuously managed."
    }
  ],

  quiz: [
    { q: "TOGAF is?", a: ["Framework", "Language"], c: 0 },
    { q: "EA links?", a: ["Games", "Business & IT"], c: 1 },
    { q: "How many domains?", a: ["4", "10"], c: 0 },
    { q: "ADM is?", a: ["Method", "Database"], c: 0 }
  ],

  summary: [
    "TOGAF is an enterprise architecture framework",
    "Enterprise architecture links business and IT",
    "There are four architecture domains",
    "ADM is the core method",
    "Requirements are continuous"
  ]
};

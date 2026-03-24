// TOGAF TOOL v0.7 - RICH CONTENT

const lesson1 = {
  title: "Lesson 1 - TOGAF Foundations",
  description: "Understand TOGAF, enterprise architecture, domains, ADM and requirements.",

  cards: [
    {
      title: "What is TOGAF?",
      summary: "A framework for guiding enterprise architecture decisions.",
      concept: "TOGAF is a structured framework used to design, plan and manage enterprise change. It aligns business goals with systems and technology.",
      why: "Without structure, organisations make disconnected decisions that conflict with each other.",
      analogy: "Like a city blueprint — everything is planned so it connects properly.",
      detail: "TOGAF provides a method (ADM), governance structure, and shared language. It is not about building systems — it is about guiding how decisions are made.",
      example: "Without TOGAF, different teams may choose different systems. With TOGAF, decisions are aligned to a shared architecture.",
      exam: [
        "TOGAF is a framework, not a project method",
        "It aligns business and IT",
        "ADM is central but not the whole framework"
      ],
      takeaway: "TOGAF aligns business and IT change."
    },

    {
      title: "Enterprise Architecture",
      summary: "The structure of the organisation across business and technology.",
      concept: "Enterprise architecture defines how business processes, data, applications and technology work together.",
      why: "It prevents siloed decisions and gives a whole-of-organisation view.",
      analogy: "Like a full city map showing roads, services, and infrastructure.",
      detail: "Enterprise architecture links strategy to execution. It helps organisations move from current state to future state.",
      example: "Before building a new system, EA checks if it fits the bigger picture.",
      exam: [
        "EA links strategy and execution",
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
      example: "Changing a system affects data, processes, and infrastructure.",
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
      detail: "The ADM is iterative and continuous, not linear.",
      example: "Used to guide system modernisation projects.",
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

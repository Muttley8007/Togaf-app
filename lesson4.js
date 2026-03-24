const lesson4 = {
  title: "Lesson 4 - Coming Soon",
  description: "This lesson is planned but not built yet.",
  cards: [
    {
      titl// TOGAF TOOL v1.0.2
// lesson4.js

const lesson4 = {
  title: "Lesson 4 - ADM Cycle & Requirements",
  description: "Understand how the ADM works as a cycle and how requirements drive and connect all phases.",

  cards: [

    {
      title: "The ADM is a Cycle",
      summary: "Architecture is not linear — it is iterative.",
      concept: "The Architecture Development Method (ADM) is not a one-time process. It is a continuous cycle that allows organisations to evolve their architecture over time.",
      why: "Organisations constantly change. A linear approach would become outdated quickly. The ADM cycle allows architecture to adapt and improve continuously.",
      analogy: "The ADM is like maintaining a city over time. You don’t build it once and stop — you continuously plan, upgrade, fix, and expand it.",
      textbook: {
        intro: "The ADM is designed as a cyclical method to support ongoing enterprise transformation rather than a single project lifecycle.",
        sections: [
          {
            heading: "Iteration",
            body: "The ADM supports iteration within phases, between phases, and across the whole cycle."
          },
          {
            heading: "Continuous use",
            body: "Once one cycle completes, another may begin based on new business drivers or changes."
          }
        ]
      },
      detail: "The ADM can loop back at any point depending on new information, changing priorities, or discovered gaps.",
      example: "A company may complete a transformation, then begin a new ADM cycle when entering a new market.",
      exam: [
        "ADM is iterative",
        "It supports continuous architecture development",
        "Not a one-time process"
      ],
      takeaway: "The ADM is a continuous cycle, not a linear process."
    },

    {
      title: "Levels of Architecture",
      summary: "ADM can operate at different levels.",
      concept: "The ADM can be applied at different levels such as enterprise-wide, segment (business unit), or capability level.",
      why: "Not all architecture work needs to cover the entire organisation. Different scopes allow flexibility.",
      analogy: "This is like planning a whole city, a suburb, or just a single building — same principles, different scale.",
      detail: "Enterprise-level architecture is broad, while segment or capability architecture focuses on specific areas.",
      example: "A full enterprise transformation vs upgrading just the customer onboarding process.",
      exam: [
        "ADM applies at different levels",
        "Enterprise, segment, capability"
      ],
      takeaway: "ADM is scalable depending on scope."
    },

    {
      title: "Requirements Management",
      summary: "Requirements exist across all phases.",
      concept: "Requirements Management is a central function in TOGAF that sits outside the ADM phases and interacts with all of them.",
      why: "Requirements do not belong to a single phase. They evolve, get refined, and influence decisions across the entire ADM cycle.",
      analogy: "Requirements are like the rules and needs of a city’s population — they influence every decision, from planning to construction to maintenance.",
      textbook: {
        intro: "Requirements Management ensures that architecture development is driven by actual business needs and that those needs are tracked and managed over time.",
        sections: [
          {
            heading: "Central role",
            body: "Requirements Management interacts with every ADM phase, feeding in new requirements and receiving updates."
          },
          {
            heading: "Ongoing refinement",
            body: "Requirements are continuously refined as architecture develops and new insights are discovered."
          }
        ]
      },
      detail: "Requirements are captured, validated, prioritised, and tracked throughout the ADM cycle.",
      example: "A requirement for faster customer onboarding may influence business, application, and technology architecture decisions.",
      exam: [
        "Requirements Management is central",
        "It interacts with all ADM phases",
        "Requirements evolve over time"
      ],
      takeaway: "Requirements Management connects and drives the entire ADM."
    },

    {
      title: "Iteration Types",
      summary: "There are different ways the ADM iterates.",
      concept: "TOGAF defines different types of iteration: within a phase, between phases, and across the full ADM cycle.",
      why: "Not all architecture work progresses neatly. Iteration allows flexibility when new information or changes arise.",
      analogy: "This is like revisiting parts of a city plan when new constraints appear — you may adjust a single street, a whole district, or the entire city plan.",
      detail: "Iteration within a phase refines details, between phases revisits decisions, and across cycles supports continuous transformation.",
      example: "Revisiting Business Architecture after discovering a data constraint during later phases.",
      exam: [
        "Iteration within phases",
        "Iteration between phases",
        "Iteration across cycles"
      ],
      takeaway: "Iteration allows the ADM to adapt at multiple levels."
    },

    {
      title: "How Everything Connects",
      summary: "ADM is a connected system, not separate steps.",
      concept: "The ADM phases are not isolated. They are connected through iteration and driven by requirements, forming a complete system for managing change.",
      why: "Understanding connections is more important than memorising phases. The value of TOGAF comes from how everything works together.",
      analogy: "Think of the ADM as a living system. Each part affects the others, and nothing operates in isolation.",
      detail: "Requirements feed all phases, iteration links them, and governance ensures alignment across the system.",
      example: "A change in requirements can trigger updates across multiple phases, not just one.",
      exam: [
        "ADM is interconnected",
        "Requirements link all phases",
        "Iteration connects decisions"
      ],
      takeaway: "TOGAF works as a system, not a checklist of phases."
    }

  ],

  quiz: [
    {
      q: "The ADM is best described as:",
      a: [
        "A linear process",
        "A one-time activity",
        "A continuous cycle"
      ],
      c: 2
    },
    {
      q: "Requirements Management sits:",
      a: [
        "Only in Phase A",
        "Outside and across all phases",
        "Only in Phase H"
      ],
      c: 1
    },
    {
      q: "ADM can operate at:",
      a: [
        "Only enterprise level",
        "Multiple levels",
        "Only project level"
      ],
      c: 1
    },
    {
      q: "Iteration can occur:",
      a: [
        "Only at the end",
        "Only between cycles",
        "Within and between phases"
      ],
      c: 2
    },
    {
      q: "Requirements:",
      a: [
        "Stay fixed",
        "Evolve over time",
        "Are only defined once"
      ],
      c: 1
    },
    {
      q: "Why is ADM iterative?",
      a: [
        "Because organisations change",
        "To slow things down",
        "To avoid planning"
      ],
      c: 0
    },
    {
      q: "Requirements influence:",
      a: [
        "Only business architecture",
        "Only technology",
        "All ADM phases"
      ],
      c: 2
    },
    {
      q: "ADM is:",
      a: [
        "A checklist",
        "A system",
        "A coding method"
      ],
      c: 1
    },
    {
      q: "Iteration helps:",
      a: [
        "Avoid change",
        "Adapt to change",
        "Remove requirements"
      ],
      c: 1
    },
    {
      q: "TOGAF works best when:",
      a: [
        "Phases are isolated",
        "Everything is connected",
        "Only technology is considered"
      ],
      c: 1
    }
  ],

  summary: [
    "The ADM is a continuous, iterative cycle.",
    "It can operate at different levels of scope.",
    "Requirements Management sits at the centre of all phases.",
    "Iteration occurs within, between, and across ADM cycles.",
    "TOGAF works as a connected system rather than isolated steps."
  ]
};

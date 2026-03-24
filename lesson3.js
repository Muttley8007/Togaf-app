// TOGAF TOOL v1.0.1
// lesson3.js

const lesson3 = {
  title: "Lesson 3 - ADM Later Phases",
  description: "Understand Phases E, F, G, and H of the ADM and how architecture moves from design into delivery and ongoing change.",

  cards: [
    {
      title: "Phase E - Opportunities and Solutions",
      summary: "Identify solution directions and major work packages.",
      concept: "Phase E turns the architecture work into a practical direction for delivery. It looks at solution options, groups work into major building blocks or work packages, and starts shaping how the target architecture could be realised.",
      why: "Without this phase, architecture can remain theoretical. Phase E helps bridge the gap between architecture definition and actual implementation thinking.",
      analogy: "This is like deciding which major projects a city needs after the master plan is complete. You know the target city shape, so now you identify the major roads, utilities, and precinct projects that will make it real.",

      textbook: {
        intro: "Phase E focuses on translating architecture into actionable solution thinking. The goal is not yet to produce a full detailed implementation plan, but to identify viable solution approaches and major opportunities.",
        sections: [
          {
            heading: "Purpose",
            body: "The purpose of Phase E is to identify the major solution directions needed to move from baseline to target architecture."
          },
          {
            heading: "What happens here",
            body: "Architects consider candidate solutions, major transition approaches, and work packages. This can include deciding whether existing capabilities can be reused or whether new solution components are required."
          },
          {
            heading: "Why it matters",
            body: "This phase makes architecture practical. It helps an organisation move from target-state thinking into structured solution planning."
          }
        ]
      },

      references: [
        {
          label: "TOGAF Standard Overview",
          url: "https://www.opengroup.org/togaf"
        }
      ],

      detail: "Phase E is where the architecture starts to connect directly with implementation choices. It is still architecture-led, but it begins speaking the language of programs, work packages, and solution direction.",
      example: "If the target architecture calls for a modern customer platform, Phase E might identify work packages such as data cleanup, CRM replacement, API layer introduction, and integration simplification.",
      exam: [
        "Phase E is Opportunities and Solutions",
        "It identifies major solution directions and work packages",
        "It bridges architecture into practical delivery thinking"
      ],
      takeaway: "Phase E turns architecture intent into major solution options and work packages."
    },

    {
      title: "Phase F - Migration Planning",
      summary: "Plan how to move from current state to target state over time.",
      concept: "Phase F creates the Migration Plan. It sequences the work packages, considers transition architectures, and defines a roadmap for moving from the baseline to the target architecture in a controlled way.",
      why: "Most organisations cannot jump straight from current state to target state. Migration Planning is what makes change realistic, staged, and manageable.",
      analogy: "This is like deciding the order in which a city redevelopment will happen. You cannot rebuild everything at once, so you plan which roads, districts, and services change first and how temporary states will be handled.",
      detail: "Phase F considers dependencies, business priorities, costs, risks, and implementation timing. It helps shape the practical roadmap that guides delivery over time.",
      example: "An organisation might move first to shared identity management, then modernise customer data, then replace major front-end systems in stages rather than all at once.",
      exam: [
        "Phase F is Migration Planning",
        "It sequences work packages and transition states",
        "It creates a practical roadmap"
      ],
      takeaway: "Phase F defines the staged roadmap for moving from baseline to target architecture."
    },

    {
      title: "Phase G - Implementation Governance",
      summary: "Ensure implementation stays aligned with the architecture.",
      concept: "Phase G provides architecture oversight during implementation. It checks that the delivery work remains aligned with the approved architecture and that deviations are identified and managed properly.",
      why: "Even a strong architecture can fail if implementation drifts away from it. Phase G helps maintain alignment between design intent and delivered reality.",
      analogy: "This is like having city inspectors and planners review whether construction is actually following the approved city plan rather than drifting into shortcuts or inconsistent local decisions.",
      detail: "Implementation Governance can include architecture compliance reviews, governance checkpoints, and handling requests for changes or waivers when delivery realities create tension with the architecture.",
      example: "If a project team wants to introduce a custom integration that conflicts with the target integration pattern, Phase G is where that gets reviewed and governed.",
      exam: [
        "Phase G is Implementation Governance",
        "It checks implementation against architecture intent",
        "Compliance and controlled deviation matter here"
      ],
      takeaway: "Phase G keeps implementation aligned with the approved architecture through governance and compliance."
    },

    {
      title: "Phase H - Architecture Change Management",
      summary: "Manage change to the architecture over time.",
      concept: "Phase H ensures the architecture remains relevant as the organisation changes. It monitors drivers for change, assesses impacts, and determines whether the current architecture should be updated or whether a new ADM cycle should begin.",
      why: "Architecture is not static. Organisations, technologies, regulations, and priorities change, so architecture must be actively managed rather than treated as finished.",
      analogy: "This is like maintaining and updating a long-term city plan as new population growth, transport needs, regulations, or economic shifts emerge.",
      detail: "Phase H looks for change triggers, evaluates whether architecture changes are minor or major, and helps decide how those changes should be governed. Sometimes this means a small update; other times it means starting another full architecture cycle.",
      example: "A new regulatory requirement or major business model shift might force the organisation to revisit its architecture and begin a fresh cycle of planning and design.",
      exam: [
        "Phase H is Architecture Change Management",
        "It manages ongoing change to the architecture",
        "A new ADM cycle may be triggered here"
      ],
      takeaway: "Phase H ensures architecture remains current and responsive as business and technology conditions change."
    },

    {
      title: "How Phases E to H Work Together",
      summary: "These phases move architecture into delivery, governance, and ongoing evolution.",
      concept: "Phases E to H complete the later part of the ADM by taking architecture from solution direction, into migration planning, through governed implementation, and then into continuous change management.",
      why: "Understanding the flow between these phases is important because TOGAF is not just about defining architecture. It is also about making architecture real, controlling it during delivery, and evolving it over time.",
      analogy: "If earlier ADM phases design the city, these later phases decide what to build first, oversee the construction, and then keep the city plan current as the city keeps changing.",
      detail: "Phase E identifies solution directions. Phase F sequences them into a roadmap. Phase G governs delivery against the architecture. Phase H keeps the architecture alive after implementation by managing change.",
      example: "A digital transformation may identify solution streams in Phase E, plan releases and dependencies in Phase F, govern implementation decisions in Phase G, and then respond to market or regulatory changes in Phase H.",
      exam: [
        "E = Opportunities and Solutions",
        "F = Migration Planning",
        "G = Implementation Governance",
        "H = Architecture Change Management"
      ],
      takeaway: "The later ADM phases turn architecture into governed delivery and keep it relevant over time."
    }
  ],

  quiz: [
    {
      q: "Phase E is mainly about:",
      a: [
        "Detailed coding standards",
        "Identifying solution directions and work packages",
        "Managing audit logs"
      ],
      c: 1
    },
    {
      q: "Phase F focuses on:",
      a: [
        "Migration Planning",
        "Business Architecture",
        "Architecture Principles"
      ],
      c: 0
    },
    {
      q: "Which phase checks that implementation stays aligned with the architecture?",
      a: [
        "Phase G",
        "Phase B",
        "Phase H"
      ],
      c: 0
    },
    {
      q: "Phase H is concerned with:",
      a: [
        "Architecture Change Management",
        "Technology procurement only",
        "Creating the first Architecture Vision"
      ],
      c: 0
    },
    {
      q: "Why is Phase F important?",
      a: [
        "It provides a staged roadmap from baseline to target",
        "It replaces governance",
        "It writes application code"
      ],
      c: 0
    },
    {
      q: "Implementation Governance is mainly about:",
      a: [
        "Keeping delivery aligned with architecture intent",
        "Replacing project management",
        "Ignoring deviations from standards"
      ],
      c: 0
    },
    {
      q: "Which later ADM phase comes first?",
      a: [
        "Phase H",
        "Phase F",
        "Phase E"
      ],
      c: 2
    },
    {
      q: "A major new business driver discovered after implementation would most likely be handled in:",
      a: [
        "Phase H",
        "Phase C",
        "Phase A only"
      ],
      c: 0
    },
    {
      q: "Phase E helps architecture become:",
      a: [
        "More abstract",
        "More practical and solution-oriented",
        "Less connected to delivery"
      ],
      c: 1
    },
    {
      q: "The correct later-phase order is:",
      a: [
        "E, F, G, H",
        "F, E, H, G",
        "G, F, E, H"
      ],
      c: 0
    }
  ],

  summary: [
    "Phase E identifies solution directions and major work packages.",
    "Phase F creates the migration roadmap from current to target state.",
    "Phase G governs implementation so delivery stays aligned with architecture.",
    "Phase H manages ongoing changes to the architecture over time.",
    "Together, Phases E to H move architecture from design into delivery and evolution."
  ]
};

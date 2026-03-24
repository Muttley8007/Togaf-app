// TOGAF TOOL v1.0.5
// lesson7.js

const lesson7 = {
  title: "Lesson 7 - Architecture Governance",
  description: "Understand how architecture is controlled, enforced, and kept aligned through governance and compliance.",

  cards: [

    {
      title: "What is Architecture Governance?",
      summary: "Ensuring architecture is followed and controlled.",
      concept: "Architecture Governance is the framework used to ensure that architecture decisions are defined, controlled, and followed across the organisation.",
      why: "Without governance, architecture becomes inconsistent and fragmented as teams make independent decisions.",
      analogy: "Governance is like city laws and regulations — without them, buildings would be unsafe and inconsistent.",
      textbook: {
        intro: "Architecture Governance ensures that architecture aligns with business goals and is consistently applied across the enterprise.",
        sections: [
          {
            heading: "Control",
            body: "Defines how architecture decisions are made and enforced."
          },
          {
            heading: "Alignment",
            body: "Ensures all solutions align with enterprise strategy."
          }
        ]
      },
      detail: "It includes processes, roles, and structures that guide and control architecture work.",
      example: "Ensuring all new systems follow integration standards.",
      exam: [
        "Governance ensures control",
        "Ensures alignment",
        "Prevents inconsistency"
      ],
      takeaway: "Governance ensures architecture is followed, not just defined."
    },

    {
      title: "Architecture Board",
      summary: "The decision-making body.",
      concept: "The Architecture Board is responsible for reviewing, approving, and governing architecture decisions.",
      why: "A central authority is needed to ensure consistency and resolve conflicts.",
      analogy: "The Architecture Board is like a city planning council that approves major developments.",
      detail: "It defines standards, reviews designs, and enforces compliance.",
      example: "Approving or rejecting a system design that does not meet standards.",
      exam: [
        "Architecture Board governs decisions",
        "Approves architectures"
      ],
      takeaway: "The Architecture Board is the authority for architecture decisions."
    },

    {
      title: "Compliance Assessments",
      summary: "Checking if architecture is followed.",
      concept: "Compliance assessments evaluate whether solutions align with the defined architecture.",
      why: "Without checks, governance has no enforcement.",
      analogy: "Like building inspections ensuring construction follows approved plans.",
      detail: "They are performed at key points during delivery.",
      example: "Reviewing a system before deployment to ensure it meets architecture standards.",
      exam: [
        "Compliance checks alignment",
        "Performed during delivery"
      ],
      takeaway: "Compliance ensures architecture is actually followed."
    },

    {
      title: "Architecture Contracts",
      summary: "Formal agreements between stakeholders.",
      concept: "Architecture Contracts define agreements between architecture and implementation teams.",
      why: "They ensure expectations and responsibilities are clearly defined.",
      analogy: "Like a contract between a client and builder outlining what must be delivered.",
      textbook: {
        intro: "Architecture Contracts formalise the relationship between architecture and delivery.",
        sections: [
          {
            heading: "Expectations",
            body: "Defines what must be delivered and how it aligns with architecture."
          },
          {
            heading: "Accountability",
            body: "Ensures both sides understand their responsibilities."
          }
        ]
      },
      detail: "They help manage scope, expectations, and compliance.",
      example: "An agreement that a system must use specific integration standards.",
      exam: [
        "Contracts define agreements",
        "Ensure accountability"
      ],
      takeaway: "Architecture Contracts formalise expectations between teams."
    },

    {
      title: "Governance vs Management",
      summary: "They are not the same.",
      concept: "Governance focuses on control and direction, while management focuses on execution and delivery.",
      why: "Confusing the two can lead to either over-control or lack of direction.",
      analogy: "Governance is setting the rules, management is playing the game.",
      detail: "Governance defines what should be done, management ensures it gets done.",
      example: "Governance sets standards, project teams implement them.",
      exam: [
        "Governance = direction",
        "Management = execution"
      ],
      takeaway: "Governance sets direction, management delivers."
    },

    {
      title: "Why Governance Matters",
      summary: "Prevents chaos and misalignment.",
      concept: "Governance ensures that architecture remains consistent, aligned, and effective across the organisation.",
      why: "Without governance, systems diverge, duplication increases, and costs rise.",
      analogy: "Without traffic rules, even the best roads would result in accidents.",
      detail: "It ensures long-term sustainability and alignment.",
      example: "Preventing teams from building duplicate systems.",
      exam: [
        "Prevents duplication",
        "Ensures alignment",
        "Controls decisions"
      ],
      takeaway: "Governance keeps architecture aligned and sustainable."
    },

    {
      title: "How It All Connects",
      summary: "Governance forms the control system.",
      concept: "Governance uses boards, compliance, and contracts to ensure architecture is applied consistently.",
      why: "Understanding the system is more important than memorising components.",
      analogy: "Think of governance as the control system of a city — rules, inspections, and approvals all working together.",
      detail: "Each element supports control, alignment, and enforcement.",
      example: "A project reviewed, approved, and monitored through governance processes.",
      exam: [
        "Governance is a system",
        "Uses multiple mechanisms"
      ],
      takeaway: "Governance ensures architecture works in practice."
    }

  ],

  quiz: [
    {
      q: "Architecture Governance ensures:",
      a: [
        "Random decisions",
        "Alignment and control",
        "Only delivery speed"
      ],
      c: 1
    },
    {
      q: "The Architecture Board:",
      a: [
        "Builds systems",
        "Approves architecture decisions",
        "Writes code"
      ],
      c: 1
    },
    {
      q: "Compliance assessments:",
      a: [
        "Ignore standards",
        "Check alignment",
        "Only happen at the start"
      ],
      c: 1
    },
    {
      q: "Architecture Contracts:",
      a: [
        "Are informal",
        "Define agreements",
        "Are optional"
      ],
      c: 1
    },
    {
      q: "Governance vs Management:",
      a: [
        "Same thing",
        "Different roles",
        "Irrelevant"
      ],
      c: 1
    },
    {
      q: "Governance focuses on:",
      a: [
        "Execution",
        "Direction and control",
        "Coding"
      ],
      c: 1
    },
    {
      q: "Management focuses on:",
      a: [
        "Control only",
        "Execution",
        "Standards only"
      ],
      c: 1
    },
    {
      q: "Architecture Board acts like:",
      a: [
        "Developers",
        "Planning authority",
        "Users"
      ],
      c: 1
    },
    {
      q: "Without governance:",
      a: [
        "Everything aligns",
        "Chaos increases",
        "Nothing changes"
      ],
      c: 1
    },
    {
      q: "Governance system includes:",
      a: [
        "Boards, compliance, contracts",
        "Only code",
        "Only diagrams"
      ],
      c: 0
    }
  ],

  summary: [
    "Architecture Governance ensures control and alignment.",
    "The Architecture Board makes key decisions.",
    "Compliance assessments check adherence.",
    "Architecture Contracts define expectations.",
    "Governance and management are different roles.",
    "Governance prevents chaos and ensures consistency."
  ]
};

// TOGAF TOOL v1.0.3
// lesson5.js

const lesson5 = {
  title: "Lesson 5 - Architecture Content",
  description: "Understand what architects actually produce: building blocks, deliverables, artifacts, and the Architecture Repository.",

  cards: [

    {
      title: "What is Architecture Content?",
      summary: "Architecture produces structured outputs.",
      concept: "Architecture content refers to the outputs created during the ADM. These include deliverables, artifacts, and building blocks that describe and guide the enterprise.",
      why: "Without defined outputs, architecture becomes abstract. Content makes architecture tangible, reusable, and actionable.",
      analogy: "If the ADM is the construction process, architecture content is the blueprints, materials, and documentation used to build and maintain the city.",
      textbook: {
        intro: "TOGAF defines architecture content as a structured set of outputs that support architecture development, communication, and governance.",
        sections: [
          {
            heading: "Three key categories",
            body: "Architecture content is divided into deliverables, artifacts, and building blocks."
          },
          {
            heading: "Purpose",
            body: "These outputs ensure consistency, traceability, and reuse across architecture work."
          }
        ]
      },
      detail: "Content provides the structure needed to describe architecture in a consistent and governed way.",
      example: "Documents, diagrams, models, and reusable components are all forms of architecture content.",
      exam: [
        "Architecture content = outputs",
        "Includes deliverables, artifacts, building blocks"
      ],
      takeaway: "Architecture content makes architecture real and usable."
    },

    {
      title: "Deliverables",
      summary: "Formal outputs of architecture work.",
      concept: "Deliverables are formal work products that are reviewed, agreed upon, and used to govern architecture.",
      why: "Deliverables provide accountability and ensure that architecture outputs are approved and aligned with business goals.",
      analogy: "Deliverables are like official city plans submitted for approval — they represent agreed decisions.",
      textbook: {
        intro: "Deliverables are typically contractual or formal outputs created at key points in the ADM.",
        sections: [
          {
            heading: "Governance role",
            body: "Deliverables are used for review and approval, ensuring alignment with stakeholders."
          }
        ]
      },
      detail: "Examples include architecture definitions, roadmaps, and standards documents.",
      example: "An Architecture Definition Document outlining the target state of the organisation.",
      exam: [
        "Deliverables are formal",
        "Reviewed and approved",
        "Used for governance"
      ],
      takeaway: "Deliverables are the official outputs of architecture work."
    },

    {
      title: "Artifacts",
      summary: "The building pieces of deliverables.",
      concept: "Artifacts are smaller components that make up deliverables, such as diagrams, matrices, and catalogs.",
      why: "Breaking architecture into artifacts allows better clarity, reuse, and communication.",
      analogy: "Artifacts are like individual blueprints, maps, and diagrams used to build a city plan.",
      textbook: {
        intro: "Artifacts describe specific aspects of the architecture and are combined to form deliverables.",
        sections: [
          {
            heading: "Types",
            body: "Common artifact types include catalogs (lists), matrices (relationships), and diagrams (visuals)."
          }
        ]
      },
      detail: "Artifacts are the detailed representations of architecture elements.",
      example: "An application interaction diagram or a data entity catalog.",
      exam: [
        "Artifacts are components",
        "Include catalogs, matrices, diagrams"
      ],
      takeaway: "Artifacts are the detailed building pieces of architecture."
    },

    {
      title: "Building Blocks (ABB vs SBB)",
      summary: "Reusable components of architecture.",
      concept: "Building blocks are reusable components that define capabilities and solutions. There are two types: Architecture Building Blocks (ABB) and Solution Building Blocks (SBB).",
      why: "Separating logical design (ABB) from physical implementation (SBB) allows flexibility and reuse.",
      analogy: "ABBs are like designing a house concept (what it should do), while SBBs are the actual materials and construction used to build it.",
      textbook: {
        intro: "Building blocks support reuse and standardisation across architecture.",
        sections: [
          {
            heading: "ABB",
            body: "Defines required capability in a logical way (what is needed)."
          },
          {
            heading: "SBB",
            body: "Defines the actual implementation (how it is delivered)."
          }
        ]
      },
      detail: "ABBs describe functionality, while SBBs describe real-world implementations such as products or systems.",
      example: "ABB: Customer data management capability. SBB: CRM system like Salesforce.",
      exam: [
        "ABB = logical",
        "SBB = physical",
        "ABBs evolve into SBBs"
      ],
      takeaway: "ABBs define what is needed, SBBs define how it is delivered."
    },

    {
      title: "Architecture Repository",
      summary: "Where all architecture content is stored.",
      concept: "The Architecture Repository is a structured storage for all architecture assets, including models, standards, and reference materials.",
      why: "Without a repository, architecture knowledge is lost or duplicated. The repository enables reuse and governance.",
      analogy: "The repository is like a central library for the city — all plans, rules, and designs are stored there.",
      textbook: {
        intro: "The Architecture Repository provides a structured way to organise architecture content.",
        sections: [
          {
            heading: "Key areas",
            body: "Includes architecture landscape, standards information base, reference library, and governance logs."
          }
        ]
      },
      detail: "It supports consistency, reuse, and traceability across architecture work.",
      example: "A central system storing architecture diagrams, standards, and templates.",
      exam: [
        "Repository stores architecture assets",
        "Supports reuse and governance"
      ],
      takeaway: "The repository is the central store of all architecture knowledge."
    },

    {
      title: "How It All Fits Together",
      summary: "Content forms a structured system.",
      concept: "Deliverables are made up of artifacts, and artifacts describe building blocks. All of this is stored in the Architecture Repository.",
      why: "Understanding relationships is key — not just memorising definitions.",
      analogy: "Think of a city system: materials (building blocks), drawings (artifacts), official plans (deliverables), all stored in a central archive (repository).",
      detail: "This structure ensures architecture is consistent, reusable, and governed.",
      example: "A roadmap deliverable built from diagrams and models describing systems and capabilities.",
      exam: [
        "Deliverables contain artifacts",
        "Artifacts describe building blocks",
        "Repository stores everything"
      ],
      takeaway: "Architecture content is a connected system, not separate concepts."
    }

  ],

  quiz: [
    {
      q: "Architecture content refers to:",
      a: [
        "Only diagrams",
        "Outputs of architecture work",
        "Only software"
      ],
      c: 1
    },
    {
      q: "Deliverables are:",
      a: [
        "Informal notes",
        "Formal outputs",
        "Only diagrams"
      ],
      c: 1
    },
    {
      q: "Artifacts are:",
      a: [
        "Full documents",
        "Components of deliverables",
        "Only databases"
      ],
      c: 1
    },
    {
      q: "ABBs represent:",
      a: [
        "Physical solutions",
        "Logical capabilities",
        "Only technology"
      ],
      c: 1
    },
    {
      q: "SBBs represent:",
      a: [
        "Logical design",
        "Physical implementation",
        "Requirements"
      ],
      c: 1
    },
    {
      q: "The repository is used for:",
      a: [
        "Deleting data",
        "Storing architecture assets",
        "Running code"
      ],
      c: 1
    },
    {
      q: "Artifacts include:",
      a: [
        "Catalogs, matrices, diagrams",
        "Only code",
        "Only reports"
      ],
      c: 0
    },
    {
      q: "Deliverables are used for:",
      a: [
        "Governance",
        "Gaming",
        "Testing only"
      ],
      c: 0
    },
    {
      q: "ABBs evolve into:",
      a: [
        "Requirements",
        "SBBs",
        "Nothing"
      ],
      c: 1
    },
    {
      q: "Architecture content is:",
      a: [
        "Disconnected",
        "A structured system",
        "Random outputs"
      ],
      c: 1
    }
  ],

  summary: [
    "Architecture content includes deliverables, artifacts, and building blocks.",
    "Deliverables are formal outputs used for governance.",
    "Artifacts are components such as diagrams and catalogs.",
    "ABBs define logical capability, SBBs define physical implementation.",
    "The Architecture Repository stores all architecture assets.",
    "All content types are connected as part of a system."
  ]
};

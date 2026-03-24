// TOGAF TOOL v1.0.4
// lesson6.js

const lesson6 = {
  title: "Lesson 6 - Enterprise Continuum & Repository",
  description: "Understand how architecture evolves from generic to specific and how it is stored and reused.",

  cards: [

    {
      title: "Enterprise Continuum",
      summary: "Architecture evolves from generic to specific.",
      concept: "The Enterprise Continuum is a way of classifying architecture assets from general (industry-wide) to specific (organisation-specific).",
      why: "It helps organisations reuse existing knowledge instead of starting from scratch every time.",
      analogy: "Think of it like using a recipe. You start with a general recipe, then adapt it to your own taste and kitchen.",
      textbook: {
        intro: "The Enterprise Continuum provides a framework for organising architecture assets and understanding how they relate.",
        sections: [
          {
            heading: "Range",
            body: "It ranges from Foundation Architectures to Organisation-Specific Architectures."
          }
        ]
      },
      detail: "It supports reuse, consistency, and alignment across architecture work.",
      example: "Using industry standards and adapting them to your organisation.",
      exam: [
        "Continuum = classification",
        "From generic to specific"
      ],
      takeaway: "The Enterprise Continuum shows how architecture evolves."
    },

    {
      title: "Foundation Architecture",
      summary: "The most generic level.",
      concept: "Foundation Architecture includes basic building blocks and standards common across many organisations.",
      why: "It provides a starting point for architecture work.",
      analogy: "Like basic ingredients in cooking — flour, water, salt.",
      detail: "Includes fundamental technologies and standards.",
      example: "Networking standards or basic IT infrastructure patterns.",
      exam: [
        "Foundation = most generic"
      ],
      takeaway: "Foundation architecture is the base layer."
    },

    {
      title: "Common Systems Architecture",
      summary: "Shared across organisations.",
      concept: "This includes systems and architectures common to many organisations or industries.",
      why: "It allows reuse of common solutions.",
      analogy: "Like pre-built house designs used in many suburbs.",
      detail: "Includes common applications like HR or finance systems.",
      example: "ERP systems used across industries.",
      exam: [
        "Common systems = shared solutions"
      ],
      takeaway: "Common systems support reuse across organisations."
    },

    {
      title: "Industry Architecture",
      summary: "Specific to an industry.",
      concept: "Industry Architecture includes patterns and models tailored to specific industries.",
      why: "Different industries have different needs and constraints.",
      analogy: "Like building codes that differ between cities.",
      detail: "Includes domain-specific standards and models.",
      example: "Banking or healthcare architecture standards.",
      exam: [
        "Industry-specific patterns"
      ],
      takeaway: "Industry architecture tailors solutions to a domain."
    },

    {
      title: "Organisation-Specific Architecture",
      summary: "Tailored to one organisation.",
      concept: "This is architecture customised to the specific needs of an organisation.",
      why: "Every organisation has unique processes, systems, and goals.",
      analogy: "Like a custom-built home designed for a specific owner.",
      detail: "Includes internal systems, integrations, and custom processes.",
      example: "Your company’s specific system landscape.",
      exam: [
        "Most specific level"
      ],
      takeaway: "Organisation architecture is fully customised."
    },

    {
      title: "Architecture Repository (Deep View)",
      summary: "Stores and organises architecture assets.",
      concept: "The Architecture Repository contains all architecture content and organises it into structured areas.",
      why: "It ensures architecture knowledge is reusable and governed.",
      analogy: "Like a well-organised library with different sections.",
      textbook: {
        intro: "The repository supports the Enterprise Continuum by storing architecture assets in structured categories.",
        sections: [
          {
            heading: "Architecture Landscape",
            body: "Contains current and target architectures."
          },
          {
            heading: "Standards Information Base",
            body: "Stores standards and guidelines."
          },
          {
            heading: "Reference Library",
            body: "Contains reference models and patterns."
          },
          {
            heading: "Governance Log",
            body: "Tracks decisions and compliance."
          }
        ]
      },
      detail: "Each section supports different aspects of architecture management.",
      example: "A system storing models, standards, and governance records.",
      exam: [
        "Repository supports continuum",
        "Stores structured assets"
      ],
      takeaway: "The repository is structured storage for architecture knowledge."
    },

    {
      title: "How It All Connects",
      summary: "Continuum + repository = reuse system.",
      concept: "The Enterprise Continuum defines how architecture evolves, while the repository stores and organises those assets.",
      why: "Together they enable reuse, consistency, and efficiency.",
      analogy: "The continuum is the concept of how knowledge evolves, the repository is where it is stored.",
      detail: "They work together to prevent duplication and improve architecture quality.",
      example: "Using a reference model from the repository and adapting it for your organisation.",
      exam: [
        "Continuum = classification",
        "Repository = storage"
      ],
      takeaway: "Continuum and repository together enable architecture reuse."
    }

  ],

  quiz: [
    {
      q: "The Enterprise Continuum represents:",
      a: [
        "A process",
        "A classification of architecture",
        "A tool"
      ],
      c: 1
    },
    {
      q: "Foundation Architecture is:",
      a: [
        "Most specific",
        "Most generic",
        "Industry only"
      ],
      c: 1
    },
    {
      q: "Organisation-specific architecture is:",
      a: [
        "Generic",
        "Tailored",
        "Shared"
      ],
      c: 1
    },
    {
      q: "The repository stores:",
      a: [
        "Nothing",
        "Architecture assets",
        "Only code"
      ],
      c: 1
    },
    {
      q: "Continuum supports:",
      a: [
        "Deletion",
        "Reuse",
        "Random design"
      ],
      c: 1
    },
    {
      q: "Industry architecture is:",
      a: [
        "Generic",
        "Domain-specific",
        "Personal"
      ],
      c: 1
    },
    {
      q: "Repository sections include:",
      a: [
        "Landscape, standards, reference",
        "Only diagrams",
        "Only code"
      ],
      c: 0
    },
    {
      q: "Continuum moves from:",
      a: [
        "Specific to generic",
        "Generic to specific",
        "Random to structured"
      ],
      c: 1
    },
    {
      q: "Repository enables:",
      a: [
        "Reuse and governance",
        "Deletion",
        "Isolation"
      ],
      c: 0
    },
    {
      q: "Continuum + repository:",
      a: [
        "Are unrelated",
        "Work together",
        "Replace ADM"
      ],
      c: 1
    }
  ],

  summary: [
    "The Enterprise Continuum classifies architecture from generic to specific.",
    "It includes foundation, common, industry, and organisation levels.",
    "The Architecture Repository stores structured architecture assets.",
    "Repository sections include landscape, standards, reference library, and governance.",
    "Continuum and repository together enable reuse and consistency."
  ]
};

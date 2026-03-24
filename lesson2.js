// TOGAF TOOL v0.9.0
// lesson2.js

const lesson2 = {
  title: "Lesson 2 - ADM Foundations",
  description: "Understand the Preliminary Phase and ADM Phases A to D at a high level.",

  cards: [
    {
      title: "The ADM at a High Level",
      summary: "The ADM is the core cycle used to develop enterprise architecture.",
      concept: "The Architecture Development Method is TOGAF’s central method. It provides a structured, repeatable cycle for developing, governing, and evolving enterprise architecture.",
      why: "Without a repeatable method, architecture work can become inconsistent and heavily dependent on individuals. The ADM creates a shared path for moving from vision to detailed architecture and beyond.",
      analogy: "The ADM is like the master planning cycle for a city: decide where the city is headed, design the layers, plan the build, govern the implementation, and then adapt as the city changes.",

      textbook: {
        intro: "The ADM is the heart of TOGAF. It is designed to support enterprise architecture development as a cycle rather than a one-off exercise. The idea is that architecture is continuously shaped and refined as organisational needs change.",
        sections: [
          {
            heading: "Why the ADM matters",
            body: "The ADM gives architects a common structure for architecture work. It supports consistency, governance, and traceability across large and complex organisations."
          },
          {
            heading: "What the ADM covers",
            body: "It begins with preparation and vision, then moves through business, information systems, and technology architecture, before later phases address solutions, migration, implementation governance, and change."
          },
          {
            heading: "How to think about it",
            body: "Do not think of the ADM as a rigid waterfall. It is iterative. Organisations may revisit phases, refine outputs, and apply the method at different levels depending on the scope of the work."
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
        }
      ],

      detail: "The ADM is both a method and a control mechanism. It helps ensure architecture work remains aligned with business needs, governance expectations, and the wider enterprise context.",
      example: "A government agency redesigning a service can use the ADM to move from vision, through business and technology design, and into governed implementation.",
      exam: [
        "The ADM is the core method in TOGAF",
        "It is iterative, not just linear",
        "It covers more than just technical architecture"
      ],
      takeaway: "The ADM is TOGAF’s repeatable method for developing and evolving enterprise architecture."
    },

    {
      title: "Preliminary Phase",
      summary: "Prepare the organisation and architecture capability before doing architecture work.",
      concept: "The Preliminary Phase sets up the architecture capability. It defines how architecture work will be done, what principles will guide it, how it relates to other frameworks, and how ready the organisation is.",
      why: "Architecture work is much harder if governance, principles, and organisational context are unclear. The Preliminary Phase creates the conditions for architecture work to succeed.",
      analogy: "This phase is like preparing the planning office before designing a city. You define the rules, agree on the standards, and make sure the planners know the boundaries and expectations.",
      detail: "This phase includes defining the enterprise, identifying key drivers, defining architecture principles, selecting the framework approach, clarifying relationships with other management frameworks, and considering architecture maturity.",
      example: "Before starting an enterprise transformation, an organisation may define architecture principles such as reuse, interoperability, and security by design.",
      exam: [
        "The Preliminary Phase prepares the architecture capability",
        "Architecture principles are important outputs",
        "It clarifies the framework and organisational context"
      ],
      takeaway: "The Preliminary Phase prepares the organisation, principles, and architecture capability for the work ahead."
    },

    {
      title: "Phase A - Architecture Vision",
      summary: "Define the scope, stakeholders, and high-level vision for the architecture effort.",
      concept: "Phase A creates the Architecture Vision. It identifies stakeholders, clarifies business goals and drivers, sets the scope, and establishes the high-level value of the proposed architecture work.",
      why: "Without a clear vision, later architecture phases can become disconnected from business intent. Phase A ensures the architecture effort starts with shared purpose and stakeholder support.",
      analogy: "This is like agreeing on the vision for a new city district before drawing detailed maps. Everyone first needs to understand what is being built, why it matters, and who it is for.",
      detail: "Phase A focuses on creating enough clarity to proceed with detailed architecture work. It establishes the business case, confirms scope and constraints, and begins aligning stakeholder expectations.",
      example: "An organisation wanting to improve customer experience might use Phase A to define the transformation vision, expected outcomes, and the major stakeholders involved.",
      exam: [
        "Phase A creates the Architecture Vision",
        "It establishes scope and stakeholder alignment",
        "It connects architecture work to business goals"
      ],
      takeaway: "Phase A ensures the architecture effort starts with a clear vision, business value, and stakeholder alignment."
    },

    {
      title: "Phase B - Business Architecture",
      summary: "Describe how the business should operate to support the vision.",
      concept: "Phase B develops the Business Architecture. It defines business capabilities, processes, organisation, and related elements needed to support the Architecture Vision.",
      why: "Technology decisions should not lead the architecture by themselves. Business Architecture ensures the enterprise first understands what business outcomes and operating model changes are needed.",
      analogy: "This is like deciding what the city must do for its people before choosing roads or utilities. You first define services, functions, and how the city operates.",
      detail: "Phase B looks at the baseline and target business architecture and identifies the gaps between them. It may use concepts such as business capabilities, value streams, organisation maps, and modelling techniques.",
      example: "If a service is too slow or fragmented, Phase B might identify that the business process needs redesign before any system changes are chosen.",
      exam: [
        "Phase B develops the Business Architecture",
        "It compares baseline and target business states",
        "Business capability thinking is important here"
      ],
      takeaway: "Phase B defines how the business should operate to achieve the architecture vision."
    },

    {
      title: "Phase C - Information Systems Architectures",
      summary: "Define the Data and Application Architectures needed to support the business.",
      concept: "Phase C covers the Information Systems Architectures, which includes both Data Architecture and Application Architecture. It defines how information is structured and governed, and how applications support the business.",
      why: "If data and applications are designed separately from business needs, the organisation risks fragmentation, duplication, and poor integration. Phase C keeps them aligned to the target business architecture.",
      analogy: "This is like deciding how information flows through the city and what service systems will run it. The data is the information moving around, and the applications are the service platforms people rely on.",
      detail: "Data Architecture focuses on information structure, ownership, governance, and sharing. Application Architecture focuses on systems, their responsibilities, and how they interact. Together they describe the logical information systems landscape.",
      example: "A customer transformation may require cleaner customer data ownership and a clearer application map showing which systems create, update, and consume customer information.",
      exam: [
        "Phase C covers both Data and Application Architecture",
        "It supports the target Business Architecture",
        "Think about information structure and system interaction"
      ],
      takeaway: "Phase C defines the data and application landscape needed to support the business architecture."
    },

    {
      title: "Phase D - Technology Architecture",
      summary: "Define the technology platforms and infrastructure that support the applications.",
      concept: "Phase D develops the Technology Architecture. It identifies the platforms, infrastructure, and technical services required to support the target applications and data environment.",
      why: "Even good application and data design can fail if the supporting technology is not suitable. Phase D ensures the infrastructure layer is aligned with the rest of the architecture.",
      analogy: "This is like designing the roads, power, utilities, and physical infrastructure that allow the city’s services to function properly.",
      detail: "Technology Architecture may address hosting, platforms, networks, middleware, cloud choices, and emerging technologies. It should support the target Information Systems Architectures and business needs rather than exist as a disconnected technical wish list.",
      example: "If the target application landscape depends on scalable APIs and modern integration patterns, the Technology Architecture must provide the hosting, network, and platform capabilities to support that.",
      exam: [
        "Phase D develops the Technology Architecture",
        "It supports the Information Systems Architectures",
        "Emerging technologies can be a driver for change"
      ],
      takeaway: "Phase D defines the infrastructure and technical platforms needed to support the target architecture."
    }
  ],

  quiz: [
    {
      q: "What is the ADM in TOGAF?",
      a: [
        "A budgeting model",
        "A repeatable architecture method",
        "A software delivery pipeline"
      ],
      c: 1
    },
    {
      q: "The Preliminary Phase mainly focuses on:",
      a: [
        "Preparing the architecture capability and principles",
        "Choosing final infrastructure products",
        "Writing application code"
      ],
      c: 0
    },
    {
      q: "Phase A is about:",
      a: [
        "Technology Architecture",
        "Architecture Vision",
        "Migration Planning"
      ],
      c: 1
    },
    {
      q: "Phase B develops the:",
      a: [
        "Business Architecture",
        "Technology Architecture",
        "Implementation plan"
      ],
      c: 0
    },
    {
      q: "Phase C covers:",
      a: [
        "Only infrastructure",
        "Data and Application Architecture",
        "Only governance"
      ],
      c: 1
    },
    {
      q: "Phase D focuses on:",
      a: [
        "Technology platforms and infrastructure",
        "Business capabilities only",
        "Contract negotiation"
      ],
      c: 0
    },
    {
      q: "Why is Phase A important?",
      a: [
        "It creates stakeholder alignment and vision",
        "It replaces requirements management",
        "It finalises all implementation details"
      ],
      c: 0
    },
    {
      q: "The ADM should be thought of as:",
      a: [
        "A one-time checklist",
        "A rigid waterfall only",
        "An iterative architecture cycle"
      ],
      c: 2
    },
    {
      q: "Which phase sets up architecture principles and context?",
      a: [
        "Preliminary Phase",
        "Phase C",
        "Phase D"
      ],
      c: 0
    },
    {
      q: "Phase C should align to the target:",
      a: [
        "Technology procurement plan",
        "Business Architecture",
        "Audit schedule"
      ],
      c: 1
    }
  ],

  summary: [
    "The ADM is TOGAF’s core, repeatable architecture method.",
    "The Preliminary Phase prepares the architecture capability, principles, and context.",
    "Phase A creates the Architecture Vision and aligns stakeholders.",
    "Phase B develops the Business Architecture.",
    "Phase C develops the Data and Application Architectures.",
    "Phase D develops the Technology Architecture."
  ]
};

// TOGAF TOOL v1.0.6
// lesson8.js

const lesson8 = {
  title: "Lesson 8 - Stakeholders, Concerns & Views",
  description: "Understand how architecture is communicated to different audiences.",

  cards: [

    {
      title: "Stakeholders",
      summary: "People with an interest in architecture.",
      concept: "Stakeholders are individuals or groups who have an interest in or are impacted by the architecture.",
      why: "Different stakeholders care about different things, so architecture must be communicated appropriately.",
      analogy: "Stakeholders are like different residents of a city — each cares about different aspects like transport, safety, or cost.",
      detail: "They include business leaders, users, developers, and operations teams.",
      example: "A CFO cares about cost, while a developer cares about system design.",
      exam: ["Stakeholders have different interests"],
      takeaway: "Architecture must consider multiple stakeholder perspectives."
    },

    {
      title: "Concerns",
      summary: "What stakeholders care about.",
      concept: "Concerns are the key interests or issues that stakeholders want addressed.",
      why: "Understanding concerns ensures architecture addresses real needs.",
      analogy: "Concerns are like what each resident wants from the city — safety, transport, cost.",
      detail: "Concerns drive what architecture must address.",
      example: "Security, performance, cost.",
      exam: ["Concerns drive architecture"],
      takeaway: "Concerns define what matters."
    },

    {
      title: "Views",
      summary: "How architecture is presented.",
      concept: "A view represents architecture from the perspective of specific stakeholder concerns.",
      why: "Different stakeholders need different representations.",
      analogy: "A city map vs a transport map vs a zoning map.",
      detail: "Views simplify complex architecture.",
      example: "A business process diagram vs a technical system diagram.",
      exam: ["Views address concerns"],
      takeaway: "Views tailor architecture communication."
    },

    {
      title: "Viewpoints",
      summary: "Templates for views.",
      concept: "A viewpoint defines how to construct a view.",
      why: "Ensures consistency and standardisation.",
      analogy: "A template for drawing a map.",
      detail: "Defines stakeholders, concerns, and modeling techniques.",
      example: "A standard way to create a data model.",
      exam: ["Viewpoint defines a view"],
      takeaway: "Viewpoints guide how views are created."
    },

    {
      title: "How It All Connects",
      summary: "Stakeholders → concerns → views.",
      concept: "Stakeholders have concerns, which are addressed through views created using viewpoints.",
      why: "Understanding this chain is key to effective communication.",
      analogy: "People → needs → tailored explanations.",
      detail: "This ensures architecture is understood and usable.",
      example: "Different diagrams for executives vs engineers.",
      exam: ["Stakeholders → concerns → views"],
      takeaway: "Architecture must be tailored to its audience."
    }

  ],

  quiz: [
    { q: "Stakeholders are:", a: ["Only developers", "People with interest", "Systems"], c: 1 },
    { q: "Concerns represent:", a: ["Code", "Stakeholder interests", "Tools"], c: 1 },
    { q: "Views are:", a: ["Random diagrams", "Tailored representations", "Databases"], c: 1 },
    { q: "Viewpoints define:", a: ["Code", "How views are created", "Hardware"], c: 1 },
    { q: "Stakeholders drive:", a: ["Concerns", "Code", "Tools"], c: 0 },
    { q: "Views address:", a: ["Concerns", "Nothing", "Only tech"], c: 0 },
    { q: "Viewpoints ensure:", a: ["Chaos", "Consistency", "Speed"], c: 1 },
    { q: "Architecture communication must:", a: ["Be generic", "Be tailored", "Be hidden"], c: 1 },
    { q: "Concerns include:", a: ["Security", "Only code", "Nothing"], c: 0 },
    { q: "Stakeholders differ in:", a: ["Concerns", "Nothing", "Tools"], c: 0 }
  ],

  summary: [
    "Stakeholders have interests in architecture.",
    "Concerns define what matters.",
    "Views present architecture appropriately.",
    "Viewpoints guide how views are created.",
    "Communication must be tailored."
  ]
};

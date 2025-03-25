
export interface DocFile {
  id: string;
  title: string;
  description: string;
  path: string;
  headerImage: string | null;
}

export interface DocFolder {
  id: string;
  name: string;
  files: DocFile[];
}

export interface DocsStructure {
  folders: DocFolder[];
}

export const docsStructure: DocsStructure = {
  folders: [
    {
      id: "vision",
      name: "Vision & Strategy",
      files: [
        {
          id: "vision",
          title: "Our Vision",
          description: "Long-term vision for Tour of Hampi",
          path: "/docs/vision/vision.md",
          headerImage: "/lovable-uploads/a60baad1-ca88-4337-9ca2-9ea9dfc7c585.png"
        },
        {
          id: "strategy",
          title: "Strategy Document",
          description: "Our comprehensive strategy for sustainable tourism",
          path: "/docs/vision/strategy.md",
          headerImage: "/lovable-uploads/a60baad1-ca88-4337-9ca2-9ea9dfc7c585.png"
        },
        {
          id: "goals",
          title: "Goals & Objectives",
          description: "Key goals and objectives for the next 5 years",
          path: "/docs/vision/goals.md",
          headerImage: null
        }
      ]
    },
    {
      id: "initiatives",
      name: "Initiatives",
      files: [
        {
          id: "green",
          title: "Green Initiative",
          description: "Environmental sustainability programs",
          path: "/docs/initiatives/green.md",
          headerImage: "/lovable-uploads/a60baad1-ca88-4337-9ca2-9ea9dfc7c585.png"
        },
        {
          id: "livelihood",
          title: "Livelihood Initiative",
          description: "Supporting local communities",
          path: "/docs/initiatives/livelihood.md",
          headerImage: "/lovable-uploads/a60baad1-ca88-4337-9ca2-9ea9dfc7c585.png"
        },
        {
          id: "trails",
          title: "Trail Creation",
          description: "Development of sustainable tourism trails",
          path: "/docs/initiatives/trails.md",
          headerImage: null
        },
        {
          id: "wellness",
          title: "Wellness Programs",
          description: "Yoga and meditation workshops",
          path: "/docs/initiatives/wellness.md",
          headerImage: null
        },
        {
          id: "bicycles",
          title: "Bicycle Stations",
          description: "Eco-friendly transportation initiative",
          path: "/docs/initiatives/bicycles.md",
          headerImage: null
        }
      ]
    },
    {
      id: "impact",
      name: "Impact & Results",
      files: [
        {
          id: "metrics",
          title: "Impact Metrics",
          description: "Measuring our impact on the community and environment",
          path: "/docs/impact/metrics.md",
          headerImage: null
        },
        {
          id: "case-studies",
          title: "Case Studies",
          description: "Success stories from our initiatives",
          path: "/docs/impact/case-studies.md",
          headerImage: null
        },
        {
          id: "testimonials",
          title: "Testimonials",
          description: "Feedback from community members and partners",
          path: "/docs/impact/testimonials.md",
          headerImage: null
        }
      ]
    },
    {
      id: "resources",
      name: "Resources",
      files: [
        {
          id: "partners",
          title: "Partner Organizations",
          description: "Organizations we work with",
          path: "/docs/resources/partners.md",
          headerImage: null
        },
        {
          id: "funding",
          title: "Funding Opportunities",
          description: "Ways to support our initiatives",
          path: "/docs/resources/funding.md",
          headerImage: null
        },
        {
          id: "volunteer",
          title: "Volunteer Programs",
          description: "How to get involved",
          path: "/docs/resources/volunteer.md",
          headerImage: null
        }
      ]
    }
  ]
};

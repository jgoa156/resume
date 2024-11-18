import { IconNext, IconWebDesign } from "components/shared/Icons";
import { INodeProps } from "./interfaces";

export const skills: INodeProps[] = [
  {
    title: "Frontend",
    type: "main",
    childNodes: [
      {
        icon: "fab fa-react",
        title: "React",
        type: "primary",
        years: 5,
        proficiency: 5,
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
        childNodes: [
          {
            title: "TypeScript",
            type: "secondary",
            years: 3,
            proficiency: 5,
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
          },
          {
            iconNode: <IconNext />,
            title: "Next",
            type: "secondary",
            years: 5,
            proficiency: 5,
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
          },
          {
            title: "Styled Components",
            type: "secondary",
            years: 3,
            proficiency: 5,
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
          },
          {
            icon: "fab fa-react",
            title: "React Native",
            type: "secondary",
            years: 1,
            proficiency: 3,
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
          },
        ],
      },
      {
        iconNode: <IconWebDesign />,
        title: "Design and Web design",
        type: "primary",
        years: 8,
        proficiency: 5,
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
        childNodes: [
          {
            title: "UI/UX design",
            type: "secondary",
            years: 5,
            proficiency: 4,
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
          },
          {
            icon: "fab fa-adobe",
            title: "Adobe CC",
            type: "secondary",
            years: 8,
            proficiency: 5,
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
          },
          {
            title: "Figma",
            type: "secondary",
            years: 3,
            proficiency: 4,
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
          },
        ],
      },
      {
        icon: "fas fa-vial",
        title: "Unit Testing",
        type: "primary",
        years: 2,
        proficiency: 3,
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
        childNodes: [
          {
            title: "Jest",
            type: "secondary",
            years: 2,
            proficiency: 3,
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
          },
          {
            title: "JUnit",
            type: "secondary",
            years: 0,
            proficiency: 2,
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
          },
        ],
      },
      {
        icon: "fas fa-code",
        title: "Basics",
        type: "primary",
        years: 5,
        proficiency: 5,
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
        childNodes: [
          {
            icon: "fab fa-html5",
            title: "HTML",
            type: "secondary",
            years: 6,
            proficiency: 5,
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
          },
          {
            icon: "fab fa-css3-alt",
            title: "CSS",
            type: "secondary",
            years: 6,
            proficiency: 5,
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
          },
          {
            icon: "fab fa-js",
            title: "JavaScript",
            type: "secondary",
            years: 6,
            proficiency: 5,
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
          },
          {
            title: "SASS",
            type: "secondary",
            years: 3,
            proficiency: 5,
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
          },
        ],
      },
    ],
  },
  {
    title: "Backend",
    type: "main",
    years: 5,
    proficiency: 5,
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
    childNodes: [
      {
        icon: "fab fa-node-js",
        title: "Node.js",
        type: "primary",
        years: 4,
        proficiency: 5,
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
        childNodes: [
          {
            title: "Express",
            type: "secondary",
            years: 3,
            proficiency: 4,
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
          },
          {
            title: "Sequelize",
            type: "secondary",
            years: 2,
            proficiency: 3,
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
          },
          {
            title: "Nest",
            type: "secondary",
            years: 3,
            proficiency: 4,
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
          },
          {
            title: "Prisma",
            type: "secondary",
            years: 2,
            proficiency: 4,
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
          },
        ],
      },
      {
        icon: "fab fa-python",
        title: "Python",
        type: "primary",
        years: 5,
        proficiency: 4,
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
        childNodes: [
          {
            title: "Django",
            type: "secondary",
            years: 1,
            proficiency: 3,
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
          },
          {
            title: "Scrapy",
            type: "secondary",
            years: 1,
            proficiency: 3,
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
          },
          {
            title: "Pytesseract",
            type: "secondary",
            years: 0,
            proficiency: 1,
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
          },
          {
            title: "Pandas",
            type: "secondary",
            years: 1,
            proficiency: 2,
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
          },
        ],
      },
      {
        icon: "fab fa-java",
        title: "Java",
        type: "primary",
        years: 6,
        proficiency: 5,
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
        childNodes: [
          {
            title: "Spring Boot",
            type: "secondary",
            years: 1,
            proficiency: 3,
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
          },
          {
            title: "Spring MVC",
            type: "secondary",
            years: 1,
            proficiency: 2,
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
          },
        ],
      },
      {
        icon: "fab fa-php",
        title: "PHP",
        type: "primary",
        years: 2,
        proficiency: 3,
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
        childNodes: [
          {
            title: "Laravel",
            type: "secondary",
            years: 0,
            proficiency: 2,
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
          },
          {
            title: "CakePHP",
            type: "secondary",
            years: 2,
            proficiency: 3,
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
          },
          {
            icon: "fab fa-wordpress",
            title: "Wordpress",
            type: "secondary",
            years: 1,
            proficiency: 3,
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
          },
        ],
      },
    ],
  },
  {
    title: "Others",
    type: "main",
    years: 5,
    proficiency: 5,
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
    childNodes: [
      {
        icon: "fas fa-database",
        title: "Databases",
        type: "primary",
        years: 5,
        proficiency: 5,
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
        childNodes: [
          {
            title: "MySQL",
            type: "secondary",
            years: 5,
            proficiency: 5,
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
          },
          {
            title: "PostgreSQL",
            type: "secondary",
            years: 5,
            proficiency: 5,
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
          },
          {
            title: "MongoDB",
            type: "secondary",
            years: 5,
            proficiency: 5,
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
          },
          {
            title: "SQLite",
            type: "secondary",
            years: 5,
            proficiency: 5,
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
          },
        ],
      },
      {
        icon: "fas fa-cog",
        title: "Software Architecture",
        type: "primary",
        years: 3,
        proficiency: 3,
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
        childNodes: [
          {
            title: "Atomic Design",
            type: "secondary",
            years: 5,
            proficiency: 5,
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
          },
          {
            title: "Top down",
            type: "secondary",
            years: 5,
            proficiency: 5,
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
          },
          {
            title: "Microsservices",
            type: "secondary",
            years: 5,
            proficiency: 5,
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
          },
          {
            title: "REST",
            type: "secondary",
            years: 5,
            proficiency: 5,
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
          },
        ],
      },
      {
        icon: "fas fa-ellipsis-h",
        title: "Miscellaneous",
        type: "primary",
        childNodes: [
          {
            title: "Git",
            type: "secondary",
            years: 5,
            proficiency: 5,
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
          },
          {
            title: "Docker",
            type: "secondary",
            years: 5,
            proficiency: 5,
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
          },
          {
            title: "Kubernetes",
            type: "secondary",
            years: 5,
            proficiency: 5,
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
          },
          {
            title: "CI/CD",
            type: "secondary",
            years: 5,
            proficiency: 5,
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
          },
        ],
      },
      {
        icon: "fas fa-language",
        title: "Languages",
        type: "primary",
        childNodes: [
          {
            title: "Portuguese",
            type: "secondary",
            proficiency: 5,
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
          },
          {
            title: "English",
            type: "secondary",
            proficiency: 5,
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
          },
          {
            title: "Spanish",
            type: "secondary",
            proficiency: 2,
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dapibus tortor, vitae pellentesque dolor lobortis vel. Suspendisse potenti.",
          },
        ],
      },
    ],
  },
];

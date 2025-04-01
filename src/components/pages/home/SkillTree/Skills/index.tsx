import { IconExpress, IconJest, IconNest, IconNext, IconPHP, IconWebDesign } from "components/shared/Icons";
import { INodeProps } from "../interfaces";

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
          "",
        childNodes: [
          {
            title: "TypeScript",
            type: "secondary",
            years: 3,
            proficiency: 5,
            details:
              "",
          },
          {
            iconNode: <IconNext />,
            title: "Next",
            type: "secondary",
            years: 5,
            proficiency: 5,
            details:
              "",
          },
          {
            title: "Styled Components",
            type: "secondary",
            years: 3,
            proficiency: 5,
            details:
              "",
          },
          {
            icon: "fab fa-react",
            title: "React Native",
            type: "secondary",
            years: 1,
            proficiency: 3,
            details:
              "",
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
          "",
        childNodes: [
          {
            title: "UI/UX design",
            type: "secondary",
            years: 5,
            proficiency: 4,
            details:
              "",
          },
          {
            title: "Adobe CC",
            type: "secondary",
            years: 8,
            proficiency: 5,
            details:
              "",
          },
          {
            title: "Figma",
            type: "secondary",
            years: 3,
            proficiency: 4,
            details:
              "",
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
          "",
        childNodes: [
          {
            iconNode: <IconJest />,
            title: "Jest",
            type: "secondary",
            years: 2,
            proficiency: 3,
            details:
              "",
          },
          {
            title: "JUnit",
            type: "secondary",
            years: 0,
            proficiency: 2,
            details:
              "",
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
          "",
        childNodes: [
          {
            icon: "fab fa-html5",
            title: "HTML",
            type: "secondary",
            years: 6,
            proficiency: 5,
            details:
              "",
          },
          {
            icon: "fab fa-css3-alt",
            title: "CSS",
            type: "secondary",
            years: 6,
            proficiency: 5,
            details:
              "",
          },
          {
            icon: "fab fa-js",
            title: "JavaScript",
            type: "secondary",
            years: 6,
            proficiency: 5,
            details:
              "",
          },
          {
            title: "SASS",
            type: "secondary",
            years: 3,
            proficiency: 5,
            details:
              "",
          },
        ],
      },
    ],
  },
  {
    title: "Backend",
    type: "main",
    childNodes: [
      {
        icon: "fab fa-node-js",
        title: "Node.js",
        type: "primary",
        years: 4,
        proficiency: 5,
        details:
          "",
        childNodes: [
          {
            iconNode: <IconExpress />,
            title: "Express",
            type: "secondary",
            years: 3,
            proficiency: 4,
            details:
              "",
          },
          {
            title: "Sequelize",
            type: "secondary",
            years: 2,
            proficiency: 3,
            details:
              "",
          },
          {
            iconNode: <IconNest />,
            title: "Nest",
            type: "secondary",
            years: 3,
            proficiency: 4,
            details:
              "",
          },
          {
            title: "Prisma",
            type: "secondary",
            years: 2,
            proficiency: 4,
            details:
              "",
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
          "",
        childNodes: [
          {
            title: "Django",
            type: "secondary",
            years: 1,
            proficiency: 3,
            details:
              "",
          },
          {
            title: "Scrapy",
            type: "secondary",
            years: 1,
            proficiency: 3,
            details:
              "",
          },
          {
            title: "Pytesseract",
            type: "secondary",
            years: 0,
            proficiency: 1,
            details:
              "",
          },
          {
            title: "Pandas",
            type: "secondary",
            years: 1,
            proficiency: 2,
            details:
              "",
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
          "",
        childNodes: [
          {
            title: "Spring Boot",
            type: "secondary",
            years: 1,
            proficiency: 3,
            details:
              "",
          },
          {
            title: "Spring MVC",
            type: "secondary",
            years: 1,
            proficiency: 2,
            details:
              "",
          },
        ],
      },
      {
        iconNode: <IconPHP />,
        title: "PHP",
        type: "primary",
        years: 2,
        proficiency: 3,
        details:
          "",
        childNodes: [
          {
            title: "Laravel",
            type: "secondary",
            years: 0,
            proficiency: 2,
            details:
              "",
          },
          {
            title: "CakePHP",
            type: "secondary",
            years: 2,
            proficiency: 3,
            details:
              "",
          },
          {
            icon: "fab fa-wordpress",
            title: "Wordpress",
            type: "secondary",
            years: 1,
            proficiency: 3,
            details:
              "",
          },
        ],
      },
    ],
  },
  {
    title: "Others",
    type: "main",
    childNodes: [
      {
        icon: "fas fa-database",
        title: "Databases",
        type: "primary",
        years: 7,
        proficiency: 4,
        details:
          "",
        childNodes: [
          {
            title: "MySQL",
            type: "secondary",
            years: 7,
            proficiency: 4,
            details:
              "",
          },
          {
            title: "PostgreSQL",
            type: "secondary",
            years: 2,
            proficiency: 3,
            details:
              "",
          },
          {
            title: "MongoDB",
            type: "secondary",
            years: 1,
            proficiency: 3,
            details:
              "",
          },
          {
            title: "SQLite",
            type: "secondary",
            years: 1,
            proficiency: 2,
            details:
              "",
          },
        ],
      },
      {
        icon: "fas fa-cog",
        title: "Software Architecture",
        type: "primary",
        years: 4,
        proficiency: 3,
        details:
          "",
        childNodes: [
          {
            title: "Atomic Design",
            type: "secondary",
            years: 4,
            proficiency: 4,
            details:
              "",
          },
          {
            title: "Microsservices",
            type: "secondary",
            years: 2,
            proficiency: 3,
            details:
              "",
          },
          {
            title: "REST",
            type: "secondary",
            years: 5,
            proficiency: 5,
            details:
              "",
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
            years: 6,
            proficiency: 5,
            details:
              "",
          },
          {
            title: "Docker",
            type: "secondary",
            years: 2,
            proficiency: 3,
            details:
              "",
          },
          {
            title: "Kubernetes",
            type: "secondary",
            years: 1,
            proficiency: 1,
            details:
              "",
          },
          {
            title: "CI/CD",
            type: "secondary",
            years: 3,
            proficiency: 3,
            details:
              "",
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
              "",
          },
          {
            title: "English",
            type: "secondary",
            proficiency: 5,
            details:
              "",
          },
          {
            title: "Spanish",
            type: "secondary",
            proficiency: 2,
            details:
              "",
          },
        ],
      },
    ],
  },
];

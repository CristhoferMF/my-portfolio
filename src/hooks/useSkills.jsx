import { useTranslation } from "react-i18next";

export default function useSkills() {
  const { t } = useTranslation();

  const data = {
    skillsGroup: [
      {
        name: "Frontend",
        skills: [
          { name: "html-5", fullName: "HTML 5" },
          { name: "css-3", fullName: "CSS 3" },
          { name: "javascript", fullName: "Javascript" },
          { name: "react", fullName: "React JS" },
          { name: "nextjs", fullName: "Next.js", isInverted: true },
          { name: "tailwindcss", fullName: "TailwindCSS" },
          { name: "alpinejs", fullName: "Alpine.js" },
          { name: "wordpress", fullName: "Wordpress", isInverted: true },
        ],
        isVisible: true,
      },
      {
        name: "Backend",
        skills: [
          { name: "php", fullName: "PHP" },
          { name: "laravel", fullName: "Laravel Framework" },
          { name: "nodejs", fullName: "NodeJS" },
          { name: "livewire", fullName: "Laravel Livewire" },
          { name: "python", fullName: "Python" },
        ],
      },
      {
        name: t("skills.databases"),
        skills: [
          { name: "mysql", fullName: "MySql" },
          { name: "mongodb", fullName: "MongoDB" },
          { name: "firebase", fullName: "Firebase Database" },
          { name: "microsoft-sql-server", fullName: "Microsoft SQL Server" },
        ],
      },
      {
        name: "Mobile",
        skills: [
          { name: "react-native", fullName: "React Native" },
          { name: "android-studio", fullName: "Android Studio" },
        ],
      },
      {
        name: "Tools",
        skills: [
          { name: "docker", fullName: "Docker" },
          { name: "github-actions", fullName: "Github Actions" },
          { name: "figma", fullName: "Figma" },
          { name: "adobe-xd", fullName: "Adobe XD" },
          { name: "adobe-ilustrator", fullName: "Adobe Illustrator" },
        ],
      },
      {
        name: "OS",
        skills: [
          { name: "fedora", fullName: "Fedora" },
          { name: "ubuntu", fullName: "Ubuntu" },
          { name: "windows", fullName: "Windows" },
        ],
      },
    ],
    image: "",
  };

  return { data };
}

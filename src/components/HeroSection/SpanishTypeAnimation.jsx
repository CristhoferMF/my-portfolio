import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "react-i18next";

export default function SpanishTypeAnimation() {
  const { t } = useTranslation();

  return (
    <>
      <TypeAnimation
        sequence={[t("hero.title", "en")]}
        className="title"
        wrapper="h1"
      />
      <TypeAnimation
        sequence={[1500, t("hero.subtitle", "en")]}
        className="subtitle"
        wrapper="h2"
      />
    </>
  );
}

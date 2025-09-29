import SkillCard from "./SkillCard";

const Section = () => {
  return (
    <section className="text-center py-8 border-b grid md:grid-cols-2 xl:grid-cols-3 gap-8">
      <SkillCard skill="HTML" />
      <SkillCard skill="CSS" />
      <SkillCard skill="Javascript" />
      <SkillCard skill="Accessibility" />
      <SkillCard skill="React" />
    </section>
  );
};
export default Section;

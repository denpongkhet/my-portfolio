import SkillCard from "./SkillCard";

const Section = () => {
  return (
    <section className="text-center py-8 border-b grid md:grid-cols-2 xl:grid-cols-3 gap-8">
      <SkillCard skill="HTML" length={1} />
      <SkillCard skill="CSS" length={1} />
      <SkillCard skill="Javascript" length={1} />
      <SkillCard skill="Accessibility" length={1} unit="Months" />
      <SkillCard skill="React" length={1} />
    </section>
  );
};
export default Section;

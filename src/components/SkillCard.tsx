interface SkillCardProps {
  skill: string;
  length: number;
  unit?: string;
}

const SkillCard = ({ skill, length, unit = "Years" }: SkillCardProps) => {
  return (
    <div>
      <p className="text-heading-l ">{skill}</p>
      {/* <span className="text-grey">{`${length} ${unit} Experience`}</span> */}
    </div>
  );
};
export default SkillCard;

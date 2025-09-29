interface SkillCardProps {
  skill: string;
}

const SkillCard = ({ skill = "Years" }: SkillCardProps) => {
  return (
    <div>
      <p className="text-heading-l ">{skill}</p>
    </div>
  );
};
export default SkillCard;

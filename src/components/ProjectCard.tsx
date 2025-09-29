type Images = {
  small: string;
  large: string;
};

interface ProjectCardProps {
  image: Images;
  title: string;
  tools: string[];
  site?: string;
  code?: string;
}

const ProjectCard = ({ image, title, tools, site, code }: ProjectCardProps) => {
  return (
    <div className="grid gap-5 ">
      <picture className="relative xl:hover:[&>div]:block">
        <source media="(min-width): 1280px" srcSet={image.large} />
        <img src={image.small} alt={`${title} project image`} />
        <div className="absolute inset-0 bg-black/75 z-10 hidden">
          <div className="flex flex-col gap-8 items-center justify-center h-full uppercase">
            <span className="border-b-2 border-green pb-2 hover:text-green active:text-green ">
              <a href={site} target="_blank">
                view project
              </a>
            </span>
            <span className="border-b-2 border-green pb-2 hover:text-green active:text-green ">
              <a href={code} target="_blank">
                view code
              </a>
            </span>
          </div>
        </div>
      </picture>
      <div>
        <h2 className="text-heading-m uppercase mb-[7px] hover:text-green active:text-green">
          <a href={site}>{title}</a>
        </h2>
        <ul className="flex gap-4 uppercase">
          {tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </div>
      <div className="uppercase flex gap-8 xl:hidden">
        <span className="border-b-2 border-green pb-2 hover:text-green active:text-green ">
          <a href={site} target="_blank">
            view project
          </a>
        </span>
        <span className="border-b-2 border-green pb-2 hover:text-green active:text-green ">
          <a href={code} target="_blank">
            view code
          </a>
        </span>
      </div>
    </div>
  );
};
export default ProjectCard;

import github from "@/assets/images/icon-github.svg";
import frontendMentor from "@/assets/images/icon-frontend-mentor.svg";

const Contact = () => {
  return (
    <div className="flex gap-6 items-center justify-center">
      <a
        href="https://github.com/denpongkhet"
        target="_blank"
        className="transition-all hover:scale-110"
      >
        <img src={github} alt="github logo" />
      </a>
      <a
        href="https://www.frontendmentor.io/profile/gotlnwza182"
        target="_blank"
        className="transition-all hover:scale-110"
      >
        <img src={frontendMentor} alt="frontend Mentor logo" />
      </a>
    </div>
  );
};
export default Contact;

import profileImg from "@/assets/images/image-my-profile.jpg";
import Contact from "./Contact";

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center gap-8 border-b pb-16 ">
      <div className="w-full flex flex-col gap-4 md:flex-row md:justify-between">
        <p>denpongot</p>
        <Contact />
      </div>
      <div className="grid md:grid-cols-[70%_30%] text-center md:text-start">
        <img
          src={profileImg}
          alt="profile image"
          className="w-43.5 h-60.5 md:w-80.5 md:h-150 xl:w-111  place-self-center object-cover object-bottom md:col-start-2"
        />
        <div className="md:row-start-1">
          <h1 className="text-heading-xl md:w-12/10">
            Nice to meet you! I'm{" "}
            <span className="underline decoration-green">Denpong Khet</span>.
          </h1>
          <p className="my-6 text-grey md:my-12 md:w-3/4">
            I am passionate about Frontend Development and eager to expand my
            expertise in Backend technologies to grow into a Fullstack Web
            Developer.
          </p>
          {/* <button
            type="button"
            aria-label="contact-me"
            className="border-b-2 border-green pb-3"
          >
            CONTACT ME
          </button> */}
        </div>
      </div>
    </header>
  );
};
export default Header;

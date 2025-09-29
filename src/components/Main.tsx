import ProjectCard from "./ProjectCard";
import ecomProductProjectS from "@/assets/images/ecom-product-small.png";
import passwordGenerateProjectS from "@/assets/images/password-generate-small.png";
import quizAppProjectS from "@/assets/images/quiz-app-small.png";
import tictactoeProjectS from "@/assets/images/tic-tac-toe-small.png";
import tipCalculatorProjectS from "@/assets/images/tip-calculator-small.png";
import bmiCalS from "@/assets/images/bmi-cal-small.png";

import ecomProductProjectL from "@/assets/images/ecom-product-large.png";
import passwordGenerateProjectL from "@/assets/images/password-generate-large.png";
import quizAppProjectL from "@/assets/images/quiz-app-large.png";
import tictactoeProjectL from "@/assets/images/tic-tac-toe-large.png";
import tipCalculatorProjectL from "@/assets/images/tip-calculator-large.png";
import bmiCalL from "@/assets/images/bmi-cal-large.png";

const Main = () => {
  const ecomImage = { small: ecomProductProjectS, large: ecomProductProjectL };
  const passGenImage = {
    small: passwordGenerateProjectS,
    large: passwordGenerateProjectL,
  };
  const quizAppImage = { small: quizAppProjectS, large: quizAppProjectL };
  const ticTacToeImage = { small: tictactoeProjectS, large: tictactoeProjectL };
  const tipCalImage = {
    small: tipCalculatorProjectS,
    large: tipCalculatorProjectL,
  };
  const bmiCalImage = {
    small: bmiCalS,
    large: bmiCalL,
  };

  return (
    <div className="mt-16">
      <div className="flex items-center justify-between">
        <h1 className="text-heading-xl">Projects</h1>
        <div>         
        </div>
      </div>
      <div className="mt-8 grid gap-12 md:grid-cols-2 ">
        <ProjectCard
          image={ecomImage}
          title="ecommerce product page"
          tools={["html", "css", "js"]}
          site="https://dpecomproductpage.netlify.app"
          code="https://github.com/denpongkhet/fm-ecommerce-product-page"
        />
        <ProjectCard
          image={passGenImage}
          title="Password Generate App"
          tools={["html", "css", "js"]}
          site="https://dppasswordgenerateapp.netlify.app"
          code="https://github.com/denpongkhet/fm-ecommerce-product-page"
        />
        <ProjectCard
          image={quizAppImage}
          title="Quiz App"
          tools={["html", "css", "js"]}
          site="https://dpquizapp2.netlify.app/#home"
          code="https://github.com/denpongkhet/fmt-quiz-app-2"
        />
        <ProjectCard
          image={ticTacToeImage}
          title="tic tac toe game"
          tools={["html", "css", "js"]}
          site="https://dptictactoe.netlify.app"
          code="https://github.com/denpongkhet/fm-xogame"
        />
        <ProjectCard
          image={tipCalImage}
          title="tip calculator"
          tools={["html", "css", "js"]}
          site="https://dptipcalculatorapp.netlify.app"
          code="https://github.com/denpongkhet/fm-tip-calculator"
        />
        <ProjectCard
          image={bmiCalImage}
          title="BMI Calculator"
          tools={["html", "css", "js"]}
          site="https://dpbmicalculator.netlify.app"
          code="https://github.com/denpongkhet/fm-BMIcalculator"
        />
      </div>
    </div>
  );
};
export default Main;

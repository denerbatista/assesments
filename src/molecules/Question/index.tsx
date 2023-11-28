import { SContainerQuestion } from "./styles";
import Option from "../../atoms/Option";

interface IProps {
  question: { title: string; right: string; options: string[] };
}
const Question = ({ question }: IProps) => {
  return (
    <>
      <SContainerQuestion>
        <span>{question.title}</span>
        <Option textOption={question.options[0]} />;
        <Option textOption={question.options[1]} />;
      </SContainerQuestion>
    </>
  );
};

export default Question;

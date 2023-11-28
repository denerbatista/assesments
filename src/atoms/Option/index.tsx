import { SContainFieldSet } from "./style";

interface IProps {
    textOption: string
}

const Option = ({textOption}: IProps) => {
  return <SContainFieldSet>
    <input type="checkbox"/>
    <label htmlFor="roundCheckbox">
      {textOption}
    </label>
  </SContainFieldSet>;
};

export default Option

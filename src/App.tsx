import { dataBaseMock } from "./mock/dataBase.mock";
import Question from "./molecules/Question";

async function App() {
  return (
    <>
      <h1>{"texto"}</h1>
      {dataBaseMock.questions.map((e) => (
        <Question question={e} />
      ))}
    </>
  );
}

export default App;

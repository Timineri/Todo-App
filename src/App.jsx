import Header from "./components/Header";
import HeaderInput from "./components/HeaderInput";

import Todo from "./components/Todo";
import GlobalStyles from "./GlobalStyles";

export default function App() {
  return (
    <div>
      <Header />
      <HeaderInput />
      <Todo />
      <GlobalStyles />
    </div>
  );
}

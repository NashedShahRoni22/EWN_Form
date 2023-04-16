import Form from "./Components/Form";
import { ThemeProvider } from "@material-tailwind/react";

function App() {
  return (
    <ThemeProvider >
      <Form/>
    </ThemeProvider>
  );
}

export default App;

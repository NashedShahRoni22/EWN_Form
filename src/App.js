import Form from "./Components/Form";
import { ThemeProvider } from "@material-tailwind/react";

function App() {
  return (
    <ThemeProvider >
      <main className="bg-gray-300">
      <Form/>
      </main>
    </ThemeProvider>
  );
}

export default App;

import "./styles.css";
import webpack from "webpack";
import { webpackConfig } from "./webpackConfig";

export default function App() {
  webpack(webpackConfig);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

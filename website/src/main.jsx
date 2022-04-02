import { render } from "preact";
import { App } from "./app";
import "./styles/global.scss";
import "normalize.css/normalize.css";

render(<App />, document.getElementById("app"));

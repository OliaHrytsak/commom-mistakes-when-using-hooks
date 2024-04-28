import "./App.css";
import HookInsideConditionalStatement from "./hooks-inside-conditional-statments";
import OverusingState from "./overusing-state";
import MutatingStateDirectly from "./mutating-state-directly";
import UsingStaleStateData from "./using-state-state-data";
import RunningUseEffectForEveryUpdate from "./running-use-effect-for-every-update";
import NotClearingSideEffects from "./not-clearing-saide-effects";

function App() {
  return (
    <div className="App">
      <HookInsideConditionalStatement />
      <div>------------------------------------------------------------</div>
      <OverusingState />
      <div>------------------------------------------------------------</div>
      <MutatingStateDirectly />
      <div>------------------------------------------------------------</div>
      <UsingStaleStateData />
      <div>------------------------------------------------------------</div>
      <RunningUseEffectForEveryUpdate/>
      <div>------------------------------------------------------------</div>
      <NotClearingSideEffects/>
    </div>
  );
}

export default App;

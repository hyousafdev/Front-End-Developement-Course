//import logo from './logo.svg';
import './App.css';
import HookCounter from './HooksComponents/useEffectHook';
import MouseContainer from './HooksComponents/useEffectHookCleanupContainer';
import ClassCounterConditional from './HooksComponents/useEffectHookConditional';
import IntervalClassCounter from './HooksComponents/useEffectHookIncorrectDependency';
import HookMouseOnce from './HooksComponents/useEffectHookOnce';

function App() {
  return (
    <div className="App">
      {/* <HookCounter /> */}
      {/* <ClassCounterConditional /> */}
      {/* <HookMouseOnce /> */}
      {/* <MouseContainer /> */}
      <IntervalClassCounter />
    </div>
  );
}

export default App;

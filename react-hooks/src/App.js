//import logo from './logo.svg';
import './App.css';
import HookCounter from './HooksComponents/useEffectHook';
import ClassMouse from './HooksComponents/useEffectHookCleanup';
import ClassCounterConditional from './HooksComponents/useEffectHookConditional';


function App() {
  return (
    <div className="App">
      {/* <HookCounter /> */}
      {/* <ClassCounterConditional /> */}
      <ClassMouse />
    </div>
  );
}

export default App;

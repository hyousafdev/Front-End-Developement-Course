//import logo from './logo.svg';
import './App.css';
import ClassCounter from './HooksComponents/useStateHook';
import HooksCounterTwo from './HooksComponents/useStateHookTwo';
import HookCounterThree from './HooksComponents/useStateHookObject';
import HookCounterFour from './HooksComponents/useStateHookArray';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HooksCounterTwo /> */}
      {/* <HookCounterThree /> */}
      <HookCounterFour />
    </div>
  );
}

export default App;

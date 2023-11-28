//import logo from './logo.svg';
import './App.css';
import ClassCounter from './HooksComponents/useStateHook';
import HooksCounterTwo from './HooksComponents/useStateHookTwo';
import HookCounterThree from './HooksComponents/useStateHookObject';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HooksCounterTwo /> */}
      <HookCounterThree />
    </div>
  );
}

export default App;

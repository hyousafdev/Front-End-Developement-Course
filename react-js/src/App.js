// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Greet from './Components/functionalComponents';
import ClassComponent from './Components/classComponent';
import HelloJSX from './Components/helloJSX';
import Props from './Components/Props';
import PropsClassComponents from './Components/propsClassComponent';
import State from './Components/State';
import Counter from './Components/setState';
import DestructuringClassComponents from './Components/DestructuringPropsandState';
import ClassEvent from './Components/EventHandling';
import FunctionEvent from './Components/EventHandling';
import EventBind from './Components/BindingEventHandlers';
import ParentComponent from './Components/MethodsAsPropsParent';
import UserGreeting from './Components/ConditionalRendering';
import NameList from './Components/ListRendering';
import NameListsAndKeys from './Components/ListsAndKeys';
import IndexAsKey from './Components/IndexAsKeyAntiPattern';
import StyleSheet from './Components/StylingAndCSSBasics';
import InlineCSS from './Components/InlineCSS';
import Form from './Components/BasicsFormHandling';
import LifecycleA from './Components/ComponentMountingLifecycleMethodsA';
import UpdatingLifecycleA from './Components/ComponentUpdatingLifecycleMethodsA';
import Fragments from './Components/Fragments';
import Table from './Components/FragmentsTable';
import PureComp from './Components/PureComponents';
import ParentComp from './Components/PureComponentsParent';
import MemoParentComp from './Components/MemoParent';
import RefsDemo from './Components/Refs';
import FocusInput from './Components/RefsWithClassComponentsParent';
import FRParentInput from './Components/ForwardingRefsParent';
import PortalsDemo from './Components/Portals';
import Hero from './Components/ErrorBoundry';
import ErrorBoundary from './Components/ErrorBoundryClass';
import ClickCounter from './Components/HigherOrderComponentClickCounter';
import HoverCounter from './Components/HigherOrderComponentHoverCounter';
import RenderPropsClickCounter from './Components/RenderPropsClickCounter';
import RenderPropsCounter from './Components/RenderPropsCounter';
import RenderPropsHoverCounter from './Components/RenderPropsHoverCounter';
import RenderPropsUser from './Components/RenderPropsUser';

class App extends Component {
   render() {
    return (
      <div className="App">

      {/* <Greet /> */}
      {/* <ClassComponent /> */}
      {/* <HelloJSX /> */}

      {/* <Props name='Smith' heroName='Batman'>
        <p>This is the children props</p>
        </Props>
        <Props name='Sara' heroName='Wonder woman'>
        <button>Action</button>
        </Props>
        <Props name='David' heroName='Superman'>
        <p>This is the another children props</p>
        </Props> */}

        {/* Using props through Class Components */}
        {/* <PropsClassComponents name='Hassan' professionName='Programmer' />
        <PropsClassComponents name='Zain' professionName='Sales Man' />
        <PropsClassComponents name='Danish' professionName='Manager' /> */}
        {/* <State /> */}
        {/* <Counter /> */}
        {/* <DestructuringClassComponents name='Smith' heroName='Superman' /> */}
        {/* <DestructuringPropsAndState name='David' heroName='Batman' /> */}

        {/* <FunctionEvent/> */}
        {/* <ClassEvent/> */}
        {/* <EventBind /> */}
        {/* <ParentComponent /> */}
        {/* <UserGreeting /> */}
        {/* <NameList /> */}
        {/* <NameListsAndKeys /> */}
        {/* <IndexAsKey /> */}

        {/* <h1 className='error'>Error</h1> */}
        {/* <h1 className={styles.success}>Success</h1> */}
        {/* <StyleSheet primary={true}/> */}
        {/* <InlineCSS /> */}
        {/* <Form /> */}
        {/* <LifecycleA /> */}
        {/* <UpdatingLifecycleA /> */}
        {/* <Fragments /> */}
        {/* <Table /> */}

        {/* <PureComp />
        <ParentComp /> */}
        {/* <MemoParentComp /> */}
        {/* <RefsDemo /> */}
        {/* <FocusInput /> */}
        {/* <FRParentInput /> */}
        {/* <PortalsDemo /> */}

        {/* <ErrorBoundary>
          <Hero heroName='Batman' />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName='Superman' />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName='Joker' />
        </ErrorBoundary> */}

        {/* <ClickCounter name='David'/>
        <HoverCounter/> */}
        {/* <RenderPropsClickCounter /> */}

        <RenderPropsCounter>
          {(count, incrementCount) => (
            <RenderPropsClickCounter count={count} incrementCount={incrementCount} />
          )}
        </RenderPropsCounter>
        <RenderPropsCounter>
          {(count, incrementCount) => (
            <RenderPropsHoverCounter count={count} incrementCount={incrementCount} />
          )}
        </RenderPropsCounter>
      <RenderPropsUser render={(isLoggedInParameter) => isLoggedInParameter ? 'Hassan' : 'Guest: not logged in' }/>

      </div>
    );
  }
}

export default App;

import React from 'react';
import PropsChildrenGet from './Props Children/PropsChildrenGet';
import ClassComponent from './Type of Components/ClassComponent';
import FunctionalComp from './Type of Components/FunctionalComp';
import HightorderCompoent from './Type of Components/HighOrderComponent';

function App() {
  var nmes1 = ['Test1','Test2','Test3']
  var names = [...nmes1];
  var arr = [<h1>Hello H1</h1>,<h2>Hello h2</h2>];
  return (
    <div className="App">
        {/* Using Javascript in JSX */}
        {
          names.map(function(test) {
            
            if(test==='Test1'){
              return <h1 style={{"color":"red"}}>This is {test}</h1>
            }
            else if(test==='Test2')
            {
              return <h2 style={{"color":"lightgreen"}}>This is {test}</h2>
            }
            else{
              return <h3 style={{"color":"yellow"}}>This is {test}</h3>
            }
          })
        }

        {/* Use array as JSX */}
        {
            arr.map(function(reg,key) {
              if(key===1){
                return reg;
              }
              else{
                return <h1>Key not matching</h1>;
              }
            })
        }

        {/* Types of functional component */}
        <FunctionalComp name="functional component"/>
        <ClassComponent name="class component"/>
        <HightorderCompoent name="high order functional component"/>

        {/* Props.Children */}
        <PropsChildrenGet/>

        {/* Prototype */}
        


    </div>
  );
}

export default App;

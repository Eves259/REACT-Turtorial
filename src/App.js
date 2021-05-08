import Header from './components/Header' //Imports the Header JS to the root
/* import React from './components/Header' Class component example */

function App() {
  //const name = "Brad"; Place variables outside of the return

  return (
    <div className="container"> {/* Changes the classname. As long as there is one parent element it will work. It can even be in empty tags. <> </> */}
      
      <Header />{/* Adds the Header to the page. This is a prop. Things can be passed into here */}

  {/* <h2>Hello {'90' + 9}</h2> Use curly braces to use variables inside of the tags. Or you can add numbers. You can also add conditionals*/}
    </div>
  );
}

/* Class component Example
class App extends React.Component {
  render() {
    return <h1>Hello from a class</h1>
  }
}
*/

export default App;

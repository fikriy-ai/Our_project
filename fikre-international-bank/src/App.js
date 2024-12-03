import './App.css';

const Person = () => {
  return(
            // Adjacent JSX elements must be wrapped in 
            // an enclosing tag. Did you want a JSX fragment 
            // <>...</>?
    <>
      <h1>Name: John</h1>
      <h2>Last Name: Doe</h2>
      <h2>Age: 30</h2>
    </>
  )
}

const App = () => {
  return (
    <div className="App">
       {/* how to call a component in another component */}
      <Person />
    </div>
  );
}

export default App;

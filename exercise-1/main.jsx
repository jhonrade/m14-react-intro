// Main.jsx file

//EX 1

// Create a simple component
var MyComponent = React.createClass ({
    // In your render function...
    render:function () {
        var name = "Jill"
        var interest = "nothing"

        // Return div with two paragraphs
        return (
            <div>
                <p>Hello, my name is {name}</p>
                <p>I am interested in {interest}</p>
            </div>
        )
    }
});

// Render your component in the `main` section
ReactDOM.render(
  <div>
      <MyComponent/>
      <MyComponent/>
      <MyComponent/>
  </div>,
  document.querySelector('main')
);

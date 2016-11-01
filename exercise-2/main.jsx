// Main.jsx file

//EX 2

// Create a simple component
var MyComponent = React.createClass ({
    // In your render function...
    render:function () {
        // Return div with two paragraphs
        return (
            <div>
                <p>Hello, my name is {this.props.name}</p>
                <p>I am interested in {this.props.interest}</p>
            </div>
        )
    }
});

// Render your component in the `main` section
ReactDOM.render(
      <div>
        <MyComponent name = "Mike" interest = "music"/>
        <MyComponent name = "Doug" interest = "pugs"/>
        <MyComponent name = "Jill" interest = "nothing"/>
      </div>,
  document.querySelector('main')
);

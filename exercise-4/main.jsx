// Main.jsx file

// Data to pass to our List elements
var employeeData = [
    {name:"Joan", title:"developer", salary:100000},
    {name:"Enrique", title:"manager", salary:200000},
    {name:"Shana", title:"developer", salary:105000},
    {name:"Shana", title:"manager", salary:105000},
];

// Simple Employee component for showing an <td>
var Employee = React.createClass({
    render:function() {
        return(<tr className={this.props.title}>
            <td>{this.props.name}</td>
            <td>{this.props.title}</td>
            <td>{this.props.salary}</td>
        </tr>)
    }
});

// EmployeeTable
var EmployeeTable = React.createClass({
    render:function() {
        return(
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Salary</th>
                        </tr>
                        {this.props.data.map(function(d, i){
                            return <Employee key={'employee-' + i}
                                             name={d.name}
                                             salary={d.salary}
                                             title={d.title}
                                />
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
});

// EmployeeSearch
var EmployeeSearch = React.createClass({
    getInitialState:function() {
        return({searchString:''});
    },
    // Add a filter funciton
    filter: function(event) {
      var value = event.target.value; //get event value (employee you are searching)
      this.setState({searchString:value}); //set state to event value
    }

    render:function() {
        var employees = this.props.data;

        // Use this.state.searchString to filter down the `employees` array

        //my version
        // employees.filter(function() {
        //     for (employee in employees){
        //         if (employee == this.state.searchString) {
        //           return employee;
        //         }
        //     }
        // }
        //complete version
        searchString = this.state.searchString.trim().toLowerCase(); //case sensitivity
        if(searchString.length > 0){
           // We are searching. Filter the results.
           employees = employees.filter(function(employee){ //only render searched employee in table
               return employee.name.toLowerCase().match( searchString );
           });
        }

        // //class version 1
        // var employeess = this.props.data,filter(d) {
        //     d.name.match(this.state.searchString)
        // }.bind(this);
        // //class version 2
        // this.props.data,filter(d) => d.name.match(this.state.searchString).bind(this);

        return(
            <div>
                <input onChange={this.filter} placeholder="Search employees"/> //when state changes, rerender
                <EmployeeTable data={employees}/>
            </div>
        )
    }
});


// Render your component in the `main` section
ReactDOM.render(<EmployeeSearch data={employeeData}/>,
    document.querySelector('main')
);

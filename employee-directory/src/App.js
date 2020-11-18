import logo from './logo.svg';
import './App.css';
import Table from './components/table';
import Search from './components/search';
import {Component} from 'react'
import API from './utils/API'
class  App extends Component {
   state ={
     employees: [],
     search: '',
     filteredEmployees: [],
     isSorted: false

   }

   componentDidMount(){
    API.search().then(employees=>{
      this.setState({
        employees: employees.data.results
      })
    })
   }

   handleInputChange=event=>{
     const {name, value} = event.target
     this.setState({
        [name]: value
     })

      console.log(value)

      const filtered = this.state.employees.filter((employee)=>{
          return (employee.name.first.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1);
      })
      this.setState({ filteredEmployees: filtered }) 
   }

  render(){
    return (
      <div className="App">
         <Search  keyWord ={this.state.search} handleInputChange={this.handleInputChange} />
         <Table employees={this.state.employees} />
      </div>
    );
  }
 
} 

export default App;

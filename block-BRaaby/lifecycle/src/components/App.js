import React from 'react';
import Card from './Card';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: null,
      displayVal: '',
      titleVal: 'name',
      img: '',
    }
  }

  componentDidMount(){
    fetch('https://randomuser.me/api/')
    .then((res) => res.json())
    .then((data) => this.setState({ data: data, displayVal: data.results[0].name.first + ' ' + data.results[0].name.last, img: data.results[0].picture.large }))
  }

  handleMouseOver = ({ target }) => {
    let person = this.state.data.results[0];
    let id = target.id;
    let val = this.state.displayVal;
    let title = this.state.titleVal;
    switch (id){
      case "person":
        val = person.name.first + ' ' + person.name.last;
        title = "name";
        break;
      case "email":
        val = person.email;
        title = "email";
        break;
      case "age":
        val = person.dob.age;
        title = "age";
        break;
      case "address":
        val = person.location.city + ', ' + person.location.postcode + ', ' + person.location.state + ', ' + person.location.country;
        title = "street";
        break;
      case "phone":
        val = person.phone;
        title = "contact";
        break;
      case "password":
        val = person.login.password;
        title = "password";
        break;
      default:
        break;
    }
    this.setState({
      displayVal: val,
      titleVal: title
    });
  }

  handleClick = () => {
    this.setState((prevState) => {
      return {
        data: null
      }
    }, () => this.componentDidMount());
  }

  render(){
    return (
      <>
        <div className='upper-div'></div>
        <div className='lower-div'></div>
        <Card data={this.state.data} handleClick={this.handleClick} img={this.state.img} value={this.state.displayVal} title={this.state.titleVal} handleMouseOver={this.handleMouseOver} />
      </>
    )
  }
}



export default App;
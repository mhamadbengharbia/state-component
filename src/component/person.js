import React from 'react';
import image from './imageInSrc.jpg';
 
 
class Person extends React.Component {
    state = {
    fullname: "",
    bio:"",
    imgsrc :"",
    profession :"",
    
    shows: true ,
      counter : 0
    };
   handleClick=()=>{
    if (this.state.shows===true){
    this.setState({fullname:'Mhamad',bio:"Technicien",imgsrc :<img src={image} width="100px"/> ,profession :"Web developper"})
    }

    }
 
  incrementCounter() {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }

  componentDidMount() {
    const thisBoundedIncrementer = this.incrementCounter.bind(this);
    setInterval(thisBoundedIncrementer, 1000);
  }


  render() {
      return(
        <>
        
        <h1> {this.state.fullname}</h1>
        <h1> {this.state.bio}</h1>
        <h1>  {this.state.imgsrc}</h1>
        <h1>  {this.state.profession}</h1>
        <h2>{this.state.counter}</h2>



        <button onClick={this.handleClick}> ClickMe</button>
     
         </>
)  
    }
   }







 
   export default Person
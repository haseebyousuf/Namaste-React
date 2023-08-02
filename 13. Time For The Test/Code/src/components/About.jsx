import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    console.log("parent component constructor");
    super(props);
  }
  componentDidMount() {
    console.log("parent component mounted");
  }
  render() {
    console.log("parent component rendered");

    return (
      <div className='flex items-center flex-col'>
        <h1 className='text-3xl'> About Us</h1>
        <h2 className='text-lg'> This is About us page </h2>
        <div className='flex gap-10 p-4 '>
          {/* <User name='Haseeb' location='Kashmir' /> */}
          <UserClass name='Haseeb' location='Kashmir' />
        </div>
      </div>
    );
  }
}
// const About = () => {
//   return (
//     <div className='about-container'>
//       <h1> About Us</h1>
//       <h2> This is About us page </h2>
//       <div className='about-card-container'>
//         <User name='Haseeb' location='Kashmir' />
//         <UserClass name='Haseeb' location='Kashmir' />
//       </div>
//     </div>
//   );
// };

export default About;

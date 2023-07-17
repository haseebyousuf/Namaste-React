const User = ({ name, location }) => {
  return (
    <div className='user-card'>
      <h1>Name: {name}</h1>
      <h3>Location: {location}</h3>
      <h3>Contact: @haseebyousuf</h3>
    </div>
  );
};
export default User;

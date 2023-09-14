function User({user})
{
 return (
    <div>
        <span>{user.name}</span><br/>
        <span>{user.email}</span><br/>
        <span>{user.address.zipcode}</span><br/>
      
      
    </div>
 )
}
export default User
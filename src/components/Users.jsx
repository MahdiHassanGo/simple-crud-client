import { useLoaderData } from "react-router-dom";


const Users = () => {
    const users = useLoaderData();

    const handleDeleteUser = _id =>{
console.log('delete',_id)
fetch(`http://localhost:5000/users/${_id}`,
    {
        method:'DELETE',
        
    }
)
.then (res=> res.json())
.then(data=> {
    console.log(data);
})
    }
    return (
        <div>
            <h1>{users.length}</h1>

            <div>
                {
                    users.map(user => <p key={user._id} >{user.name}:{user.email} <button
                    onClick={()=>handleDeleteUser(user._id)}
                    >X</button> </p>  
                       
                    )
                }
            </div>
        </div>
    );
};

export default Users;
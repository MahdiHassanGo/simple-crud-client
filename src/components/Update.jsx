import { useLoaderData } from "react-router-dom";


const Update = () => {

    const loadedUser =useLoaderData();
    const handleUpdateUser =event =>{
        event.preventDefault();
        const form = event.target;
        const name= form.name.value;
        const email= form.email.value;
console.log(name,email);
const updatedUser={name,email};

fetch(`http://localhost:5000/users/${loadedUser._id}`,{
    method:'PUT',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(updatedUser)
})
.then(res=>res.json())
.then(data=>{
    console.log(data)
    if(data.modifiedCount>0){
        alert('user updated successfully')
    }
})
    }


    return (
        <div>
            <h3>updated info user:{loadedUser.name}</h3>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name="name" defaultValue={loadedUser?.name} />
                <br/>
                <input type="email" name="email" defaultValue={loadedUser?.email} />
                <br/>
                <input type="submit" value='update' />
                <br/>


            </form>
        </div>
    );
};

export default Update;
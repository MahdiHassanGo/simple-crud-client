import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers = useLoaderData(); // Original data from the loader
    const [users, setUsers] = useState(loadedUsers); // Manage users with state

    const handleDeleteUser = (_id) => {
        console.log('Deleting user with ID:', _id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert("User deleted successfully!");
                    const remainingUsers = users.filter((user) => user._id !== _id);
                    setUsers(remainingUsers); // Update state with remaining users
                }
            })
            .catch((error) => console.error('Error deleting user:', error));
    };

    return (
        <div>
            <h1>Total Users: {users.length}</h1>
            <div>
                {users.map((user) => (
                    <p key={user._id}>
                        {user.name}: {user.email}{" "}
                        <Link to={`/update/${user._id}`}>
                        <button>update</button></Link>
                        <button onClick={() => handleDeleteUser(user._id)}>X</button>
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Users;

import { useState } from "react";
import UserCard from "../components/UserCard";
import {users} from "../data/user"
const UserDirectory = () => {
    const [search,setSearch]=useState("");
    
    const filteredUser =users.filter((user)=>
        user.name
        .toLowerCase()
        .includes(
            search.toLowerCase()
        )
    
    )
  return (
    <div>
        <h1>Developer Directory</h1>
        <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e)=>
            setSearch(
                e.target.value
            )
        }
        />
        {filteredUser.map((user)=>(
        <UserCard
        key={user.id}
        name={user.name}
        role={user.role}
        />
        ))}


    </div>
  )
}
export default UserDirectory
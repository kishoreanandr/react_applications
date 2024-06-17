import { useState } from "react"

export const User_details=()=>
    {
        const [user,setUser]=useState({name:"Kishore",age:20})
        const updateName=()=>
            {
                //   ... is called spread Operator if we want to set or change only one details in that dict or object,we want to use spread operator...give in curly bracket {}
                setUser({...user,name:"Anand"})
            }

        const updateAge=()=>
            {
                setUser({...user,age:21})
            }
        return <>

                <div>
                    <h2>User Details</h2>
                    <h3>{user.name}</h3>
                    <h4>{user.age}</h4>
                    <button onClick={updateName}>update User Name</button>
                    <button onClick={updateAge}>update User Age</button>
                </div>

        </>
    }
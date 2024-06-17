import { useState } from "react"

export const UpdateText=()=>
    {
        const [user,setUser]=useState({name:"Kishore",age:19})
        //.....We are changing with different functions for each text.....//
        // function updateName(e)
        // {
        //     const newStateObject={...user}; //FIRST WE ASSIGN THE DEFAULT VALUES IN ONE VARIABLE
        //     newStateObject.name=e.target.value; //NEXT WE THAT THAT VARIABLE IN THAT WE UPDATE ONE PARTICULAR ELEMENT FROM INPUT FROM FORM
        //     setUser(newStateObject); //WE FINALLY SET ALL THE VALUES TO USER USING setUser 
        // }
        // const updateAge=(e)=>
        //     {
        //         setUser((oldstate)=>
        //         {
        //             return {...oldstate,age:e.target.value};
        //         })
        //     }

        //.......=> Using single function we can update....=>//

        function changeHandler(e)
        {
            //...   if we don't pu dot it will delete the exsisting data   ...=> is used for not changing the exsisting data..
            // WE ARE ASSINGINING THE value to the user bu updating value using name
            setUser({user,[e.target.name]:[e.target.value]});
        } 


        return <>
                <div>
                    <h2>{user.name} {user.age}</h2>
                    <form>
                        <input type="text" placeholder="Enter the name" onChange={changeHandler} value={user.name} name="name"/>
                        <input type="text" placeholder="Enter the age" onChange={changeHandler} value={user.age} name="age"/>
                    </form>
                </div>
        </>
    }
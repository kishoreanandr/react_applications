import { useState } from 'react'
import '../css/regForm.css'
export const Regform=()=>
        {
        const [user,Setuser]=useState({
            name:"Ram",
            age:28,
            gender:"Male",
            isMarried:true,
            country:"India",
            bio:"Write Something about Yourself"
        })
        const changeHandler=(e)=>
            {
                const name=e.target.name;
                const value=e.target.type==="checkbox"?e.target.checked:e.target.value;
                Setuser({...user,[name]:value})
            }
        return <>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Name: </th>
                            <td>{user.name}</td>
                        </tr>
                        <tr>
                            <th>Age: </th>
                            <td>{user.age}</td>
                        </tr>
                        <tr>
                            <th>Gender: </th>
                            <td>{user.gender}</td>
                        </tr>
                        <tr>
                            <th>Mraital Status: </th>
                            <td>{user.isMarried?"Married":"Not Married"}</td>
                        </tr>
                        <tr>
                            <th>Country: </th>
                            <td>{user.country}</td>
                        </tr>
                        <tr>
                            <th>Bio: </th>
                            <td>{user.bio}</td>
                        </tr>
                    </tbody>
                </table>
                <form>
                    <input type="text" value={user.name} onChange={changeHandler} name="name" placeholder="Enter the name.."/>
                    <input type="text" value={user.age} onChange={changeHandler} name="age" placeholder="Enter the age.."/>
                    <div className='gender'>
                    <label htmlFor="gender">
                        <input type="radio" value="Male" name='gender' id="male" onChange={changeHandler} checked={user.gender==="male"}/>
                        Male</label>
                        <label htmlFor='gender'>
                        <input type="radio" value="Female" name='gender' id="female" onChange={changeHandler} checked={user.gender==="female"}/>
                        Female</label>
                    </div>
                    <label htmlFor='ismarried'>
                    <input type='checkbox' checked={user.isMarried} onChange={changeHandler} name='isMarried' />
                    isMarried</label>
                    <div className='country'>
                        <label htmlFor='country'>Country:</label>
                        <select onChange={changeHandler} name="country" value={user.country} id="country">
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                            <option value="Pakistan">Pakistan</option>
                        </select>
                        </div>
                    <label htmlFor='bio'>Bio:</label>
                    <textarea cols="30" rows="5" name="bio" onChange={changeHandler} placeholder='write about you'></textarea>
                </form>
            </div>
        </>
    }
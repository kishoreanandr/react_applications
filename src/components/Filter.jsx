import { useState } from "react";
import { data } from "../utils/data";
export const Filter = () => {
    const [search,setSearch]=useState("");
    return <>
        <div className="container mt-5">
            <h4 className="text-primary">Filter Table</h4>
            <form className="col-md-6">
                <input type="text" className="form-control" placeholder="Search" onChange={(e)=>setSearch(e.target.value)}/>
            </form>
            <table className="table table-bordered table-striped mt-4 b-5">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                        {data.filter((item)=>{
                            return search===""?item:
                            item.first_name.toLowerCase().includes(search.toLowerCase()) ||
                            item.last_name.toLowerCase().includes(search.toLowerCase()) ||
                            item.email.toLowerCase().includes(search.toLowerCase()) ||
                            item.phone.includes(search)
                        }).map((item,index) => {
                            return <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                            </tr>
                        })
                        }
                </tbody>
            </table>
        </div>
    </>
}
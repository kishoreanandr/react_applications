import '../css/header.css';
export const Navbaar= ()=>
    {
        let customCode="node";
        let islogin=false;
        let greeting=islogin ? <p>Welcome Back</p> : <p>Please Login</p>
        let items=["item1","item2","item3"];
        return <>
            <div className="paragraph">
                <p>Hai this is kishore</p>
                <p className={customCode}>Hello {25+45}</p>
                {greeting}
                <ul>
                    {items.map((item,index)=>(<li key={index}> {item} </li>))}


                    {items.map((item,index)=>(<li key={index}>{item}</li>))}
                </ul>
            </div>
            </>
    }
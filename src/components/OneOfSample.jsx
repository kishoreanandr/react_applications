import PropTypes from "prop-types";

export const OneOfSample=(props)=>
    {
        const {color}=props;
        return <>
            <div style={{backgroundColor:color,padding:"20px",color:"white"}}>
                <p>There is a background color {color}.</p>
            </div>
        
        </>
    }
OneOfSample.propTypes={
    color:PropTypes.oneOf(["green","red","blue"]).isRequired
};
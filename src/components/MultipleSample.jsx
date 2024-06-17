import PropTypes from "prop-types";
export const MultiSample=(props)=>
    {
        return <>

            <div>
                <p> The Value is {props.value}</p>
            </div>
        
        </>
    }

MultiSample.propTypes={
    value:PropTypes.oneOfType([PropTypes.number,PropTypes.string,PropTypes.bool]).isRequired,
}
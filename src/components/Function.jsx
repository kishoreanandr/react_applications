import PropTypes from 'prop-types';
export const Function=(props)=>
    {
        const {handleEvent}=props;
        return (<>
        
            <div>
                <button onClick={handleEvent}>Click me!!</button>
            </div>
        </>);
    }

Function.propTypes={
    handleEvent: PropTypes.func.isRequired,
}
import PropTypes from "prop-types";

function Button (props) {
    return <button onClick={ () => {
        alert("A label desse botão é " + props.label)
    } }>Botão</button>
}

Button.propTypes = {
    label: PropTypes.string.isRequired
}

export default Button;
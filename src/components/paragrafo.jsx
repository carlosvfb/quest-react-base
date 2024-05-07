import PropTypes from "prop-types";
function Paragrafo({ text = "texto padrão", color = "red", textTranform = "uppercase" }) {
    return <p style={{ color, textTransform: textTranform}}>{text}</p>
}

Paragrafo.propTypes = { 
    text: PropTypes.string,
    color: PropTypes.string,
    textTranform: PropTypes.string
}

export default Paragrafo;

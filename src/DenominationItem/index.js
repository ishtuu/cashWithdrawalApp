import './index.css'

const DenominationItem = props =>{
    const {denominationDetails, denominationButton} = props
    const {value} = denominationDetails

    const onClickDenominationButton = () => {
        denominationButton(value)
    }
    return (
        <li className="list-button">
            <button 
                type = "button" 
                className="button" 
                onClick={onClickDenominationButton}
            >
                    {value}
            </button>          
        </li>
    )
}

export default DenominationItem

const Select = ({options = [], onSelect}) => {

    const handleSelect = (e) => {
        onSelect(e.target.value)
    }

    return (
        <select onChange={handleSelect}>
            {
                options.map((opt) => <option key={opt.valor} value={opt.valor}>{opt}</option>)
            }
        </select>
    )
}

export default Select
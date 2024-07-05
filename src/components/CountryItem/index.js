import './index.css'

const CountryItem = props => {
  const {countryDetails, removeCountry} = props
  const {id, name, imageUrl} = countryDetails

  const onClickRemove = () => {
    removeCountry(id)
  }

  return (
    <li className="country">
      <img src={imageUrl} alt="thumbnail" className="thumbnail" />
      <div className="name-btn">
        <p className="name">{name}</p>
        <button className="remove-btn" type="button" onClick={onClickRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default CountryItem

import './index.css'

const Country = props => {
  const {countryDetails, visitCountry} = props
  const {id, name, isVisited} = countryDetails

  const onClickVisit = () => {
    visitCountry(id)
  }

  return (
    <li className="country-item">
      <p className="name">{name}</p>
      {isVisited ? (
        <p className="visited">Visited</p>
      ) : (
        <button type="button" className="btn" onClick={onClickVisit}>
          Visit
        </button>
      )}
    </li>
  )
}

export default Country

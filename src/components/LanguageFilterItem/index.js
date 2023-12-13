import './index.css'

const LanguageFilterItem = props => {
  const {details, onselecting, btn} = props
  const {id, language} = details

  const eventClass = btn === id ? 'class' : ''

  console.log(btn)

  const sending = () => {
    onselecting(id)
  }

  return (
    <div className="lan">
      <button onClick={sending} className={`btn ${eventClass}`} type="button">
        <p>{language}</p>
      </button>
    </div>
  )
}
export default LanguageFilterItem

import './index.css'

const RepositoryItem = props => {
  const {details} = props
  const {name, issuesCount, forksCount, starsCount, avatarUrl} = details
  return (
    <li className="item">
      <img src={avatarUrl} className="image" alt={name} />
      <h1 className="name">{name}</h1>
      <div className="roww">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          className="image2"
          alt="stars"
        />
        <p>{starsCount} stars</p>
      </div>
      <div className="roww">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          className="image2"
          alt="forks"
        />
        <p>{forksCount} forks</p>
      </div>
      <div className="roww">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          className="image2"
          alt="open issues"
        />
        <p>{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem

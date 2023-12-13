import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]
class GithubPopularRepos extends Component {
  state = {
    activebtn: languageFiltersData[0].id,
    isLoading: false,
    list: [],
    failure: false,
    showing: false,
  }

  componentDidMount() {
    this.getItems()
  }

  getItems = async () => {
    this.setState({showing: false})
    this.setState({isLoading: true})
    const {activebtn} = this.state

    const options = {method: 'GET'}

    const url = `https://apis.ccbp.in/popular-repos?language=${activebtn}`

    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()

      const det = data.popular_repos

      const formateddata = det.map(each => ({
        id: each.id,
        name: each.name,
        issuesCount: each.issues_count,
        forksCount: each.forks_count,
        starsCount: each.stars_count,
        avatarUrl: each.avatar_url,
      }))

      this.setState({list: formateddata, showing: true, isLoading: false})
    } else if (response.ok === false) {
      this.setState({failure: true,isLoading:false,showing:false})
    }
  }

  onselecting = id => {
    this.setState({activebtn: id}, this.getItems)
  }

  render() {
    const {list, isLoading, failure, showing, activebtn} = this.state
    return (
      <div className="main">
        <h1 className="heading">Popular</h1>
        <ul className="lan">
          {languageFiltersData.map(data => (
            <LanguageFilterItem
              details={data}
              key={data.id}
              onselecting={this.onselecting}
              btn={activebtn}
            />
          ))}
        </ul>
        {isLoading && (
          <div data-testid="loader">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        )}
        {showing && (
          <ul className="down">
            {list.map(each => (
              <RepositoryItem details={each} key={each.id} />
            ))}
          </ul>
        )}

        {failure && (
          <img
            src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
            alt="failure view"
            className="image1"
          />
        )}
      </div>
    )
  }
}

export default GithubPopularRepos

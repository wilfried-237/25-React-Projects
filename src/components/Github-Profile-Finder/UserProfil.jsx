import './index.css'

function UserProfil({user}) {
  const {avatar_url, followers, following, public_repos, name, login, created_at} = user
  const createDate = new Date(created_at)

  return (
    <div className="profileView">
        <img src={avatar_url} alt="" />
        <h2>{name || login}</h2>
        <div className="nameDiv">
          <a target='_blank' href={`https://github.com/${login}`}>Visit Official Github Profile</a>
          <p>User joined on {`${createDate.getDate()} ${createDate.toLocaleString('en-us', {month: 'short'})} ${createDate.getFullYear()}`}</p>
        </div>
        <p>Public Repos: {public_repos}</p>
        <p>Followers: {followers}</p>
        <p>Following: {following}</p>
      </div>
  )
}

export default UserProfil
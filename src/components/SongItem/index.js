import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const SongItem = props => {
  const {item, deleteSong} = props
  const {id, imageUrl, name, genre, duration} = item
  const deleteClicked = () => {
    deleteSong(id)
  }

  return (
    <li className="item">
      <div className="d">
        <img src={imageUrl} className="img" alt="track" />
        <div className="det">
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="d">
        <p className="duration">{duration}</p>
        <button
          type="button"
          className="but"
          data-testid="delete"
          onClick={deleteClicked}
        >
          <AiOutlineDelete />
        </button>
      </div>
    </li>
  )
}
export default SongItem

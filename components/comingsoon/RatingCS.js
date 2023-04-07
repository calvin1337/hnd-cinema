
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faChevronDown} from '@fortawesome/free-solid-svg-icons'

const RatingCS = () => {
  return (
    <div class="flex items-center justify-around flex-col h-full">
        <FontAwesomeIcon icon={faAngleUp} size={"2xl"}/>
        <h3>Rating</h3>
        <FontAwesomeIcon icon={faChevronDown} size={"2xl"} />
    </div>
  )
}

export default RatingCS

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faChevronDown} from '@fortawesome/free-solid-svg-icons'
import { updateDoc, doc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { getDoc } from 'firebase/firestore'




const RatingCS = (props) => {



  const updateRating = async (id) => {
    const itemRef = doc(db, "comingsoon", id);
    const itemDoc = await getDoc(itemRef);
  
    if (itemDoc.exists()) {
      const currentVotes = itemDoc.data().total_votes;
      const currentUpvotes = itemDoc.data().upvotes;
      await updateDoc(itemRef, { upvotes: currentUpvotes + 1 });
      await updateDoc(itemRef, { total_votes: currentVotes + 1 });
      console.log(itemDoc)
    } else {
      console.log("No such document!");
    }
  };
  
  

  const upvote = (id) => {
   updateRating(id)
   props.updateRating()
  }

  const downvote = () => {
    console.log("downvote")
}
  
  return (
    <div class="flex items-center justify-around flex-col h-full">
        <FontAwesomeIcon className="hover:cursor-pointer" onClick={() => upvote(props.id)} icon={faAngleUp} size={"2xl"}/>
        <h3>Rating</h3>
        <FontAwesomeIcon className="hover:cursor-pointer" onClick={downvote} icon={faChevronDown} size={"2xl"} />
    </div>
  )
}

export default RatingCS

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faChevronDown} from '@fortawesome/free-solid-svg-icons'
import { updateDoc, doc, collection, increment } from "firebase/firestore";
import { db } from "../../firebase";
import { getDoc } from 'firebase/firestore'




const RatingCS = (props) => {



  const updateRating = async (id, vote) => {
    const itemRef = doc(db, "comingsoon", id);
    const itemDoc = await getDoc(itemRef);
  
    if (itemDoc.exists()) {
      const currentVotes = itemDoc.data().total_votes;
      const currentUpvotes = itemDoc.data().upvotes;
      
      await updateDoc(itemRef, { upvotes: increment(vote ? 1 : 0) });
      await updateDoc(itemRef, { total_votes: increment(1)});
      console.log(itemDoc)
    } else {
      console.log("No such document!");
    }
  };
  
  

  const upvote = (id) => {
   updateRating(id, true)
   props.updateRating()
  }

  const downvote = (id) => {
    updateRating(id, false)
    props.updateRating()
}
  
  return (
    <div className="flex items-center justify-around flex-col h-full">
        <FontAwesomeIcon className="hover:cursor-pointer" onClick={() => upvote(props.id)} icon={faAngleUp} size={"2xl"}/>
        <h3>Rating</h3>
        <FontAwesomeIcon className="hover:cursor-pointer" onClick={() => downvote(props.id)} icon={faChevronDown} size={"2xl"} />
    </div>
  )
}

export default RatingCS
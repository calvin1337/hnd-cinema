// Author: Calvin Donaldson
// Date: 07/05/2023
// Description: RatingCS component for upvoting and downvoting movie ratings

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { updateDoc, doc, increment } from "firebase/firestore";
import { db } from "../../firebase";
import { getDoc } from 'firebase/firestore';

const RatingCS = (props) => {
  // Function to update the rating of a movie
  const updateRating = async (id, vote) => {
    const itemRef = doc(db, "comingsoon", id); // Get the reference to the movie document
    const itemDoc = await getDoc(itemRef); // Get the document data

    if (itemDoc.exists()) {
      const currentVotes = itemDoc.data().total_votes;
      const currentUpvotes = itemDoc.data().upvotes;

      // Update the upvotes and total_votes fields based on the vote
      await updateDoc(itemRef, { upvotes: increment(vote ? 1 : 0) });
      await updateDoc(itemRef, { total_votes: increment(1) });
      console.log(itemDoc);
    } else {
      console.log("No such document!");
    }
  };

  // Function to handle the upvote action
  const upvote = (id) => {
    updateRating(id, true); // Call the updateRating function with a true vote
    props.updateRating(); // Update the rating in the parent component
  };

  // Function to handle the downvote action
  const downvote = (id) => {
    updateRating(id, false); // Call the updateRating function with a false vote
    props.updateRating(); // Update the rating in the parent component
  };

  return (
    <div className="flex items-center justify-around flex-col h-full">
        <FontAwesomeIcon className="hover:cursor-pointer" onClick={() => upvote(props.id)} icon={faAngleUp} size={"2xl"}/>
        <h3>Rating</h3>
        <FontAwesomeIcon className="hover:cursor-pointer" onClick={() => downvote(props.id)} icon={faChevronDown} size={"2xl"} />
    </div>
  )
}

export default RatingCS;
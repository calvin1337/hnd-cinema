import { useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';

export const Payment = (props) => {
  useEffect(() => {
    const fetchShowing = async () => {
      try {
        const showingRef = doc(db, 'showings', props.booked.showingID);
        const docSnap = await getDoc(showingRef);
        if (docSnap.exists()) {
          const showingData = docSnap.data();
          console.log('Showing Data:', showingData);
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.log('Error getting document:', error);
      }
    };

    fetchShowing();
  }, [props.booked.showingID]);
console.log(props.booked)
  return (
    <div>
      {/* Payment component content */}
    </div>
  );
};
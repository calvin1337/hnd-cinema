import { useRouter } from "next/router";
import { AuthContext } from "@/hooks/AuthContext";
import ViewBookings from "@/components/user/ViewBookings";
import ManageAccount from "@/components/user/ManageAccount";
import { useState, useContext, useEffect} from "react"
import { db } from "@/firebase";
import { collection, doc, getDoc } from "firebase/firestore";

const withAuthentication = (WrappedComponent) => {
  const ProtectedRoute = (props) => {
    const router = useRouter();
    const { user } = useContext(AuthContext);

    useEffect(() => {
      if (!user) {
        // User is not signed in, redirect to sign-in page
        router.push("/");
      }
    }, [user, router]);

    if (!user) {
      // Render nothing if user is not signed in
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return ProtectedRoute;
};

const MyAccount = () => {
  const [selector, setSelector] = useState("bookings");
  const [userBookings, setUserBookings] = useState([]);
  const { user } = useContext(AuthContext); // Add this line to access the user from AuthContext

  const fetchUserBookings = async () => {
    const fetchUserBookings = async () => {
      const userRef = doc(collection(db, "users"), user.uid);
      const docSnap = await getDoc(userRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        console.log(docSnap.data().bookings)
        setUserBookings(docSnap.data().bookings)
      } else {
        console.log("No such document!");
      }
    }
  };

  useEffect(() => {
    fetchUserBookings();
  }, []);

  return (
    <div className="text-center text-white container mx-auto py-5">
      <div className="text-2xl font-bold">
        <h1>Hello, {user.displayName} Welcome!</h1>
        <h2 className="pt-5">User Dashboard</h2>
      </div>
      <div className="gap-5 flex flex-row justify-center mt-5">
        <button
          onClick={() => setSelector("bookings")}
          className={selector === "bookings" ? "text-white" : "text-gray-500"}
        >
          View Bookings
        </button>
        <button
          onClick={() => setSelector("manage")}
          className={selector === "manage" ? "text-white" : "text-gray-500"}
        >
          Manage Account
        </button>
      </div>
      {selector === "bookings" ? (
        <ViewBookings bookings={userBookings} />
      ) : (
        <ManageAccount />
      )}
    </div>
  );
};

export default withAuthentication(MyAccount);
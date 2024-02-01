import {
  getFirestore,
  collection,
  addDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import initializeStripe from "./initializeStripe";

export async function createMonthlyCheckout(uid) {
  const firestore = getFirestore();

  const checkoutSessionRef = await addDoc(
    collection(doc(firestore, "users", uid), "checkout_sessions"),
    {
      price: "price_1O5G0CH01vvQqMUsNCPyD1w1",
      success_url: `${window.location.origin}/settings`,
      cancel_url: `${window.location.origin}/for-you`,
    }
  );

  onSnapshot(checkoutSessionRef, async (snap) => {
    const { sessionId } = snap.data();
    if (sessionId) {
      const stripe = await initializeStripe();
      stripe?.redirectToCheckout({ sessionId });
    }
  });
}

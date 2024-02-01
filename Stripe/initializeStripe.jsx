import { loadStripe } from "@stripe/stripe-js";

let stripePromise = null;

const initializeStripe = async () => {
  if (!stripePromise) {
    stripePromise = await loadStripe(
      "pk_test_51O2FntH01vvQqMUsH5oZoxehrauO2uLHlReLPJzSt4CU52dSz462j0P6HQA6xzsbtpRvTu0w3Q0qEWMWAiydhqhe002zLXmFxP"
    );
  }
  return stripePromise;
};

export default initializeStripe;

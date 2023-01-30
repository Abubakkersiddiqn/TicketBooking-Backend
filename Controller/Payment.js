
import Stripe from 'stripe';

const stripe_key = process.env.stripe_key;
const stripe = new Stripe(stripe_key);
export const payment = async (req, res) => {
    let status, error;
    const { token, amount } = req.body;
    try {
      await stripe.charges.create({
        source: token.id,
        amount,
        currency: 'usd',
      });
      status = 'success';
    } catch (error) {
      console.log(error);
      status = 'Failure';
    }
    res.json({ error, status });
  }
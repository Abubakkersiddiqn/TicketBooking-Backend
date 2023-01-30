
import Stripe from 'stripe';

const stripe_key='sk_test_51MT5FaSEULRJHhb7b1kSPPGZnmM6359GUYuVsANBNnOKKX5ewH7xOd2j2XtHx6X03VW1EG3nOj4WtaojxIob8NuJ004SBguT4v'
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
// server/routes/stripeRoutes.js
const express = require('express');
const stripe = require('../config/stripe');
const router = express.Router();

router.post('/create-account-link', async (req, res) => {
  try {
    const account = await stripe.accounts.create({ type: 'express' });
    const accountLink = await stripe.accountLinks.create({
      account: account.id,
      refresh_url: 'http://localhost:5173/dashboard/settings',
      return_url: 'http://localhost:5173/dashboard/settings',
      type: 'account_onboarding',
    });

    res.json({ url: accountLink.url });
  } catch (err) {
    console.error(err);
    res.status(500).send('Stripe error');
  }
});

module.exports = router;

import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
	const stripePrice = price * 100;
	const publishKey =
		"pk_test_51KYIQ2COjp5BEWfh7iE57timtY6m0Z89xxykyyC0pK1C96e7JSQcxRSZa6CfvsPgPybOH4shoJhW8f2Ez0dzzpHs00Js8ZoeNT";

	const onToken = (token) => {
		console.log({ token });
		alert("Payment successful");
	};

	return (
		<StripeCheckout
			label="Pay now"
			name="CRWN Clothing Ltd."
			description={`your total is $${price}`}
			shippingAddress
			billingAddress
			amount={stripePrice}
			token={onToken}
			panelLabel="Paynow"
			stripeKey={publishKey}
			image='https://svgshare.com/i/CUz.svg'
		/>
	);
};

export default StripeCheckoutButton;

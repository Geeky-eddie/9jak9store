import { FormEventHandler, useEffect, useState } from "react";
import { PaystackButton } from "react-paystack";
import { PaystackProps } from "react-paystack/dist/types";
// import { useRouter } from "next/router";

type referenceObj = {
	message: string;
	reference: string;
	status: "success" | "failure";
	trans: string;
	transaction: string;
	trxref: string;
};

const Paystack: React.FC = (): JSX.Element => {
	const [ref, setRef] = useState("");
	const [email, setEmail] = useState("");
	const [amount, setAmount] = useState(0);
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		setSuccess(false);
		setRef("" + Math.floor(Math.random() * 1000000000 + 1));
	}, [success]);

	// var login = "pk_test_73cb9b17422535db606c4d5ffe4dd180f1363afd";

	const config: PaystackProps = {
		reference: ref,
		email: email,
		firstname: name,
		lastname: surname,
		label: name + " " + surname,
		amount: (amount * 100) | 0,
		publicKey: process.env.NEXT_PUBLIC_PAYSTACK_TEST_PUBLIC_KEY as string,
		currency: "NGN",
	};

	

	const onSuccess = async (reference: referenceObj) => {
		const res = await fetch(`/api/verify/${reference.reference}`);
		const verifyData = await res.json();

		if (verifyData.data.status === "success") {
			setSuccess(true);
			setEmail("");
			setAmount(0);
			setName("");
			setSurname("");
		}
		// window.location.href= "https://geekyeddietech.com"
		alert("payment successful");
		
	};

	const onClose = () => {
		alert("Payment cancelled.");
	};

	const componentProps = {
        ...config,
        text: `Pay ₦${amount | 0}`,
		// onSuccess,
        onClose
    };



	return (
		<div id="paymentForm" className=" flex flex-col my-4">
			<div className="form-group flex flex-col">
				<label htmlFor="email">Email Address</label>
				<input
					type="email"
					id="email-address"
					required
					placeholder="enter your email address"
					color="black"
					className="text-black p-3"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div className="form-group flex flex-col my-4">
				<label htmlFor="amount">Amount</label>
				<input
					type="number"
					step="0.01"
					min={0}
					id="amount"
					placeholder="enter an amount"
					color="black"
					className="text-black p-3"
					required
					value={amount}
					onChange={(e) => setAmount(Number.parseFloat(e.target.value))}
				/>
			</div>
			<div className="form-group flex flex-col my-4">
				<label htmlFor="first-name">First Name</label>
				<input
					type="text"
					id="first-name"
					placeholder="enter your first name"
					color="black"
					className="text-black p-3"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div className="form-group flex flex-col my-4">
				<label htmlFor="last-name">Last Name</label>
				<input
					type="text"
					id="last-name"
					placeholder="enter your last name"
					color="black"
					className="text-black p-3"
					value={surname}
					onChange={(e) => setSurname(e.target.value)}
				/>
			</div>
			<button className=" bg-black  text-white text-center p-2 rounded-lg">
			<PaystackButton {...componentProps} />
			</button>
			
		</div>
	);
};

export default Paystack;

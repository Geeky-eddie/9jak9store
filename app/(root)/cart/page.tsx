"use client";

import useCart from '@/lib/hooks/useCart';
import { useUser } from '@clerk/nextjs';
import { MinusCircle, PlusCircle, Trash } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEventHandler, useEffect, useState } from "react";
import { PaystackButton } from "react-paystack";
import { PaystackProps } from "react-paystack/dist/types";
import PreloadAnimation from "../../../components/PreloadAnimation";
import "../../preloader.css";

const Cart = () => {
  const router = useRouter();
  const { user } = useUser();
  const cart = useCart();
  const [showPaystack, setshowPaystack] = useState(false);

  type referenceObj = {
    message: string;
    reference: string;
    status: "success" | "failure";
    trans: string;
    transaction: string;
    trxref: string;
  };

  const [totalRounded, setTotalRounded] = useState(0);

  useEffect(() => {
    const total = cart.cartItems.reduce(
      (acc, cartItem) => acc + cartItem.item.price * cartItem.quantity,
      0
    );
    const roundedTotal = parseFloat(total.toFixed(2));
    setTotalRounded(roundedTotal);
  }, [cart.cartItems]);

  const [ref, setRef] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState<number>(totalRounded);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setSuccess(false);
    setRef("" + Math.floor(Math.random() * 1000000000 + 1));
  }, [success]);

  useEffect(() => {
    setAmount(totalRounded);
  }, [totalRounded]);
  

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
    alert("payment successful");
  };


  

  const onClose = () => {
    alert("Payment cancelled.");
  };

  const componentProps = {
    ...config,
    text: `Pay ₦${amount | 0}`,
    onClose
  };

  useEffect(() => {
    const handlePrint = () => {
      window.print();
    };

    const downloadButton = document.getElementById('download-button');
    if (downloadButton) {
      downloadButton.addEventListener('click', handlePrint);
    }

    return () => {
      if (downloadButton) {
        downloadButton.removeEventListener('click', handlePrint);
      }
    };
  }, []);

  const handleCheckout = () => {
    setshowPaystack(true);
  }

  const [isPreloading, setIsPreloading] = useState(true);

 
  useEffect(() => {
    setTimeout(() => {
      setIsPreloading(false);
    }, 4000);

    const reloadKey = "reloadFlag4";
    const hasReloaded = localStorage.getItem(reloadKey);

    // Check if the page has already been reloaded
    if (!hasReloaded) {
      // Reload the page once after 4 seconds (4000 milliseconds)
      const timeout = setTimeout(() => {
        localStorage.setItem(reloadKey, "true"); // Set flag in local storage
        window.location.reload();
      }, 4000);

      // Clear the timeout to prevent the reload after the first time
      return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <>
    {isPreloading ? (
      <PreloadAnimation />
    ) : (
    <div className="flex gap-20 py-16 px-10 max-lg:flex-col max-sm:px-3">
      <div className="w-2/3 max-lg:w-full">
        <p className="text-heading3-bold">Shopping Cart</p>
        <hr className="my-6" />

        {cart.cartItems.length === 0 ? (
          <p className="text-body-bold">No item in cart</p>
        ) : (
          <div>
            {cart.cartItems.map((cartItem) => (
              <div className="w-full flex max-sm:flex-col max-sm:gap-3 hover:bg-red-800 px-4 py-3 items-center max-sm:items-start justify-between" key={cartItem.item._id}>
                <div className="flex items-center">
                  <Image
                    src={cartItem.item.media[0]}
                    width={100}
                    height={100}
                    className="rounded-lg w-32 h-32 object-cover"
                    alt="product"
                  />
                  <div className="flex flex-col gap-3 ml-4">
                    <p className="text-body-bold">{cartItem.item.title}</p>
                    {cartItem.color && (
                      <p className="text-small-medium">{cartItem.color}</p>
                    )}
                    {cartItem.size && (
                      <p className="text-small-medium">{cartItem.size}</p>
                    )}
                    <p className="text-small-medium">${cartItem.item.price}</p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <MinusCircle
                    className="hover:text-red-1 cursor-pointer"
                    onClick={() => cart.decreaseQuantity(cartItem.item._id)}
                  />
                  <p className="text-body-bold">{cartItem.quantity}</p>
                  <PlusCircle
                    className="hover:text-red-1 cursor-pointer"
                    onClick={() => cart.increaseQuantity(cartItem.item._id)}
                  />
                </div>

                <Trash
                  className="hover:text-red-1 cursor-pointer"
                  onClick={() => cart.removeItem(cartItem.item._id)}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="w-1/3 max-lg:w-full flex flex-col gap-8 bg-red-800 rounded-lg px-4 py-5">
        <p className="text-heading4-bold pb-4">
          Summary{' '}
          <span>{`(${cart.cartItems.length} ${
            cart.cartItems.length > 1 ? 'items' : 'item'
          })`}</span>
        </p>
        <div className="flex justify-between text-body-semibold">
          <span>Total Amount</span>
          <span> ₦{totalRounded}</span>
        </div>
            <Link href={"/paymentunavailable"}>
            <button className="border rounded-lg text-body-bold bg-black py-3 w-full hover:bg-red-800 hover:text-white" > 
        {/* onClick={handleCheckout} */}
          Proceed to Checkout
        </button>
            </Link>
        

        {showPaystack && 
        <div id="paymentForm" className="flex flex-col my-4">
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
          <button className="bg-black text-white text-center p-2 rounded-lg">
            <PaystackButton {...componentProps} />
          </button>
        </div>}

        <Link href="/banktransfer">
          <button className="border rounded-lg text-body-bold bg-black py-3 w-full hover:bg-red-800 hover:text-white">
            Bank Transfer
          </button>
        </Link>

        <button id="download-button" className="border rounded-lg text-body-bold bg-black py-3 w-full hover:bg-red-800 hover:text-white">
          Download Products
        </button>
      </div>
    </div>
     )}
     </>
  );
};

export default Cart;

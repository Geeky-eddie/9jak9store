"use client";

import useCart from "@/lib/hooks/useCart";

import { UserButton, useUser } from "@clerk/nextjs";
import { CircleUserRound, Menu, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser();
  const cart = useCart();

  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [query, setQuery] = useState("");

  const closeMenu = () => {
    setDropdownMenu(false);
  };

  return (
    <div className="sticky top-0 z-10 py-2 px-10 flex gap-2 justify-between items-center bg-red-800 max-sm:px-2">
      <Link href="/" >
        <Image src="/logo9ja.svg" alt="logo" width={60} height={40} />
      </Link>

      <div className="flex gap-4 text-base-bold max-lg:hidden">
        <Link
          href="/"
          className={`hover:text-white ${
            pathname === "/" && "text-white"
          }`}
          
        >
          Home
        </Link>
        <Link
          href={"/programs"}
          className={`hover:text-white ${
            pathname === "/programs" && "text-white"
          }`}
        >
        Our Programs
        </Link>
        <Link
          href={user ? "/shop" : "/sign-in"}
          className={`hover:text-white ${
            pathname === "/shop" && "text-white"
          }`}
        >
        Shop
        </Link>
        <Link
          href={"/ourdogs"}
          className={`hover:text-white ${
            pathname === "/ourdogs" && "text-white"
          }`}
        >
        Our Dogs
        </Link>
        <Link
          href={"/aboutus"}
          className={`hover:text-white ${
            pathname === "/aboutus" && "text-white"
          }`}
        >
        
          About us
        </Link>
      </div>

      <div className="flex gap-3 border border-grey-2 px-3 py-1 items-center rounded-lg">
        <input
          className="outline-none bg-red-800 max-sm:max-w-[120px]"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          disabled={query === ""}
          onClick={() => router.push(`/search/${query}`)}
        >
          <Search className="cursor-pointer h-4 w-4 hover:text-white" />
        </button>
      </div>

      <div className="relative flex gap-3 items-center">
        <Link
          href="/cart"
          className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white max-md:hidden"
        >
          <ShoppingCart />
          <p className="text-base-bold">Cart ({cart.cartItems.length})</p>
        </Link>

        <Menu
          className="cursor-pointer lg:hidden"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        />

        {dropdownMenu && (
          <div className="absolute top-12 right-5 flex flex-col gap-4 p-3 rounded-lg border bg-white text-base-bold lg:hidden w-60">
            <Link href="/" className="hover:text-red-1" onClick={closeMenu}>
              Home
            </Link>
            <Link
              href={ "/programs"}
              className="hover:text-red-1"
              onClick={closeMenu}
            >
            Our Programs
            </Link>
            <Link
              href={user ? "/shop" : "/sign-in"}
              className="hover:text-red-1"
              onClick={closeMenu}
            >
            Shop
            </Link>
            <Link
              href={"/ourdogs"}
              className="hover:text-red-1"
              onClick={closeMenu}
            >
            Our Dogs
            </Link>
            <Link
              href={"/aboutus"}
              className="hover:text-red-1"
              onClick={closeMenu}
            >
             About us
            </Link>
            <Link
              href="/cart"
              className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white"
              onClick={closeMenu}
            >
              <ShoppingCart />
              <p className="text-base-bold">Cart ({cart.cartItems.length})</p>
            </Link>
          </div>
        )}

        {user ? (
          <UserButton afterSignOutUrl="/sign-in" />
        ) : (
          <Link href="/sign-in">
            <CircleUserRound />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

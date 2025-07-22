"use client";

import Link from 'next/link';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { useState } from 'react';
import "./style.css";

export default function Header() {
  const [isGateOpen, setIsGateOpen] = useState(false);
  
  const toggleGate = () => {
    setIsGateOpen(!isGateOpen);
  };
  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="title">
          GetSetGo
        </Link>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/explore">Explore</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="auth-buttons">
          <SignedOut>
            <SignInButton>
              <button className="login-button">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}

"use client";

import Link from 'next/link';
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/nextjs';
import "./style.css";

export default function Header() {
  const { user } = useUser();
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
            <div className="user-info">
                <span className="username">
                  Hello, {user?.username || 'User'}!
                </span>
              <UserButton />
            </div>
          </SignedIn>
        </div>
      </div>
    </header>
  );
}

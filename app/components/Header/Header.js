"use client";

import Link from 'next/link';
import Image from 'next/image';
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
          <button className="login-button" onClick={toggleGate}>
          <Image 
              src={isGateOpen ? "./images/login.svg" : "./images/logout.svg"} 
              alt={isGateOpen ? "Logout" : "Login"} 
              width={20} 
              height={20} 
              className="gate-icon"
            />
            {isGateOpen ? 'Logout' : 'Login'}
          </button>
        </div>
      </div>
    </header>
  );
}

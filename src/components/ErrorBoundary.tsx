"use client";

import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Page error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#fafaf8] px-4">
          <div className="text-center max-w-md">
            <p className="font-serif text-2xl text-[#2c2c2c] mb-4">Diçka shkoi keq</p>
            <p className="text-[#2c2c2c]/60 mb-6">Rifreskoni faqen ose na kontaktoni në WhatsApp.</p>
            <a
              href="https://wa.me/38970461527"
              className="inline-block rounded-full bg-[#b76e79] px-6 py-3 text-white"
            >
              WhatsApp
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

import { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
title: "POST - FireCRUD",
  description: "Generated from FireCRUD.",
  };

  export default function POSTLayout({
    children,
    }: {
    children: React.ReactNode;
    }) {
    return (
    <>
      <div className="border-b">
      </div>
      <div>{children}</div>
    </>
    );
    }
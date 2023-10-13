import { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
title: "User - FireCRUD",
  description: "Generated from FireCRUD.",
  };

  export default function UserLayout({
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
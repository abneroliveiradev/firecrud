import { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
title: "USER - FireCRUD",
  description: "Generated from FireCRUD.",
  };

  export default function USERLayout({
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
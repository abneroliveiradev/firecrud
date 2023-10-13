import { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
title: "Post - FireCRUD",
  description: "Generated from FireCRUD.",
  };

  export default function PostLayout({
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
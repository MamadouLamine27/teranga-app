"use client";

import { usePathname } from "next/navigation";
import AdminBar from "@/components/layout/AdminBar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const surLogin = pathname === "/admin/login";
  return (
    <>
      {!surLogin && <AdminBar />}
      {children}
    </>
  );
}

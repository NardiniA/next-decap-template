"use client";

import { init } from "@/cms/init";
import dynamic from "next/dynamic";

const CMS = dynamic(init, { ssr: false });

export default function AdminPage() {
    return <CMS />
}
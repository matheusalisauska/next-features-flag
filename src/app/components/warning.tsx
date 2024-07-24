'use client';

import { useFlags, useFlagsmith } from "flagsmith/react";

export const Warning = () => {
    const { warning, } = useFlags(['warning']);

    return (
        <div className="flex flex-col items-center justify-center gap-1 bg-red-100 border-red-200 border-[2px] p-4 rounded-lg">
            <h2 className="text-red-500 text-lg font-semibold">Warning!</h2>
            <p className="text-black font-medium">This version is currently in alpha version.</p>
        </div>
    )
}
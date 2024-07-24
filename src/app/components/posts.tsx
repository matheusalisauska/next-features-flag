'use client';

import { useFlags, useFlagsmith } from "flagsmith/react";

export const Posts = () => {
    const { posts } = useFlags(['posts']);

    if (!posts.enabled) {
        return null;
    }

    return (
        <div className="flex flex-col gap-4 w-full">
            <div className="flex justify-between gap-2">
                <h1>Posts</h1>
                <p>Latest</p>
            </div>
            {Array.from(Array(3)).map((_, index) => (
                <div key={index} className="flex flex-col gap-2 border-neutral-200 bg-neutral-50 border-[2px] p-4 rounded-lg">
                    <h2 className="font-semibold text-lg">Implement Feature Flags in Nextjs</h2>
                    <h3>How to implement feature flags in nextjs with flagsmith</h3>
                </div>
            ))}
        </div>
    )
}
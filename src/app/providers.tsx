"use client";


import { FlagsmithProvider } from 'flagsmith/react';
import { createFlagsmithInstance } from 'flagsmith/isomorphic'
import React, { useRef } from 'react';


interface ProvidersProps {
    serverState: any;
    children: React.ReactNode;
}

export default function Providers({ serverState, children }: ProvidersProps) {
    const flagsmith = useRef(createFlagsmithInstance());

    return (
        <FlagsmithProvider flagsmith={flagsmith.current} serverState={serverState}>
            {children}
        </FlagsmithProvider>
    )
}
"use client";

import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";

const MyParallaxProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ParallaxProvider>
            {children}
        </ParallaxProvider>
    );
};


export default MyParallaxProvider;

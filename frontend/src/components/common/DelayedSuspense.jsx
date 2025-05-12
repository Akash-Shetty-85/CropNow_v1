// components/common/DelayedSuspense.jsx
import React, { useEffect, useState } from 'react';

const DelayedSuspense = ({ children, fallback, delay = 2000 }) => {
    const [showFallback, setShowFallback] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => setShowFallback(false), delay);
        return () => clearTimeout(timeout);
    }, [delay]);

    return showFallback ? fallback : children;
};

export default DelayedSuspense;

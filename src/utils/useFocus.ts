import React, { useEffect, useRef, useState } from 'react'

const useFocus = () => {
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
         ref.current?.focus();
    }, []);
    
    return ref;
}

export default useFocus
import React, { useEffect, useState } from 'react';

function Typing({ duration, list }) {
    const [display, setDisplay] = useState('');
    const [index, setIndex] = useState(0); // To keep track of the current sentence index
    const [isDeleting, setIsDeleting] = useState(false); // To track whether we are typing or deleting
    const [charIndex, setCharIndex] = useState(0); // To keep track of the character index within the sentence

    useEffect(() => {
        let timeout;
        if (!isDeleting && charIndex < list[index].length) {
            timeout = setTimeout(() => {
                setDisplay((prev) => prev + list[index][charIndex]);
                setCharIndex((prev) => prev + 1);
            }, duration);
        } else if (isDeleting && charIndex > 0) {
            timeout = setTimeout(() => {
                setDisplay((prev) => prev.slice(0, -1));
                setCharIndex((prev) => prev - 1);
            }, duration / 4);
        } else if (!isDeleting && charIndex === list[index].length) {
            timeout = setTimeout(() => {
                setIsDeleting(true);
            }, 1500);
        } else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % list.length); // Move to the next sentence, loop back to the start
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, list, duration, index]);

    return (
        <div>
            {display}
        </div>
    );
}

export default Typing;

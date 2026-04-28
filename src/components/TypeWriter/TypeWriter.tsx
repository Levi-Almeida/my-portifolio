import { Typography } from "@mui/material";
import type { TypographyProps } from "@mui/material";
import { useEffect, useState } from "react";

type Variant = TypographyProps["variant"];

interface TypewriterProps {
    text: string;
    delay: number;
    variant?: Variant
    color?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, delay, variant, color }) => {

    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, delay, text]);

    return <Typography variant={variant}  sx={{ textAlign:"center", color:color }}>{currentText}</Typography>;
}

export default Typewriter
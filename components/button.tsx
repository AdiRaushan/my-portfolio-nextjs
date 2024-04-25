import React from "react";

const Button = ({
    text,
    secondaryText,
    color = "#070707",
}: {
    text: string;
    secondaryText: string | undefined;
    color?: string;
}) => {
    return (
        <div style={{
            background: color,
        }}
            className="flex items-center gap-2 px-2 py-1 text-sm font-medium text-white rounded-lg max-w-fit">
            <span>{text}</span>
            {secondaryText && <span className="font-light text-neutral-300">{secondaryText}</span>}
        </div>
    );
};

export default Button;

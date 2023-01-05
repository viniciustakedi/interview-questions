import React, { AllHTMLAttributes } from 'react';
import './input.scss';

interface ParagraphProps {
    elipsePosition?: string
    amount?: number;
    value: string;
}

const ElipseField: React.FunctionComponent<ParagraphProps> = ({ elipsePosition, amount, value }) => {
    const valueParagraph = amount && value.length > amount
        ? value.substring(0, amount).trimEnd() + '...'
        : value;

    return (
        <>
            {valueParagraph}
        </>
    );
}

export default ElipseField;
import React, { AllHTMLAttributes } from 'react';
import './input.scss';

interface ParagraphProps extends AllHTMLAttributes<HTMLParagraphElement> {
    elipsePosition?: string;
    amount?: number;
    id: string;
    value: string;
}

const ElipseField: React.FunctionComponent<ParagraphProps> = ({ elipsePosition, id, amount, value, ...rest }) => {
    const valueParagraph = amount ? value.substring(0, amount) + '...' : value;

    return (
        <p id={id} {...rest}>{valueParagraph}</p>
    );
}

export default ElipseField;
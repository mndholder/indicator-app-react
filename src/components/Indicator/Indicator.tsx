import React from 'react';

import { getRotationValue } from './Indicator.utils';

import "./Indicator.styles.css";

export interface IndicatorProps {
    current: number;
    min?: number;
    max?: number;
}

export const Indicator = ({ min = 0, max = 100, current = 0 }: IndicatorProps) => {
    return (
        <div className="Indicator">
            <div
                className="Indicator__Scale"
                style={{
                    "--arrow-rotation": `${getRotationValue(current, min, max)}deg`
                } as React.CSSProperties}
            ></div>
            <span className="Indicator__Value">{current.toFixed(0)}&deg;C</span>
        </div>
    );
};

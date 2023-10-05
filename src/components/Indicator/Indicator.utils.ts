import { MIN_ANGLE, MAX_ANGLE } from './Indicator.constants';

export const getRotationValue = (
    currentValue: number,
    minScaleValue: number = 0,
    maxScaleValue: number = 100
) => {
    if (currentValue <= minScaleValue) {
        return MIN_ANGLE;
    } else if (currentValue >= maxScaleValue) {
        return MAX_ANGLE;
    } else {
        const ANGLE_INTERVAL = Math.abs(MIN_ANGLE) + Math.abs(MAX_ANGLE);
        return (
            (ANGLE_INTERVAL * (currentValue - minScaleValue)) /
            (maxScaleValue - minScaleValue) +
            MIN_ANGLE
        );
    }
};

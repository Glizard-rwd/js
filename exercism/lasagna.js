/*
EXPECTED MINUTE IN OVEN = 40
remainining minutes in oven = 40 - actual time = 10
preparation time in minutes = 2 * layer
total time (n of layer, actual time) = 2 * layer + actual time */
export const PREPARATION_MINUTES_PER_LAYER = 2;
export const EXPECTED_MINUTES_IN_OVEN = 40;
export function remainingMinuteInOven(actualMinuteInOven) {
    return EXPECTED_MINUTES_IN_OVEN-actualMinuteInOven;
}

export function preparationTimeInMinute(numberOfLayers) {
    return PREPARATION_MINUTES_PER_LAYER * numberOfLayers;
}

export function totalTimeInMinutes(numberOfLayers, actualMinuteInOven) {
    return PREPARATION_MINUTES_PER_LAYER * numberOfLayers + actualMinuteInOven;
}
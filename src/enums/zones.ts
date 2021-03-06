import { COLOR_MAP } from './interventions';
import { fail } from 'assert';

export enum ChartType {
  CASE_GROWTH_RATE = 'Infection growth rate',
  POSITIVE_TESTS = 'Positive test rate',
  HOSPITAL_USAGE = 'ICU headroom used',
}

export const ChartTypeToMetricName = {
  [ChartType.CASE_GROWTH_RATE]: 'Infection growth rate',
  [ChartType.POSITIVE_TESTS]: 'Positive test rate',
  [ChartType.HOSPITAL_USAGE]: 'ICU headroom used',
};

export const ChartTypeToTitle = {
  [ChartType.CASE_GROWTH_RATE]: 'Infection growth rate',
  [ChartType.POSITIVE_TESTS]: 'Positive test rate',
  [ChartType.HOSPITAL_USAGE]: 'ICU headroom used',
};

export interface LevelInfo {
  level: string;
  upperLimit: number;
  name: string;
  color: string;
  detail: string;
}

export enum Level {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  UNKNOWN = 'UNKNOWN',
}

export interface Zones {
  [Level.LOW]: LevelInfo;
  [Level.MEDIUM]: LevelInfo;
  [Level.HIGH]: LevelInfo;
  [Level.UNKNOWN]: LevelInfo;
}

export const COLOR_ZONE = {
  [Level.LOW]: COLOR_MAP.GREEN.BASE,
  [Level.MEDIUM]: COLOR_MAP.ORANGE.BASE,
  [Level.HIGH]: COLOR_MAP.RED.BASE,
  [Level.UNKNOWN]: COLOR_MAP.GRAY.BASE,
};

// For the summary text
export const LEGEND_TEXT: Zones = {
  [Level.LOW]: {
    level: Level.LOW,
    upperLimit: 0,
    name: 'Reduced',
    color: COLOR_MAP.GREEN.BASE,
    detail: 'Reduced risk based on reopening metrics.',
  },
  [Level.MEDIUM]: {
    level: Level.MEDIUM,
    upperLimit: 0,
    name: 'Moderate',
    color: COLOR_MAP.ORANGE.BASE,
    detail: 'Moderate risk based on reopening metrics.',
  },
  [Level.HIGH]: {
    level: Level.HIGH,
    upperLimit: 0,
    name: 'Elevated',
    color: COLOR_MAP.RED.BASE,
    detail: 'Elevated risk based on reopening metrics.',
  },
  [Level.UNKNOWN]: {
    level: Level.UNKNOWN,
    upperLimit: 0,
    name: 'Unknown',
    color: COLOR_MAP.GRAY.BASE,
    detail: 'We don’t have enough data to assess reopening risk.',
  },
};

// Case Growth Rate
export const CASE_GROWTH_RATE: Zones = {
  [Level.LOW]: {
    level: Level.LOW,
    upperLimit: 1.0,
    name: 'Low',
    color: COLOR_MAP.GREEN.BASE,
    detail: 'Active cases are decreasing',
  },
  [Level.MEDIUM]: {
    level: Level.MEDIUM,
    upperLimit: 1.2,
    name: 'Medium',
    color: COLOR_MAP.ORANGE.BASE,
    detail: 'Active cases are slowly increasing',
  },
  [Level.HIGH]: {
    level: Level.HIGH,
    upperLimit: Infinity,
    name: 'High',
    color: COLOR_MAP.RED.BASE,
    detail: 'Active cases are increasing',
  },
  [Level.UNKNOWN]: {
    level: Level.UNKNOWN,
    upperLimit: 0,
    name: 'Unknown',
    color: COLOR_MAP.GRAY.BASE,
    detail: 'Insufficient data to assess',
  },
};

// Positive Tests (upperLimit as %)
export const POSITIVE_TESTS: Zones = {
  [Level.LOW]: {
    level: Level.LOW,
    upperLimit: 0.03,
    name: 'Low',
    color: COLOR_MAP.GREEN.BASE,
    detail: 'Indicates testing is widespread',
  },
  [Level.MEDIUM]: {
    level: Level.MEDIUM,
    upperLimit: 0.1,
    name: 'Medium',
    color: COLOR_MAP.ORANGE.BASE,
    detail: 'Indicates testing is not widespread',
  },
  [Level.HIGH]: {
    level: Level.HIGH,
    upperLimit: Infinity,
    name: 'High',
    color: COLOR_MAP.RED.BASE,
    detail: 'Indicates testing is limited',
  },
  [Level.UNKNOWN]: {
    level: Level.UNKNOWN,
    upperLimit: 0,
    name: 'Unknown',
    color: COLOR_MAP.GRAY.BASE,
    detail: 'Insufficient data to assess',
  },
};

// Hospital Usage (upperLimit as %)
export const HOSPITAL_USAGE: Zones = {
  [Level.LOW]: {
    level: Level.LOW,
    upperLimit: 0.5,
    name: 'Low',
    color: COLOR_MAP.GREEN.BASE,
    detail: 'Can likely handle a new wave of COVID',
  },
  [Level.MEDIUM]: {
    level: Level.MEDIUM,
    upperLimit: 0.95,
    name: 'Medium',
    color: COLOR_MAP.ORANGE.BASE,
    detail: 'At risk to a new wave of COVID',
  },
  [Level.HIGH]: {
    level: Level.HIGH,
    upperLimit: Infinity,
    name: 'High',
    color: COLOR_MAP.RED.BASE,
    detail: 'Unable to handle a new wave of COVID',
  },
  [Level.UNKNOWN]: {
    level: Level.UNKNOWN,
    upperLimit: 0,
    name: 'Unknown',
    color: COLOR_MAP.GRAY.BASE,
    detail: 'Insufficient data to assess',
  },
};

const CHART_ZONES = {
  [ChartType.CASE_GROWTH_RATE]: CASE_GROWTH_RATE,
  [ChartType.POSITIVE_TESTS]: POSITIVE_TESTS,
  [ChartType.HOSPITAL_USAGE]: HOSPITAL_USAGE,
};

export function getChartColumnFromChartType(chartType: ChartType): string {
  if (chartType === ChartType.CASE_GROWTH_RATE) {
    return 'rtRange';
  } else if (chartType === ChartType.HOSPITAL_USAGE) {
    return 'icuUtilization';
  } else if (chartType === ChartType.POSITIVE_TESTS) {
    return 'testPositiveRate';
  }
  fail('Unsupported ChartType');
}

export function getLevelForChart(chartType: ChartType, value: number) {
  const allZonesForChartType = CHART_ZONES[chartType];
  return determineZone(allZonesForChartType, value);
}

export function getLevelInfoForChartType(
  chartType: ChartType,
  value: number | null,
): LevelInfo {
  const allZonesForChartType = CHART_ZONES[chartType];
  const zone = determineZone(allZonesForChartType, value);
  return allZonesForChartType[zone];
}

export function determineZone(zones: Zones, value: number | null): Level {
  // TODO(michael): Is there a typesafe way to enumerate enum values? :-/
  if (value === null) return Level.UNKNOWN;
  for (const level of [Level.LOW, Level.MEDIUM, Level.HIGH]) {
    if (value <= zones[level].upperLimit) {
      return level;
    }
  }
  return Level.UNKNOWN;
}

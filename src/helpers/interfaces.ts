export interface buttonProps {
    // image:string;
    // idName: string;
    sandTimer: () => void;
}

export interface timerState {
    startTime: Date | null;
    endTime: Date | null;
    poweredOn: boolean;
}

export interface timerProps {
    // counter: () => void;
    start: Date | null;
    bracketTime: string | null;
    power: boolean;

}
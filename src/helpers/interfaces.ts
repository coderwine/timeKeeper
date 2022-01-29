export interface buttonProps {
    // image:string;
    // idName: string;
    sandTimer: () => void;
    // sandTimer: () => string;
}

export interface timerState {
    // startTime: Date | null;
    startTime: string | null;
    endTime: Date | null;
    // poweredOn: boolean;
}

export interface timerProps {
    // counter: () => void;
    // start: Date | null;
    start: string | null;
    bracketTime: string | null;
    // power: boolean;

}
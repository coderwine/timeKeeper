export interface buttonProps {
    image:string;
    idName: string;
}

export interface timerState {
    startTime: Date;
    bracketTime: number | null;
    endTime: Date | null;
}
import { Period } from './period.enum';

export class Goal {
    id: string;
    name: string;
    description?: string;
    period: Period;
    currentAmount: number;
    targetAmount: number;
    currentPercentage?: number;
}

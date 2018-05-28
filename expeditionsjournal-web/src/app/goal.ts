import { Period } from './period.enum';

export class Goal {
    id: string;
    targetAmount: number;
    name: string;
    description?: string;
    period: Period;
}

import { Period } from './period.enum';

export class Goal {
    id: string;
    name: string;
    description?: string;
    period: Period;
    currentPercentage?: number;

    private _targetAmount: number;
    get targetAmount(): number {
        return this._targetAmount;
    }
    set targetAmount(newTargetAmount: number) {

        // set value
        this._targetAmount = newTargetAmount;

        // update current percentage
        if (newTargetAmount === undefined || newTargetAmount === NaN || newTargetAmount === 0) {
            this.currentPercentage = 0;
        } else {
            this.currentPercentage = this.currentAmount / this.targetAmount;
        }
    }

    private _currentAmount: number;
    get currentAmount(): number {
        return this._currentAmount;
    }
    set currentAmount(newCurrentAmount: number) {

        // set value
        this._currentAmount = newCurrentAmount;

        // update current percentage
        if (newCurrentAmount === undefined || newCurrentAmount === NaN) {
            this.currentPercentage = 0;
        } else {
            this.currentPercentage = this.currentAmount / this.targetAmount;
            console.log('New current percentage: ' + this.currentPercentage);
        }
    }
}

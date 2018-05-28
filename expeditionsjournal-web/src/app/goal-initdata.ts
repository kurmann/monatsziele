import { Goal } from './goal';
import { Period } from './period.enum';

export const GOALSINITDATA: Goal[] = [
    {
        id: '8cd8daf1-b7d2-4bef-9fb1-456f3c4f95f0',
        name: 'Angular Lektionen lernen',
        targetAmount: 25,
        period: Period.Month
    },
    {
        id: '2e2f2ee4-eaaf-450d-8ebe-b5333dd01bf1',
        name: 'Trainingssession',
        description: 'Trainingssession aller Art (Ausdauer und Krafttraining)',
        targetAmount: 10,
        period: Period.Month
    },
    {
        id: '0608728b-ce36-4083-8e86-d03113ad74fb',
        name: 'Tanzlektionen',
        description: 'Vor Ort im Kurs oder sonstige Gelegenheit. Ein Kurs ist 25 Minuten',
        targetAmount: 20,
        period: Period.Month
    }
];

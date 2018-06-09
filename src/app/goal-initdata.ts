import { Goal } from './goal';
import { Period } from './period.enum';
import { RECORDINGINITDATA } from './recording-initdata';

export const GOALSINITDATA: Goal[] = [
    {
        id: '8cd8daf1-b7d2-4bef-9fb1-456f3c4f95f0',
        name: 'Angular Lektionen lernen',
        targetAmount: 25,
        currentAmount: 22,
        currentPercentage: 0.88,
        amountUnitOfMeasurement: 'Lektion',
        period: Period.Month
    },
    {
        id: '2e2f2ee4-eaaf-450d-8ebe-b5333dd01bf1',
        name: 'Trainingssession',
        description: 'Trainingssession aller Art (Ausdauer und Krafttraining)',
        currentAmount: 6,
        targetAmount: 10,
        currentPercentage: 0.6,
        period: Period.Month,
        amountUnitOfMeasurement: 'Trainingssession',
        recordings: RECORDINGINITDATA
    },
    {
        id: '0608728b-ce36-4083-8e86-d03113ad74fb',
        name: 'Tanzlektionen',
        description: 'Vor Ort im Kurs oder sonstige Gelegenheit. Ein Kurs ist 25 Minuten',
        currentAmount: 12,
        targetAmount: 20,
        currentPercentage: 0.6,
        amountUnitOfMeasurement: 'Tanzlektion',
        period: Period.Month
    },
    {
        id: 'd8c2607f-7de7-460d-9c86-6ff17b0d6ae7',
        name: 'Freunde treffen',
        description: 'Mit fünf Freunden abmachen',
        currentAmount: 14,
        targetAmount: 20,
        currentPercentage: 0.6,
        amountUnitOfMeasurement: 'Treffen',
        period: Period.Month
    }
];

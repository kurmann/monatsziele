import { Goal } from './goal';
import { Period } from './period.enum';
import { RECORDINGINITDATA } from './recording-initdata';

export const GOALSINITDATA: Goal[] = [
    {
        id: '8cd8daf1-b7d2-4bef-9fb1-456f3c4f95f0',
        name: 'Angular Client-Deployment',
        description: 'Web-App erfolgreich auf Azure ausrollen',
        targetAmount: 25,
        currentAmount: 25,
        currentPercentage: 1,
        amountUnitOfMeasurement: 'Milestone',
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
        recordings: RECORDINGINITDATA,
        imageUrl: 'https://images.unsplash.com/photo-1517482359597-b3f5ba0d52ce?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&h=320&fit=crop&ixid=eyJhcHBfaWQiOjI3OTM2fQ&s=5abc0e06f387240a4ec1e0c5f2f216a6',
        imageSourceUrl: 'https://unsplash.com/photos/_IkrjJCO3gs',
        imagePhotographerName: 'Dylon Nolte'
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

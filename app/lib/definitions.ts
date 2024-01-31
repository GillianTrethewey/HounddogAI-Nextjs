export type TCard = {
    id: string;
    name: string;
    description: string;
    includePattern: string;
    excludePattern: string;
    sensitivity: 'LOW' | 'MEDIUM' | 'CRITICAL';
}
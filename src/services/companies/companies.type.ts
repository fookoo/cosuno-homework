export enum CompanyFeatureEnum {
    Excavation = 'excavation',
    Plumbing = 'plumbing',
    Electrical = 'electrical',
}

export interface ICompanies {
    id: string
    name: string
    city: string
    features: CompanyFeatureEnum[]
}

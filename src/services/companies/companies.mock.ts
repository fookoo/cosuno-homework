import { CompanyFeatureEnum, ICompanies } from './companies.type'

export const mockCompanies: ICompanies[] = [
    {
        id: '1',
        name: 'Company 1',
        city: 'Warsaw',
        features: [CompanyFeatureEnum.Plumbing, CompanyFeatureEnum.Excavation, CompanyFeatureEnum.Electrical]
    }, {
        id: '2',
        name: 'Company 2',
        city: 'Berlin',
        features: [ CompanyFeatureEnum.Excavation, CompanyFeatureEnum.Electrical]
    }, {
        id: '3',
        name: 'Company 3',
        city: 'Oslo',
        features: [CompanyFeatureEnum.Plumbing, CompanyFeatureEnum.Excavation, CompanyFeatureEnum.Electrical]
    }, {
        id: '4',
        name: 'Company 4',
        city: 'Warsaw',
        features: [CompanyFeatureEnum.Plumbing, CompanyFeatureEnum.Excavation, CompanyFeatureEnum.Electrical]
    }
]
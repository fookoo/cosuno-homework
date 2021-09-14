export enum CompanyFeatureEnum {
  Excavation = 'excavation',
  Plumbing = 'plumbing',
  Electrical = 'electrical'
}

interface ICompanies {
  id: string
  name: string
  city: string
  features: CompanyFeatureEnum[]
}

export const mockCompanies: ICompanies[] = [
  {
    id: '1',
    name: 'God and Sons',
    city: 'Warsaw',
    features: [CompanyFeatureEnum.Electrical]
  },
  {
    id: '2',
    name: 'DJ 600Kv',
    city: 'Berlin',
    features: [CompanyFeatureEnum.Electrical]
  },
  {
    id: '3',
    name: 'Wide Pipe',
    city: 'Oslo',
    features: [CompanyFeatureEnum.Plumbing]
  },
  {
    id: '4',
    name: 'Grandmaster flesh',
    city: 'Warsaw',
    features: [
      CompanyFeatureEnum.Plumbing,
      CompanyFeatureEnum.Excavation,
      CompanyFeatureEnum.Electrical
    ]
  },
  {
    id: '5',
    name: 'Big Boy',
    city: 'Cracow',
    features: [CompanyFeatureEnum.Excavation, CompanyFeatureEnum.Electrical]
  },
  {
    id: '6',
    name: 'Pipe girls',
    city: 'Cracow',
    features: [CompanyFeatureEnum.Plumbing]
  }
]

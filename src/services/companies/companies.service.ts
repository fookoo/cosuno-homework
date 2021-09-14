import { CompanyFeatureEnum, ICompanies } from './companies.type'

export class CompaniesService {
  public static getCompanies(
    nameQuery = '',
    featureQuery: CompanyFeatureEnum[]
  ): Promise<ICompanies[]> {
    return new Promise<ICompanies[]>((success, error) => {
      const query = `${nameQuery ? `name=${encodeURIComponent(nameQuery)}` : ''}${
        featureQuery.length ? `&features=${encodeURIComponent(featureQuery.join(','))}` : ''
      }`

      fetch(`http://localhost:8090/companies${query ? `?${query}` : ''}`, {
        method: 'GET'
      })
        .then((response) => response.json())
        .then(success)
        .catch(error)
    })
  }
}

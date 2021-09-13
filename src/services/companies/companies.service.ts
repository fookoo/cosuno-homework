import { CompanyFeatureEnum, ICompanies } from './companies.type'
import { mockCompanies } from './companies.mock'

export class CompaniesService {
    public static getCompanies(
        nameQuery = '',
        featureQuery: CompanyFeatureEnum[]
    ): Promise<ICompanies[]> {
        console.log('FETCH', nameQuery, featureQuery)
        return new Promise<ICompanies[]>((success) => {
            setTimeout(() => {
                success(
                    mockCompanies
                        .filter(
                            ({ name }) =>
                                nameQuery === '' || name.includes(nameQuery)
                        )
                        .filter(
                            ({ features }) =>
                                featureQuery.length === 0 ||
                                featureQuery.some((selectedFeature) =>
                                    features.includes(selectedFeature)
                                )
                        )
                )
            }, 500)
        })
    }
}

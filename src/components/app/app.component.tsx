import React, { useEffect, useState } from 'react'
import { CompaniesService } from '../../services/companies/companies.service'
import {
    CompanyFeatureEnum,
    ICompanies,
} from '../../services/companies/companies.type'
import { CompaniesList } from '../companies-list/companies-list.component'
import { FilterPanel } from '../filter-panel/filter-panel.component'

export const App: React.FC = () => {
    const [nameQuery, setNameQuery] = useState('')
    const [featureQuery, setFeatureQuery] = useState<CompanyFeatureEnum[]>([])
    const [rows, setRows] = useState<ICompanies[]>([])

    useEffect(() => {
        CompaniesService.getCompanies(nameQuery, featureQuery).then(setRows)
    }, [setRows, nameQuery, featureQuery])

    return (
        <>
            <FilterPanel
                onNameQuery={setNameQuery}
                onFeatureQuery={setFeatureQuery}
            />
            <CompaniesList rows={rows} />
        </>
    )
}

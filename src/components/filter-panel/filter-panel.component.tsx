import React, { useCallback, useState } from 'react'
import { Box, Checkbox, FormControlLabel, Grid, Input } from '@material-ui/core'
import { useDebounce } from 'use-debounce'
import { useUpdateEffect } from '../../hooks/use-update-effect/use-update-effect.hook'
import { CompanyFeatureEnum } from '../../services/companies/companies.type'

interface IFilterPanelProps {
    onNameQuery?: (query: string) => void
    onFeatureQuery?: (query: CompanyFeatureEnum[]) => void
}

export const FilterPanel: React.FC<IFilterPanelProps> = ({
    onNameQuery,
    onFeatureQuery,
}) => {
    const [query, setQuery] = useState('')
    const [excavationQuery, setExcavationQuery] = useState(false)
    const [plumbingQuery, setPlumbingQuery] = useState(false)
    const [electricalQuery, setElectricalQuery] = useState(false)
    const [queryTerm] = useDebounce(query, 100)
    const handleChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setQuery(event.target.value)
        },
        [setQuery]
    )
    const checkboxHandleFactory =
        (setter: React.Dispatch<React.SetStateAction<boolean>>) =>
        (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
            setter(checked)
        }

    useUpdateEffect(() => {
        if (onNameQuery) {
            onNameQuery(queryTerm)
        }
    }, [queryTerm])

    useUpdateEffect(() => {
        if (onFeatureQuery) {
            const output: CompanyFeatureEnum[] = []

            if (excavationQuery) {
                output.push(CompanyFeatureEnum.Excavation)
            }

            if (electricalQuery) {
                output.push(CompanyFeatureEnum.Electrical)
            }

            if (plumbingQuery) {
                output.push(CompanyFeatureEnum.Plumbing)
            }
            onFeatureQuery(output)
        }
    }, [excavationQuery, electricalQuery, plumbingQuery])

    return (
        <Grid container direction={'row'} justifyContent={'space-between'}>
            <Grid item>
                <Input
                    placeholder="Search by name"
                    value={query}
                    onChange={handleChange}
                />
            </Grid>

            <Grid item>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={plumbingQuery}
                            onChange={checkboxHandleFactory(setPlumbingQuery)}
                            name="plumbing"
                        />
                    }
                    label="Plumbing"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={electricalQuery}
                            onChange={checkboxHandleFactory(setElectricalQuery)}
                            name="electrical"
                        />
                    }
                    label="Electrical"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={excavationQuery}
                            onChange={checkboxHandleFactory(setExcavationQuery)}
                            name="excavation"
                        />
                    }
                    label="Excavation"
                />
            </Grid>
        </Grid>
    )
}

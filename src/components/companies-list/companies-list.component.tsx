import React from 'react'
import {
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@material-ui/core'
import { CompanyFeatureEnum, ICompanies } from '../../services/companies/companies.type'

interface ICompaniesListProps {
  rows: ICompanies[]
  isError?: boolean
  isLoading?: boolean
}

export const CompaniesList: React.FC<ICompaniesListProps> = ({
  rows,
  isError = false,
  isLoading = false
}) => {
  const tickCharacter = (value: boolean): string => (value ? '✓' : '✕')

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Plumbing</TableCell>
            <TableCell align="right">Electrical</TableCell>
            <TableCell align="right">Excavation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={5}>
                <LinearProgress />
              </TableCell>
            </TableRow>
          ) : (
            <>
              {!isError && rows.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5}>No results, try to change your filter</TableCell>
                </TableRow>
              )}
              {isError && (
                <TableRow>
                  <TableCell colSpan={5}>Ups, something goes wrong</TableCell>
                </TableRow>
              )}
              {rows &&
                rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.city}</TableCell>
                    <TableCell align="right">
                      {tickCharacter(row.features.includes(CompanyFeatureEnum.Plumbing))}
                    </TableCell>
                    <TableCell align="right">
                      {tickCharacter(row.features.includes(CompanyFeatureEnum.Electrical))}
                    </TableCell>
                    <TableCell align="right">
                      {tickCharacter(row.features.includes(CompanyFeatureEnum.Excavation))}
                    </TableCell>
                  </TableRow>
                ))}
            </>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

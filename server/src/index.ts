import express from 'express'
import cors from 'cors'
import { mockCompanies, CompanyFeatureEnum } from './mock'

const app = express()
const port = 8090

interface IFilterQuery {
  name: string
  features: string
}

app.use(cors())
app.get<{}, {}, {}, IFilterQuery>('/companies', (req, res) => {
  const { name = '', features = '' } = req.query
  const nameQuery = decodeURIComponent(name).toLowerCase()
  const featureQuery = (
    features !== '' ? decodeURIComponent(features).split(',') : []
  ) as CompanyFeatureEnum[]

  res.json(
    mockCompanies
      .filter(({ name }) => nameQuery === '' || name.toLowerCase().includes(nameQuery))
      .filter(
        ({ features }) =>
          featureQuery.length === 0 ||
          featureQuery.every((selectedFeature) => features.includes(selectedFeature))
      )
  )
})

app.listen(port, () => {
  console.log(`COSUNO mock server started at http://localhost:${port}`)
})

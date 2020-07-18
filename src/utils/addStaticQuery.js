import {addProps} from 'ad-hok'
import {useStaticQuery} from 'gatsby'

const addStaticQuery = ({query}) =>
  addProps(() => {
    const data = useStaticQuery(query)
    return data
  })

export default addStaticQuery

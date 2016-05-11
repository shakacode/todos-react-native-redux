import { ListView } from 'react-native'

const getSectionData = (dataBlob, sectionID) => {
  return dataBlob[sectionID]
}

const getRowData = (dataBlob, sectionID, rowID) => {
  return dataBlob[`${sectionID}-${rowID}`]
}

const dataSource = new ListView.DataSource({
  getSectionData,
  getRowData,
  sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
  rowHasChanged: (row1, row2) => row1 !== row2
})

export const getDataSource = source => {
  const numberOfSections = source.length
  let dataBlob = {}
  let sectionIDs = []
  let rowIDs = []

  for (let i = 0; i < numberOfSections; i++) {
    let section = source[i]
    sectionIDs.push(section.id)
    dataBlob[section.id] = section

    let rows = section.rows
    let numberOfRows = rows.length

    rowIDs[i] = []

    for (let j = 0; j < numberOfRows; j++) {
      let row = rows[j]
      rowIDs[i].push(row.id)
      dataBlob[`${section.id}-${row.id}`] = row
    }
  }
  return dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs)
}

export const getDataSource = data => {
  const numberOfSections = data.length
  let dataBlob = {}
  let sectionIDs = []
  let rowIDs = []

  for (let i = 0; i < numberOfSections; i++) {
    let section = data[i]
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
  return { dataBlob, sectionIDs, rowIDs }
}

export const getDataSource = data => {
  const numberOfSections = data.length;
  const dataBlob = {};
  const sectionIDs = [];
  const rowIDs = [];

  for (let i = 0; i < numberOfSections; i++) {
    const section = data[i];
    sectionIDs.push(section.id);
    dataBlob[section.id] = section;

    const rows = section.rows;
    const numberOfRows = rows.length;

    rowIDs[i] = [];

    for (let j = 0; j < numberOfRows; j++) {
      const row = rows[j];
      rowIDs[i].push(row.id);
      dataBlob[`${section.id}-${row.id}`] = row;
    }
  }
  return { dataBlob, sectionIDs, rowIDs };
};

const Schema = require('./sudoku-schema.js')

const Validate = Game => {
  // for ( let RowGame of Game ) {
  //   if (!RowValidate(RowGame)) return console.log(Game, 'False Sudoku Row')
  // }

  // for ( let ColumnGame in Game ) {
  //   if (!ColumnValidate(Game, ColumnGame)) return console.log(Game, 'False Sudoku Column')
  // }

  for ( let i = 0; i != 9; i += 3 ) {
    QuadrantValidate(Game, i)
  }
}

const RowValidate = Row => {
  for ( let number of Row ) {
    const totalRow = Row.filter(Element => Element === number)
    if ( totalRow.length != 1 ) return false
  }

  return true
}

const ColumnValidate = (Game, ColumnIndex) => {
  const Column = []
  for ( let Row = 0; Row != 9; Row++) {
    Column.push(Game[Row][ColumnIndex])
  }

  for ( let number of Column ) {
    const totalColumn = Column.filter(Element => Element === number)
    if ( totalColumn.length != 1 ) return false
  }

  return true
}

const QuadrantValidate = (Game, ColumnIndex) => {
  console.log(Game[ColumnIndex].slice(0, 3), Game[ColumnIndex].slice(3, 6), Game[ColumnIndex].slice(6, 9))
  console.log(Game[ColumnIndex+1].slice(0, 3), Game[ColumnIndex+1].slice(3, 6), Game[ColumnIndex+1].slice(6, 9))
  console.log(Game[ColumnIndex+2].slice(0, 3), Game[ColumnIndex+2].slice(3, 6), Game[ColumnIndex+2].slice(6, 9))
  console.log('----------------------------------------')
}


Validate(Schema[0])
// Schema.forEach(Game => Validate(Game))
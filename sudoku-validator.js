const Schema = require('./sudoku-schema.js')

// * The Sudoku game Schema should have only numbers.

const Validate = Game => {
  for ( let RowGame of Game ) {
    if (!RowValidate(RowGame)) return false, console.error(Game, 'False Sudoku Row')
  }

  for ( let ColumnGame in Game ) {
    if (!ColumnValidate(Game, ColumnGame)) return false, console.error(Game, 'False Sudoku Column')
  }

  for ( let i = 0; i != 9; i += 3 ) {
    if (!QuadrantValidate(Game, i)) return false, console.error(Game, 'False Sudoku Quadrant')
  }

  return true, console.log('true')
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
  for ( let i = 0; i != 9; i += 3 ) {
    const QuadrantArray = Game[ColumnIndex].slice(i, i+3).concat(Game[ColumnIndex+1].slice(i, i+3), Game[ColumnIndex+2].slice(i, i+3))
    
    for ( let number of QuadrantArray ) {
      const totalQuadrant = QuadrantArray.filter(Element => Element === number)
      if ( totalQuadrant.length != 1 ) return false
    }
  }

  return true
}

Schema.forEach(Game => Validate(Game)) // Default Sudoku Schema of Games


// Validate([ // Use this to input your Sudoku Game
//   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9],
// ])

import tttApp from './'

describe('tttGame reducer', () => {

  beforeEach(() => {
    jest.resetModules()
  })

  it('should return the initial state', () => {
    const initialState = { humanPlayer: null }
    expect(tttApp(undefined, {})).toEqual(initialState)
  })

  // it('should handle ADD_TODO', () => {
  //   expect(
  //     reducer([], {
  //       type: types.ADD_TODO,
  //       text: 'Run the tests'
  //     })
  //   ).toEqual(
  //     [
  //       {
  //         text: 'Run the tests',
  //         completed: false,
  //         id: 0
  //       }
  //     ]
  //   )
  //
  //   expect(
  //     reducer(
  //       [
  //         {
  //           text: 'Use Redux',
  //           completed: false,
  //           id: 0
  //         }
  //       ],
  //       {
  //         type: types.ADD_TODO,
  //         text: 'Run the tests'
  //       }
  //     )
  //   ).toEqual(
  //     [
  //       {
  //         text: 'Run the tests',
  //         completed: false,
  //         id: 1
  //       },
  //       {
  //         text: 'Use Redux',
  //         completed: false,
  //         id: 0
  //       }
  //     ]
  //   )
  // })
})

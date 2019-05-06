import React from 'react'


class App extends React.Component {

  Statistiikka = () => {

    const palautteita = this.props.store.getState().luvut.length

    if (palautteita === 0) {
      return (
        <div>
          <h2>Statistiikka</h2>
          <div>Ei yhtään palautetta annettu</div>
        </div>
      )
    }

    console.log(palautteita)



    return (


      <div>
        <h2>Statistiikka</h2>



        <table>
          <tbody>
            <tr>
              <td>Hyvä: </td>
              <td>{this.props.store.getState().good}</td>
            </tr>
            <tr>
              <td>Neutraali: </td>
              <td>{this.props.store.getState().ok}</td>
            </tr>
            <tr>
              <td>Huono: </td>
              <td>{this.props.store.getState().bad}</td>
            </tr>
            <tr>
              <td>Keskiarvo: </td>
              <td>{this.props.store.getState().keskiarvo}</td>
            </tr>
            <tr>
              <td>Positiivisia: </td>
              <td>{this.props.store.getState().positiiviset} %</td>
            </tr>
          </tbody>
        </table>

        <button onClick={() => this.props.store.dispatch({ type: 'ZERO' }, console.log(this.props.store.getState()))}>Nollaa tilasto</button>
      </div>

    )
  }


  klik = (nappi) => {

    return () => {
      switch (nappi) {

        case 'GOOD':
          this.props.store.dispatch({ type: 'GOOD' })
          console.log(this.props.store.getState())
          break
        case 'OK':
          this.props.store.dispatch({ type: 'OK' })
          console.log(this.props.store.getState())
          break
        case 'BAD':
          this.props.store.dispatch({ type: 'BAD' })
          console.log(this.props.store.getState())
          break
        default:
          return

      }
    }

  }


  render() {
    return (
      <div>
        <h2>Anna palautetta</h2>

        <button onClick={this.klik('GOOD')}>Hyvä</button>
        <button onClick={this.klik('OK')}>Neutraali</button>
        <button onClick={this.klik('BAD')}>Huono</button>


        {this.Statistiikka()}
      </div>
    )
  }

}






export default App

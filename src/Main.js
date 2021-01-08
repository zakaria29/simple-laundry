import React from "react"
import Alert from "./components/Alert";
import Counter from "./components/Counter";
class Main extends React.Component{
    constructor(){
        super()
        this.state = {
            judul: "Judul Alert",
            pesan: "Pesan Alert",
        }
    }

    render(){
        let data = [
            { color: 'success', title: 'Head Success', message: "Congratulation!"},
            { color: 'dark', title: 'Head Dark', message: "I'm sorry to hear that"},
            { color: 'primary', title: 'Head Primary', message: "Good Morning"},
            { color: 'warning', title: 'Head Warning', message: "Be careful"},
        ]
        return (
            <div className="container">
                {/* <Alert background="success" title="Selamat">
                    Selamat menempuh tahun baru
                    <Alert background="warning" title="Hati-hati">
                        Hati-hati di jalan
                    </Alert>
                </Alert>
                <Alert background="danger" title="Awas">
                    Awas Ada Hujan Badai
                </Alert>
                <Alert background="info"  title="Kamu Harus Tau">
                    Kamu harus tau kalau garam itu asin
                </Alert>
                <Alert background="dark" title="Ilmu Hitam">
                    Jangan mempelajari Ilmu Hitam
                </Alert> */}
                <Counter />

                {/* implementasi dari array to component */}
                { data.map(it => (
                    <Alert background={ it.color } title={ it.title }>
                        { it.message }
                    </Alert>
                )) }


                <div className="card col-12">
                    <div className="card-title bg-success text-white">
                        <h3>Contoh Manipulasi State</h3>
                    </div>
                    <div className="card-body">
                        <Alert background="primary" title={ this.state.judul }>
                            { this.state.pesan }
                        </Alert>
                    </div>
                    <div className="card-footer">
                        Judul
                        <input type="text" className="form-control mb-2"
                        value={ this.state.judul }
                        onChange={ (ev) => this.setState({judul : ev.target.value}) } />
                        Pesan
                        <input type="text" className="form-control mb-2"
                        value={ this.state.pesan }
                        onChange={ (ev) => this.setState({pesan : ev.target.value}) } />
                    </div>
                </div>
            </div>
            
        )
    }
}
export default Main;
import React from "react"
import Alert from "./components/Alert";
class Main extends React.Component{
    render(){
        return (
            <div className="container">
                <Alert background="success" title="Selamat">
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
                </Alert>
            </div>
            
        )
    }
}
export default Main;
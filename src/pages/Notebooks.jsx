import slideNote1 from "../assets/img/slidenote1.png";
import slideNote2 from "../assets/img/slidenote2.png";
import slideNote3 from "../assets/img/slidenote3.png";

// import compu2 from "../assets/img/compu2.jpeg"
import { Carousel } from "react-bootstrap";
import SeccionEnviosPagos from "../components/SeccionEnviosPagos";
import BuscadorCategorias from "../components/BuscadorCategorias";
import CardProductoView from "../components/CardProductoView";
import { useEffect, useState } from "react";
import axios from "axios";
import SlideNotebooks from "../components/SlideNotebooks";

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

export default function Notebooks({ setUser, carrito }) {
    const [computadoras, setComputadoras] = useState([]);

    useEffect(() => {
        const getComputadoras = async () => {
            const response = await axios.get(`/producto`);
            console.log("getComputadoras ~ response", response);
            setComputadoras(response.data);
        };
        getComputadoras();
    }, []);

    return (
        <div className="container ">
            <SlideNotebooks />
            <div className="ps-4 mt-5 position-relative">
                <span className="titulo2 position-absolute">NOTEBOOK'S</span>
            </div>
            <div className="row contenedor-seccion-compus">
                <p className=" subtitulo-seccion2">
                    Equipos de escritorio para todos los bolsillos
                </p>

                <div className="col-12 contenedor-items pb-4">
                    <BuscadorCategorias />
                    <div className="row">
                        {computadoras.map((computadora) => (
                            <div className="col-sm-12 col-lg-6 col-xl-4">
                                <CardProductoView
                                    setUser={setUser}
                                    computadora={computadora}
                                    carrito={carrito}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <SeccionEnviosPagos />
        </div>
    );
}

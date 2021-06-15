import slideNote1 from "../assets/img/slidenote1.png"
import slideNote2 from "../assets/img/slidenote2.png"
import slideNote3 from "../assets/img/slidenote3.png"

// import compu2 from "../assets/img/compu2.jpeg"
import { Carousel } from "react-bootstrap";
import SeccionEnviosPagos from "../components/SeccionEnviosPagos";
import BuscadorCategorias from "../components/BuscadorCategorias";
import CardProductoView from "../components/CardProductoView";
import { useEffect, useState } from "react";
import axios from "axios";

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

<<<<<<< HEAD
export default function Notebooks() {
=======
export default function Computadoras({setUser , carrito}) {
    const [computadoras, setComputadoras] = useState([]);

    useEffect(() => {
        const getComputadoras = async () => {
            const response = await axios.get(`/producto`);
            console.log("getComputadoras ~ response", response);
            setComputadoras(response.data);
        };
        getComputadoras();
    }, []);

>>>>>>> a63faf4c5a3f6af4d4cc2ec643e621734a51316d
    return (
        <div className="container ">
            <Carousel fade>
                <Carousel.Item interval={2500}>
                    <img
                        src={slideNote1}
                        alt=""
                        className="img-fluid"
                        style={{}}
                    />
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img src={slideNote2} alt="" className="img-fluid" />
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img src={slideNote3} alt="" className="img-fluid" />
                </Carousel.Item>
            </Carousel>
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
                            <CardProductoView setUser={setUser}
                                computadora={computadora}
                                carrito={carrito}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <SeccionEnviosPagos />
        </div>
    );
}

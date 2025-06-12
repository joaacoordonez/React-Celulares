import "./quienesSomos.css";
import oficina1 from "../../assets/oficinas/oficina1.webp";
import oficina2 from "../../assets/oficinas/oficina2.webp";
import oficina3 from "../../assets/oficinas/oficina3.webp";

const QuienesSomos = () => {
  return (
    <div className="quienes-container">
      <section className="presentacion">
        <h1>Somos líderes en venta de celulares en Latinoamérica</h1>
        <p>
          Nuestra empresa se dedica a ofrecer los últimos modelos de teléfonos
          celulares al mejor precio del mercado. Contamos con un equipo
          especializado en atención al cliente, soporte técnico y servicio
          postventa. Nos destacamos por brindar productos originales, garantía
          oficial y una experiencia de compra segura y confiable.
        </p>
      </section>

      <section className="oficinas">
        <h2>Nuestras oficinas comerciales</h2>
        <div className="galeria">
          <img src={oficina1} alt="Oficina 1" />
          <img src={oficina2} alt="Oficina 2" />
          <img src={oficina3} alt="Oficina 3" />
        </div>
      </section>
    </div>
  );
};

export default QuienesSomos;

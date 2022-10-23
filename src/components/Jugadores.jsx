import React from "react";
import { connect } from "react-redux";

const Jugadores = (props) => (
  <section>
    <h2>Jugadores</h2>
    <div className="contenedor-jugadores">
      {props.jugadores.map((j) => (
        <article key={j.id} className="jugador">
          <img src={j.foto} alt={j.nombre} />
          <h3>{j.nombre}</h3>
          <div>
            <button onClick={() => props.agregarTitular(j)}>Titular</button>
            <button onClick={() => props.agregarSuplente(j)}>Suplente</button>
          </div>
        </article>
      ))}
    </div>
  </section>
);

const mapStateToProps = (state) => ({
  jugadores: state.jugadores,
});

const mapDispatchToProps = (dispatch) => ({
  agregarTitular: (jt) =>
    dispatch({
      type: "AGREGAR_TITULAR",
      jt,
    }),

  agregarSuplente: (js) =>
    dispatch({
      type: "AGREGAR_SUPLENTE",
      js,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Jugadores);

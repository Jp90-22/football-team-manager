import React from "react";
import { connect } from "react-redux";

const Suplentes = (props) => (
  <section>
    <h2>Suplentes</h2>
    <div className="suplentes">
      {props.suplentes.map((js) => (
        <article key={js.id} className="suplente">
          <div>
            <img src={js.foto} alt={js.nombre} />
            <button onClick={() => props.quitarSuplente(js)}>X</button>
          </div>
          <footer>{js.nombre}</footer>
        </article>
      ))}
    </div>
  </section>
);

const mapStateToProps = (state) => ({
  suplentes: state.suplentes,
});

const mapDispatchToProps = (dispatch) => ({
  quitarSuplente: (js) =>
    dispatch({
      type: "QUITAR_SUPLENTE",
      js,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes);

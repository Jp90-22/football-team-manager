import React from 'react'
import { connect } from "react-redux";
import cancha from "../cancha.svg"

const Titulares = (props) => (
    <section>
        <h2>Titulares</h2>
        <div className="cancha">
            {

                props.titulares.map((jt) => (
                    <article key={jt.id} className="titular">
                        <div>
                            <img src={jt.foto} alt={jt.nombre} />
                            <button onClick={() => props.quitarTitular(jt)}>X</button>
                        </div>
                        <footer>{jt.nombre}</footer>
                    </article>
                ))

            }

            <img src={cancha} alt="Cancha de futbol" />
        </div>
    </section>
)

const mapStateToProps = state => ({
    titulares: state.titulares
})

const mapDispatchToProps = (dispatch) => ({
    quitarTitular: (jt) => dispatch({
        type: 'QUITAR_TITULAR',
        jt
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(Titulares)

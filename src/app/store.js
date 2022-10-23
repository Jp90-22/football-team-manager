import { createStore } from "redux";

// Seed data
const defaultState = {
  jugadores: [
    {
      id: 1,
      nombre: "Cristiano Ronaldo",
      foto: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
    },
    {
      id: 2,
      nombre: "Lionel Messi",
      foto: "https://img.a.transfermarkt.technology/portrait/big/28003-1631171950.jpg?lm=1",
    },
    {
      id: 3,
      nombre: "Kylian Mbappé",
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBHMCTkZnANaJyH1s4utd2ZPNIu1rtaPkkbX5RONVvaQ&s",
    },
    {
      id: 4,
      nombre: "Oliver Atom",
      foto: "https://i.blogs.es/41e12a/capitan/1366_2000.jpg",
    },
    {
      id: 5,
      nombre: "Daniel Passarella",
      foto: "https://img.a.transfermarkt.technology/portrait/big/116735-1544094883.jpg?lm=1",
    },
    {
      id: 6,
      nombre: "Futbolista 😎",
      foto: "https://us.123rf.com/450wm/alexeyzet/alexeyzet1201/alexeyzet120100003/11989969-el-futbolista-de-dibujos-animados-o-de-futbolista-con-la-pelota-aislados-sobre-fondo-blanco-ilustrac.jpg?ver=6",
    },
    {
      id: 7,
      nombre: "Shawn Froste",
      foto: "http://pm1.narvii.com/6201/f5f0b764a5eea2b271eabfc46c0439105938b2ec_00.jpg",
    },
    {
      id: 8,
      nombre: "Axel Blaze",
      foto: "https://i.pinimg.com/474x/19/8d/c8/198dc8588fca6731b0e221ae7d26d2ee.jpg",
    },
    {
      id: 9,
      nombre: "Mamoru Endo",
      foto: "http://pm1.narvii.com/6448/2f1cc28a35231f2eab028538fffe747b7e6ee713_00.jpg",
    },
    {
      id: 10,
      nombre: "Franco Baresi",
      foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Franco_baresi_panini_card_1979.jpg/220px-Franco_baresi_panini_card_1979.jpg",
    },
    {
      id: 11,
      nombre: "Carles Puyol",
      foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Carles_Puyol_2011.jpg/160px-Carles_Puyol_2011.jpg",
    },
    {
      id: 12,
      nombre: "Sergio Ramos",
      foto: "https://upload.wikimedia.org/wikipedia/commons/4/43/Russia-Spain_2017_%286%29.jpg",
    },
    {
      id: 13,
      nombre: "Dato de Prueba 🤙",
      foto: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8HBhAQBxISEhUVEBEXFhATDhIPDxoXFhUYFxUSHhYYHSggJBonGxUVITEhJSkrLi4uFx8zODMsNygtLi0BCgoKDg0OGhAQFi0dIB8rLSstLS0tLS0tLS0tKy0rLS0tKy0tLS0tKystKy0tLS0rKy4tLS0rLS0rKysrKy03K//AABEIALIBGwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYCAwQBB//EADIQAQABAwEFBAkEAwAAAAAAAAABAgMEEQUhMVGxEkFhcRMzUnKBkcHR4SI0ofAjMlP/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAgMBBP/EABwRAQEBAQEAAwEAAAAAAAAAAAABAhExAyFREv/aAAwDAQACEQMRAD8A+iAPSyAAAAAAAAAAAAAAB7RRNyrSiJmeURq67Wy7tfGIp85+zlsjvHGJe3sX/rX8Ij6yZODYxbWt2avCNY1n+E/3Hf5qICeO4WkAAAAAAAAAAAAAAAAAAAAAAAAAABlbom5XFNG+ZncBbtzdriLcTM8oS+LsiKY1yZ1n2Y3R83XhYlOLb0jfPfVz/DpY63+LmWNu3Tbp0txERyiNGQIUObOw4y6I1nSY10nz8HSEvBV8nHqxrml2PKe6Wpab9mm/bmm7Gsfz5q7m4s4t3Srh3Tzj7ts66izjQAtIAAAAAAAAAAAAAAAAAAAAAAAAk9hWoqu1VT3RER8eKMTGwfV1+cdE78dz6lQGDQAAAAcu0rEX8SrXjEax5w6mF6NbNXuz0IKqPIevSyAAAAAAAAAAAAAAAAAAAAAAAAEzsH1FfvfRDJrYX7er3/pCN+Kz6kwGKwAAABjd9VV5T0ZMbvqqvKegKnHB68jg9elkAAAAAAAAAAAAAAAAAAAAAAAA8WDZOPVj2Ji7GmtWvHXuhX54LZantW4nnEdGfyX6VlkAyWAAAAMbka2505SyAVS5bqtV9m5Gk8mLr2tOufV8OkOR6J4zoA64AAAAAAAAAAAAAAAAAAAAAALJs656TComPZ0+W5W0lsS9NN6aJndMaxHjH46I3OxWU2AxWAAAAA5NqX5sYkzRumZiInz/ABqSdEHmV+ky65j2p+zS8evQyAHQAAAAAAAAAAAAAAAAAAAAAAb8G56HLoqnn13fVoHKLaODZWZ6e32a/wDaI+cc3ews41AHAAAQu3but2miO6NZ+PD++KWv3YsWZqq4RCs3rk3rs1V8Zn+wvE++p1WADZAAAAAAAAAAAAAAAAAAAAAAAAAACS2FTrkVTyp6z+E2i9i2KrcVzciY17Omsac0ow360ngAl0ABybV/YV/DrCurHtKibmFVFEazu3Rx4wrkxpOktfj8RoAaJAAAAAAAAAAAAAAAAAAAAAAAAHTs236TNoieevy3tFq1Vdq0tRMz4Qm9lYU42tV7TWe7XXSE6vI7IkAGDQAAAAV/bFvsZszziJ+k9FgcW1MScq1Ho9NYnv3bu+Ois3lcs+lfGd6xXYnS7TMdPmwbswAAAAAAAAAAAAAAAAAAHgPR1Yuz7mRviNI9qfslsbZluxvqjtTznh8k3UjsiGx8O5kerjd7U7oSmPsiijffntTy4UpIZ3dq5ljRRFunSiIiOURpDIEOgAAAAAAAPKqYqjSrf4Tvhw5Gyrd3fb/RPhvj5O8dlsFdyNnXLHd2o507/wCHItrnyMK3kesjf7UbpXPk/U3KtCQydk1299n9UcuFSPqiaZ0q3TyndLSWVPAB1wAAAAAAAAAAAiNZ0gGzHsVZFzs2o16R4pvE2bRYiJr/AFVc54fCG7CxoxbMRTx755y6GOtdXIAIUAAAAAAAAAAAAAAAANORi0ZNP+WPjwn5twCu5+BVizrG+nn3x4S5Frroi5RMVxrExvhWcuxOPkVUz3cJ8O5tjXUWNQC0gAAAAAAADbi/uqPfp6g5fHVoAedoAAAAAAAAAAAAAAAAAAAAIPbv7qn3PrILx65rxHANmYAAAD//2Q==",
    },
  ],
  titulares: [],
  suplentes: [],
};

// Reducers
const reducerEntrenador = (state = defaultState, action) => {
  switch (action.type) {
    case "AGREGAR_TITULAR":
      if (state.titulares.length < 11) {
        return {
          ...state,
          titulares: state.titulares.concat(action.jt),
          jugadores: state.jugadores.filter((j) => j.id !== action.jt.id),
        };
      } else {
        alert("¡No puede haber mas de 11 titulares en la cancha!");
        return { ...state };
      }

    case "AGREGAR_SUPLENTE":
      return {
        ...state,
        suplentes: state.suplentes.concat(action.js),
        jugadores: state.jugadores.filter((j) => j.id !== action.js.id),
      };

    case "QUITAR_TITULAR":
      return {
        ...state,
        titulares: state.titulares.filter((j) => j.id !== action.jt.id),
        jugadores: state.jugadores.concat(action.jt),
      };

    case "QUITAR_SUPLENTE":
      return {
        ...state,
        suplentes: state.suplentes.filter((j) => j.id !== action.js.id),
        jugadores: state.jugadores.concat(action.js),
      };

    default:
      return state;
  }
};

export const store = createStore(reducerEntrenador);

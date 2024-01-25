import { useState } from "react"


function App() {

  const [tc, setTc] = useState("");
  const [pxt, setPxt] = useState("");
  const [resultado, setResultado] = useState("");
  const [showtable, setShowtable] = useState(false);
  const [reset, setReset] = useState(false)

  const dia = new Date();

  const generarPrecios = (e) => {
    if ([tc, pxt].includes("")) {
      alert("Existen campos vacios")
      return
    }
    setResultado(tc * pxt);
    setShowtable(true)
    console.log(dia)
    setReset(true)
  }

  const reiniciar = () => {
    setShowtable(false)
    setTc("")
    setPxt("")
    setReset(false)
  }


  return (
    <>
      <h1 className="font-black text-center uppercase text-3xl mt-8">"Inversiones Ariel"</h1>
      <div className="flex flex-col items-center">
        <form
          className="p-5 pt-2 flex flex-col items-center"
        >
          <label
            className="font-bold uppercase"
          >Tipo de cambio: </label>
          <input
            className="block w-32 rounded-md p-2 mt-1 text-center"
            type="number"
            onChange={(e) => setTc(e.target.value)}
            value={tc}
          />
          <p className="text-xs">*Tipo de cambio al {dia.getDate()}/{dia.getMonth() + 1}/{dia.getFullYear()}</p>
          <label
            className="font-bold uppercase mt-2"
          >Precio por tonelada: </label>
          <input
            className="block w-32 rounded-md p-2 mt-1 text-center"
            type="number"
            onChange={(e) => setPxt(e.target.value)}
            value={pxt}
          />
          <p className="text-xs">*Precio de tn en dólares.</p>
        </form>
        {
          showtable && (
            <div className="mt-2">
              <table className="text-center mb-1">
                <thead className="bg-gray-300">
                  <tr className="rounded-sm">
                    <th className="border-2 border-black uppercase px-3 py-1">Medida</th>
                    <th className="border-2 border-black uppercase px-3 py-1">Cant x tn</th>
                    <th className="border-2 border-black uppercase px-3 py-1">Precio Unit</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="border-2 border-black px-3 py-1">1"</td>
                    <td className="border-2 border-black px-3 py-1">29</td>
                    <td className="border-2 border-black px-3 py-1">{(resultado / 29).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-black px-3 py-1">3/4</td>
                    <td className="border-2 border-black px-3 py-1">51</td>
                    <td className="border-2 border-black px-3 py-1">{(resultado / 51).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-black px-3 py-1">5/8</td>
                    <td className="border-2 border-black px-3 py-1">75</td>
                    <td className="border-2 border-black px-3 py-1">{(resultado / 75).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-black px-3 py-1">1/2</td>
                    <td className="border-2 border-black px-3 py-1">116</td>
                    <td className="border-2 border-black px-3 py-1">{(resultado / 116).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-black px-3 py-1 ">12mm</td>
                    <td className="border-2 border-black px-3 py-1 ">130</td>
                    <td className="border-2 border-black px-3 py-1 ">{(resultado / 130).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-black px-3 py-1 ">3/8</td>
                    <td className="border-2 border-black px-3 py-1 ">208</td>
                    <td className="border-2 border-black px-3 py-1 ">{(resultado / 208).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-black px-3 py-1 ">8mm</td>
                    <td className="border-2 border-black px-3 py-1 ">288</td>
                    <td className="border-2 border-black px-3 py-1 ">{(resultado / 288).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-black px-3 py-1 rounded-md ">6mm</td>
                    <td className="border-2 border-black px-3 py-1 rounded-md ">516</td>
                    <td className="border-2 border-black px-3 py-1 rounded-md ">{(resultado / 516).toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs">*Todos los precios unitarios son en Soles.</p>
              <p className="text-xs">*Los precios varian todos los días.</p>
            </div>

          )
        }
        <div className="flex justify-center">
          <button
            className="bg-indigo-400 text-white py-1 px-5 border-2 border-black rounded-md font-bold uppercase"
            onClick={reset ? reiniciar : generarPrecios}
          >{reset ? "Reiniciar" : "Generar precios"}</button>
        </div>
      </div>
    </>
  )
}

export default App

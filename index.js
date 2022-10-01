const axios = require("axios");

const consult = async () => {
  const { data } = await axios.get("https://www.datos.gov.co/resource/s2ru-bqt6.json");
  return data;
}

const logData = async () => {
  const hospitals = await consult();
  const numberOfMix = getNumberOf(hospitals, "Mixta");
  const numberOfPub = getNumberOf(hospitals, "Pública");
  const numberOfPriv = getNumberOf(hospitals, "Privada");

  console.log(`Hay un total de: ${numberOfMix} hospitales mixtos`);
  console.log(`Hay un total de: ${numberOfPriv} hospitales privados`);
  console.log(`Hay un total de: ${numberOfPub} hospitales públicos`);

  console.log(`El total de participación de los H. mixtos es: ${numberOfMix/hospitals.length*100}%`);
  console.log(`El total de participación de los H. privados es: ${numberOfPriv/hospitals.length*100}%`);
  console.log(`El total de participación de los H. públicos es: ${numberOfPub/hospitals.length*100}%`);

}

const getNumberOf = (hospitals, filter) => {
  const response = hospitals.filter((hospital) => hospital.naturaleza === filter);
  return response.length;
}
logData();
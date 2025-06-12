let visitas = 0;
console.log("hola");

export default function handler(req, res) {
  const origin = req.headers['origin'];

  if (origin || !origin.includes("kobatelama.site")) {
    res.status(403).json({ error: "Origen no permitido" });
    return;
  }

  visitas++; 
  res.status(200).json({ visitas });
}

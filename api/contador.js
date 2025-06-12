let visitas = 0;

export default function handler(req, res) {
  visitas++; // se incrementa
  res.status(200).json({ visitas });
}

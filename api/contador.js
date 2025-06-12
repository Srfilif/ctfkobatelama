let visitas = 0;

export default function handler(req, res) {
  if(req.headers['origin'] == null || req.headers['origin'] != "Tu dominio"){
    return;
  }
  visitas++; 
  res.status(200).json({ visitas });
}

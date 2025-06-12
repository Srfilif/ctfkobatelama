let visitas = 0;

export default function handler(req, res) {
  if(req.headers['origin'] == null || req.headers['origin'] != "www.kobatelama.site"){
    return;
  }
  visitas++; 
  res.status(200).json({ visitas });
}

let visitas = 0;

export default function handler(req, res) {
  if(req.method !== "GET"){
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  if(!req.headers['origin'] || req.headers['origin'] !== "https://www.kobatelama.site/"){
    res.status(403).json({ error: "Forbidden" });
    return;
  }

  visitas++;
  res.status(200).json({ visitas });
}

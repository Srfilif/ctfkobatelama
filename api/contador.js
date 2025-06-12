import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.resolve('./contador.txt');

  let visitas = 0;

  // Si existe el archivo, leer el número
  if (fs.existsSync(filePath)) {
    visitas = parseInt(fs.readFileSync(filePath, 'utf-8')) || 0;
  }

  visitas++;

  fs.writeFileSync(filePath, visitas.toString());
  res.status(200).json({ visitas });
}

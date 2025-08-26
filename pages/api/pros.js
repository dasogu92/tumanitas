let pros = []

export default function handler(req, res) {
  if (req.method === 'GET') return res.status(200).json(pros)
  if (req.method === 'POST') {
    const pro = req.body
    pros.push(pro)
    return res.status(201).json(pro)
  }
}
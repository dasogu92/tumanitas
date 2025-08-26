let services = []

export default function handler(req, res) {
  if (req.method === 'GET') return res.status(200).json(services)
  if (req.method === 'POST') {
    const service = req.body
    services.push(service)
    return res.status(201).json(service)
  }
}
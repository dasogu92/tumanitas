let users = []

export default function handler(req, res) {
  if (req.method === 'GET') return res.status(200).json(users)
  if (req.method === 'POST') {
    const user = req.body
    users.push(user)
    return res.status(201).json(user)
  }
}
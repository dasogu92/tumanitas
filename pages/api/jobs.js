let jobs = []

export default function handler(req, res) {
  if (req.method === 'GET') return res.status(200).json(jobs)
  if (req.method === 'POST') {
    const job = req.body
    jobs.push(job)
    return res.status(201).json(job)
  }
}
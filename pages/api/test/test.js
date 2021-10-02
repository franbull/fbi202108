export default function handler(req, res) {
  let ua;
  for (let i=0; i<req.rawHeaders.length; i++) {
    if (req.rawHeaders[i] === 'User-Agent') {
      ua = req.rawHeaders[i+1];
      break;
    }
  }
  res.status(200).json({
    text: 'Hello',
    ua,
    test: process.env.test,
  })
}

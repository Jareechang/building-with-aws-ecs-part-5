const fs = require('fs');
const path = require('path');

export default (req, res) => {
  const dir = path.join(process.cwd(), 'styles');
  const fileNames = fs.readdirSync(dir)
  res.status(200).json({ filesNames })
}

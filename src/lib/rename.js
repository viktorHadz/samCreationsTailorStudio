import fs from 'node:fs'
import path from 'node:path'

const dir = '../images/gallery/'
const files = fs.readdirSync(dir)

console.log('These are the files in gallery', files)

files.forEach((file, fileIndex) => {
  const ext = path.extname(file)

  const oldPath = path.join(dir, file)
  const newName = `image_${fileIndex}${ext}`
  const newPath = path.join(dir, newName)

  console.log(`Renaming ${oldPath} to ${newPath}`)

  // Use the full paths for both old and new
  fs.rename(oldPath, newPath, (err) => {
    if (err) {
      console.error(`Error renaming ${file}:`, err)
    } else {
      console.log(`Renamed ${file} to ${newName}`)
    }
  })
})

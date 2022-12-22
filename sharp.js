const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const target = path.resolve(__dirname, 'src/public/images')
const destination = path.resolve(__dirname, 'dist/images')

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination)
}

fs.readdirSync(target)
  .forEach(image => {
    // mengubah ukuran gambar dengan lebar 1200px, dengan prefix -large.jpg
    sharp(`${target}/${image}`)
      .resize(1200)
      .toFile(path.resolve(
        __dirname,
              `${destination}/${image.split('.').slice(0, -1).join('.')}-1200.jpg`)
      )

    // mengubah ukuran gambar dengan lebar 600px, dengan prefix -large.jpg
    sharp(`${target}/${image}`)
      .resize(600)
      .toFile(path.resolve(
        __dirname,
              `${destination}/${image.split('.').slice(0, -1).join('.')}-600.jpg`)
      )

    // mengubah ukuran gambar dengan lebar 320px, dengan prefix -small.jpg
    sharp(`${target}/${image}`)
      .resize(320)
      .toFile(path.resolve(
        __dirname,
              `${destination}/${image.split('.').slice(0, -1).join('.')}-320.jpg`)
      )
  })

// const path = require("path")
// const fs = require("fs")

// const dirPath = path.join(__dirname, "../src/pages/Blog/content")
// let postList = []

// const getPosts = async () => {
//   await fs.readdir(dirPath, (err, files) => {
//     if (err) {
//       return console.log("Failed", err);
//     }
//     files.forEach((file, i) => {
//       let obj = {}
//       let post
//       fs.readFile(`${dirPath}/${file}`, "utf-8", (err, contents) => {
//         const getMetaDataIndices = (acc, elem, i) => {
//           if (/^---/.test(elem)) {
//             acc.push(i)
//           }
//           return acc
//         }
//         const parseMetaData = ({ lines, metaDataIndices }) => {
//           if (metaDataIndices.length > 0) {
//             lines = lines.slice(metaDataIndices[0] + 1)
//           }
//         }
//         const lines = contents.split("\n")
//         const metaDataIndices = lines.reduce(getMetaDataIndices, [])
//         const metaData = parseMetaData({ lines, metaDataIndices })
//       })
//     })
//   })
// }

// getPosts()
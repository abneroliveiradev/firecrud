const fs = require('fs')
const path = require('path')

function getModelsBySchema(fileName) {
  const filePath = path.resolve('prisma', fileName)
  const content = fs.readFileSync(filePath, 'utf-8')

  const lines = content.split('\n')
  const models = []
  let currentModel = null

  for (let line of lines) {
    line = line.trim()

    if (line.startsWith('model ')) {
      const modelName = line.split(' ')[1]
      currentModel = { name: modelName, attributes: [] }
    } else if (currentModel && line) {
      const parts = line.split(/\s+/).filter((part) => part !== '')
      if (parts.length >= 2) {
        const attributeName = parts[0]
        const attributeType = parts[1]
        const attributeDecorator = parts.slice(2).join(' ')
        currentModel.attributes.push({
          name: attributeName,
          type: attributeType,
          decorator: attributeDecorator,
        })
      }
    }

    if (line === '' && currentModel) {
      models.push(currentModel)
      currentModel = null
    }
  }

  return models
}

module.exports = getModelsBySchema

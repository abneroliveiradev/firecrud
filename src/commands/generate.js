const getModelsBySchema = require('../utils/getModelsBySchema')

module.exports = {
  name: 'generate',
  alias: ['g'],
  run: async (toolbox) => {
    const {
      parameters,
      template: { generate },
      print: { info },
    } = toolbox

    const name = parameters.first

    const fileName = 'schema.prisma'
    const models = getModelsBySchema(fileName)
    console.log(models)

    // Create Table Page
    await generate({
      template: 'page.js.ejs',
      target: `app/generated/${name}/page.tsx`,
      props: { name },
    })

    info(`Generated Layout for ${name}`)
  },
}

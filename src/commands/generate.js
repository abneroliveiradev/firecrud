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

    const name = parameters.first.toLowerCase()

    const fileName = 'schema.prisma'
    const models = getModelsBySchema(fileName)
    console.log(models)

    models.forEach(async (model) => {
      info(`Generating Page for ${model.name}`)
      await generate({
        template: 'page.js.ejs',
        target: `app/generated/${model.name.toLowerCase()}/page.tsx`,
        props: { name: model.name },
      })

      info(`Generating Layout for ${model.name}`)
      await generate({
        template: 'layout.js.ejs',
        target: `app/generated/${model.name.toLowerCase()}/layout.tsx`,
        props: { name: model.name },
      })

      //Definir colunas da tabela a partir dos atributos do model name e type
      /* await generate({
        template: 'columns-table.js.ejs',
        target: `app/generated/${model.name.toLowerCase()}/components/columns.tsx`,
        props: { name: model.name.toLowerCase(), attributes: model.attributes },
      }) */

      //Forms
      await generate({
        template: 'edit-page.js.ejs',
        target: `app/generated/${model.name.toLowerCase()}/edit/[...id]/.page.tsx`,
        props: { name: model.name, attributes: model.attributes },
      })
    })

    info(`Completed!`)
  },
}

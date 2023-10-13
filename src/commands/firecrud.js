const command = {
  name: 'firecrud',
  run: async (toolbox) => {
    const { print } = toolbox

    print.info('Welcome to FireCRUD')
  },
}

module.exports = command

import contentstack from 'contentstack'

export default {
  getEntry(type, entry) {
    const data = new Promise((resolve, reject) => {
      var Stack = contentstack.Stack(
        process.env.CONTENTSTACK_API,
        process.env.CONTENTSTACK_TOKEN,
        'staging'
      )
      var Query = Stack.ContentType(type).Entry(entry)
      Query.fetch().then(
        function success(entry) {
          if (entry) {
            resolve(entry.toJSON())
          } else {
            return reject('Internal Error')
          }
        },
        function error(error) {
          return reject('Internal Error')
        }
      )
    })
    return data
  }
}

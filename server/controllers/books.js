let loading = false

module.exports = {
    usingADotCatch: (req, res, next) => {
        const db = req.app.get('db')
        db.get_all_books().then(books => {
            res.status(200).send(books)
        }).catch(err => {
            console.log('error getting books', err)
            res.status(404).send('not found')
        })
    },
    usingTryCatch: async (req, res, next) => {
        try {
            const db = req.app.get('db')
            let books = await db.get_all_books()
            res.status(200).send(books)
        } catch (error) {
            console.log('cannot get all books', error)
            res.status(404).send('not found')
        }
    }, 
    usingFinally: async (req, res, next) => {
        console.log(1111, loading)
        loading = true
        console.log(2222, loading)
        try {
            const db = req.app.get('db')
            let books = await db.get_all_books()
            res.status(200).send(books)
            console.log(3333, loading)
            loading = false
            console.log(4444, loading)
        } catch (error) {
            console.log(5555, loading)
            // console.log('cannot get all books', error)
            res.status(404).send('not found')
        } finally {
            console.log(6666, loading)
            loading = false
            console.log(7777, loading)
        }
    },

    getHarry: async (req, res, next) => {
        try {
            const db = req.app.get('db')
            let book = await db.get_harry()
            res.status(200).send(book)
        } catch (error) {
            console.log('cannot get harry', error)
            res.status(404).send('not found')
        }
    }
}


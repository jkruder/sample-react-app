const express = require('express')
const path = require('path')
const fs = require('fs')

const PORT = 3001

const app = express()
const router = express.Router()
app.use(router)

function getIndexFilePath() {
    // return path.resolve(__dirname, '..', 'build', 'index.html')
    return path.resolve(__dirname, 'index.html')
}

function injectDataIntoHtml(html, data) {
    return html.replace(
        '</body>',
        `<script type="text/javascript">window.__DATA__ = ${JSON.stringify(data)};</script></body>`
    )
}

router.use('/', (req, res) => {
    console.log('got a request!')
    const filePath = getIndexFilePath()

    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            return res.status(404).end()
        }

        const data = {
            user: {
                firstName: 'Josh',
                lastName: 'Kruder'
            }
        }

        return res.send(injectDataIntoHtml(htmlData, data))
    })
})

app.listen(PORT, (error) => {
    if (error) {
        return console.log('something bad happened', error)
    }

    console.log("listening on " + PORT + "...")
})

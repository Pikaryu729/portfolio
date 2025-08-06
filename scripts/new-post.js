const fs = require("fs")
const path = require("path")


const usage_message = "Usage: npm run new-post <your post here> "

const title = process.argv[2]

if (!title) {
    console.log(usage_message)
    process.exit(1)
}

const slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
const date = new Date().toISOString().split('T')[0]

const template = `---
title: "${title}"
date: "${date}"
excerpt: ""
tags: []
draft: false
---

# ${title}

Your content here...
`

const filename = `${slug}.mdx`
const filepath = path.join('content', 'posts', filename)

const yearDir = path.dirname(filepath)
if (!fs.existsSync(yearDir)) {
    fs.mkdirSync(yearDir, {recursive: true})
}

fs.writeFileSync(filepath, template)
console.log(`Created ${filepath}`)

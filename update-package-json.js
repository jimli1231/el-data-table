const fs = require('fs')
const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'))

// 递增版本号
const versionParts = packageJson.version.split('.')
versionParts[1] = String(Number(versionParts[1]) + 1)
packageJson.version = versionParts.join('.')

// 将更新后的 package.json 保存回文件
fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2))

console.log('版本号已递增')

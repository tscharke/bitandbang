'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 0,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('Thomas Scharke'),
  handle: chalk.gray(
    'Remote Freelancing Software Artist & Passionate implementer of ideas'
  ),
  work: chalk.gray(
    '#RemoteWork #NewWork #TypeScript #JavaScript #ReactNative #React #Collaboration #Compassionate'
  ),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('t_scharke'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~tscharke'),
  github: chalk.gray('https://github.com/') + chalk.green('tscharke'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('tscharke'),
  homepage: chalk.cyan('https://van.dermeer.de'),
  profile: chalk.cyan('https://thomas-scharke.de'),
  labelTwitter: chalk.white.bold('Twitter:'),
  labelnpm: chalk.white.bold('npm:'),
  labelGitHub: chalk.white.bold('GitHub:'),
  labelLinkedIn: chalk.white.bold('Profile:'),
  labelWeb: chalk.white.bold('Links:')
}

const output = `
         ${data.name}
         ${data.handle}

         ${data.work}
          
${data.labelWeb}   ${data.homepage}
         ${data.profile}
${data.labelTwitter} ${data.twitter}
${data.labelnpm}     ${data.npm}
${data.labelGitHub}  ${data.github}
${data.labelLinkedIn} ${data.linkedin}
`

fs.writeFileSync(
  path.join(__dirname, 'bin/output'),
  chalk.green(boxen(output, options))
)

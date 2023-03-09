import { spawn } from 'node:child_process'

export const runBashCommand = (command: string) =>
  new Promise((resolve, reject) => {
    const child = spawn(command, [], { shell: true })

    child.stdout.setEncoding('utf8')
    child.stdout.on('data', data => process.stdout.write(data))

    child.stderr.setEncoding('utf8')
    child.stderr.on('data', data => process.stderr.write(data))

    child.on('close', function (code) {
      if (code === 0) {
        resolve(void 0)
      } else {
        reject(new Error(`Command failed with exit code ${code}`))
      }
    })
  })

export const syncContentFromGit = async (contentDir: string) => {
  const syncRun = async () => {
    // const gitUrl = 'https://github.com/vercel/next.js.git'
    const gitUrl = process.env.GITHUB_CLI_REPO_URL
    const localRemoteContent = `${contentDir}/remote`
    await runBashCommand(`
      if [ -d  "${localRemoteContent}" ];
        then
          cd "${localRemoteContent}"; git pull;
        else
          gh repo clone ${gitUrl} ${localRemoteContent};
      fi
    `)
  }

  let wasCancelled = false
  let syncInterval: NodeJS.Timeout

  const syncLoop = async () => {
    console.log('Syncing content files from git')

    await syncRun()

    if (wasCancelled) return

    syncInterval = setTimeout(syncLoop, 1000 * 60)
  }

  // Block until the first sync is done
  await syncLoop()

  return () => {
    wasCancelled = true
    clearTimeout(syncInterval)
  }
}

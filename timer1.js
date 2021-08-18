const argv = process.argv.slice(2)
for (let i of argv) {
  if (isNaN(i) === false) {
    if (i >=0) {
      setTimeout(() => process.stdout.write('\x07'), i * 1000)
    }
  }
}
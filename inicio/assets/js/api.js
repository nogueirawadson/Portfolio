async function fetchProfileData() {
  const url = 'https://raw.githubusercontent.com/nogueirawadson/Portf-lio/master/data/profile.json?token=GHSAT0AAAAAACROJSH2LSKZYJU6PNJN5OHKZXKGKXQ'
  const fetching = await fetch(url)
  return await fetching.json()
}
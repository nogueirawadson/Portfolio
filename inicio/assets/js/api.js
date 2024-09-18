async function fetchProfileData() {
  const url = 'https://raw.githubusercontent.com/nogueirawadson/Portfolio/master/data/profile.json?token=GHSAT0AAAAAACROJSH2S327DU3XCWOP7OY4ZXKHRGQ'
  const fetching = await fetch(url)
  return await fetching.json()

}
async function fetchProfileData() {
  const url = 'https://raw.githubusercontent.com/nogueirawadson/Portfolio/master/data/profile.json?token=GHSAT0AAAAAACROJSH2SBRCVTLNMVHPRB6EZXLBGWA'
  const fetching = await fetch(url)
  return await fetching.json()

}
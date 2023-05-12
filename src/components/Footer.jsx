export default function Footer () {
  const currentYear = new Date().getFullYear();
  const gitHubUrl = 'https://github.com/NicholasMorganDev'
  return (
    <footer>
      <p>&copy; {currentYear} Nicholas Morgan</p>
      <>
        <a className="git-link" href={gitHubUrl} rel="noreferrer" target="_blank">See Code In GitHub</a>
      </>
    </footer>
  )
}

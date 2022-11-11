import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

export default function MyGithub() {
  const [gitHubName, setGitHubName] = useState('')
  const [gitHubUrl, setGitHubUrl] = useState('')
  const [gitHubImg, setGitHubImg] = useState('')

  const profileImgStyle = {
    borderRadius: '50%',
    border: '5px solid skyblue',
    maxWidth: '250px',
    maxHeight: '300px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }

  useEffect(() => {
    fetch('https://api.github.com/users/skim1127')
    .then(res => res.json())
    .then(data => {
      setGitHubName(data.name)
      setGitHubUrl(data.html_url)
      setGitHubImg(data.avatar_url)
      console.log(data)
    })
  }, [])

  return (
    <Card>
        <Card.Header as="h2">My Github Profile</Card.Header>
        <Card.Img variant="top" src={ gitHubImg } style={ profileImgStyle } />
        <Card.Body>
            <Card.Title as="h2">{ gitHubName }</Card.Title>
        </Card.Body>
        <a role="link" href={ gitHubUrl }><button>Link to My Github</button></a>
    </Card>
  );
}

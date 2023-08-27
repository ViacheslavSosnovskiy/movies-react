import { FaGithub } from 'react-icons/fa'
import { Container } from '../../globalStyles'
import { WrapperFooter, TitleFooter, LinkFooter } from './Footer.styled'

const Footer = () => {
  return (
    <WrapperFooter>
        <Container>
            <TitleFooter>
                Copyright &copy; 2023.
                <LinkFooter 
                    href="https://github.com/ViacheslavSosnovskiy/movies-react"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    &nbsp; Created by Viacheslav Sosnovskiy &nbsp;
                    <FaGithub size="1.4em" />
                </LinkFooter>
            </TitleFooter>
        </Container>
    </WrapperFooter>
  )
}

export default Footer
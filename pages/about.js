import Link from 'next/link'
import Avatar from '@material-ui/core/Avatar';

const About = () => {
    return (
        <div>
            <h1>About Page!</h1>
            <Link href='/' >
                <a >kembali ke halaman home</a>
            </Link>
            <Avatar alt="Gambar" src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/fb/fbb9ae2678eb1b7669ba84d1a1ced09934e7b4cd.jpg" />
        </div>
    )
}

export default About;

import 'bootstrap/dist/css/bootstrap.css';
import './globals.css'
import Navbar from './Components/CustomComp/Navbar'
import Footer from './Components/CustomComp/Footer'
import GlobalContextProvider from './Components/Context/GlobalContextProvider'
import GlobalSnackBar from './Components/CustomComp/GloabalSnackBar'
import NextAuthSessionProvider from './Components/Context/NextAuthSessionProvider'


export const metadata = {
    title: 'TutorMatch',
    description: 'Discover the best tutors and educational resources on. Connect directly with qualified teachers for personalized tuition in any subject. Explore our platform for free and start your learning journey today!',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <link rel="icon" href="/flag.png" type='image/x-icon' sizes="any" />
            <body >
                <GlobalContextProvider>
                    <NextAuthSessionProvider>
                        <Navbar></Navbar>
                        {children}
                        <Footer></Footer>
                        <GlobalSnackBar></GlobalSnackBar>
                    </NextAuthSessionProvider>
                </GlobalContextProvider>

            </body>
        </html>
    )
}

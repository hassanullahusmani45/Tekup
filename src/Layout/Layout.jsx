import Footer from '../components/Footer'
import Header from '../components/Header'
import propTypes from 'prop-types'

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <div className='w-full px-6 pt-32 bg-slate-900 text-white'>
                {children}
            </div>
            <Footer />
        </>
    )
}

Layout.propTypes = {
    children: propTypes.node.isRequired,
}
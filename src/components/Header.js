import React from 'react'

const Header = () => {
    const headerStyles = {
        textAlign: 'center',
        color: 'gray',
        marginBottom: '-1.5rem',
        marginTop: '1rem'
    }
    const linkStyle = {
        color: '#6CB4EE'
    }
    return (
        <div className="max-w-xs sm:max-w-sm mx-auto">
            <h1 style={headerStyles}>Built with ReactJS <a style={linkStyle} href="https://github.com/kkhtun/PhotoGallery-by-Pixabay-API">Github/kkhtun</a></h1>
        </div>
    )
}

export default Header

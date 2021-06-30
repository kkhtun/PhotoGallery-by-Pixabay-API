import React from 'react'

const Header = () => {
    const headerStyles = {
        textAlign: 'center',
        color: 'gray',
        marginBottom: '-2rem',
        marginTop: '1rem'
    }
    return (
        <div className="max-w-xs sm:max-w-sm mx-auto">
            <h1 style={headerStyles}>Built with ReactJS </h1>
        </div>
    )
}

export default Header

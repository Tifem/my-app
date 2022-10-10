
const Header = ({title} ) => {
    return (
        <div>
            <h1 className="header">{title}</h1>
            <button className="btin">Add</button>
        </div>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

export default Header
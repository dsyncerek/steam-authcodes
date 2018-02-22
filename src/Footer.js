import React from 'react';

export default class Header extends React.Component {
    render() {
        let {user} = this.props;
        return (
            <footer className="container footer">
                <a className="link" href="https://github.com/dsyncerek/steam-authcodes">Github</a>
                {user && <a className="link" href="/logout">Logout</a>}
            </footer>
        )
    }
}
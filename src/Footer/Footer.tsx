import stylesFooter from './Footer.module.css'

function Footer() {
    return (
        <footer className={stylesFooter["footer"]}>
            <p className={stylesFooter["text"]}>&copy; {new Date().getFullYear()} BaKozak website</p>
        </footer>
    );
}

export default Footer
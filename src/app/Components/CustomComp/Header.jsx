import styles from "../../Css/header.module.css"


function Header({ heading, subHeading }) {
    return (
        <div class={styles.header}>
            <h1 >&#8220;{heading} &#8221; </h1>
            <p > {subHeading}.</p>
        </div>
    )
}

export default Header

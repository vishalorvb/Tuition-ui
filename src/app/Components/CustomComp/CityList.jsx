import styles from "../../Css/city.module.css"
import Link from 'next/link'
function CityList({ baseUrl, heading }) {

    const city = [
        "Delhi",
        "Kolkata",
        "Bangalore",
        "Hyderabad",
        "Mumbai",
        "Chennai",
        "Pune",
        "Ahmedabad",
        "Jaipur",
        "Lucknow",
        "Kanpur",
        "Nagpur",
        "Indore",
        "Thane",
        "Visakhapatnam",
        "Patna",
        "Vadodara",
        "Ghaziabad",
        "Ludhiana",
        "Agra"
    ]

    return (
        <div>
            <div className={styles.heading}>
                <h4>{heading}</h4>
            </div>

            <div>
                <ul className={styles.list}>
                    {city.map(c =>
                        <li key={c} className={styles.listItem}>
                            <Link href={`${baseUrl}/${c}`}>{c}</Link>
                        </li>)}
                </ul>
            </div>
        </div>
    )
}

export default CityList

import styles from './search.module.css'
import { FaSearch } from "react-icons/fa"
import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function Search (){

    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate()

    const handleSubmit= (e) =>{
        e.preventDefault();
        navigate("/?search=" + searchText)
    }

    const handleChange= (e) =>{
        setSearchText(e.target.value)
    }

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit} >
            <div className={styles.searchBox}>
            <input className={styles.searchInput} type="text"  value={searchText} onChange={handleChange} />
            <button className={styles.searchButton} type="submit"><FaSearch  size={20} /></button>
                
            </div>
        </form>
    )
}
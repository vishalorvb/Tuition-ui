'use client'

import { useRef } from 'react'
import styles from '../../Css/searchbox.module.css'
import Button from '../MiniComp/Button'
import { useRouter } from 'next/navigation'



/**
 * 
 * @param {heading , redirectUrl,getWord}
 * if redirectUrl is undefined => it will call getWord() and pass trimmed value of search input in getWord()
 * else it will redirect to redirectUrl
 * @returns 
 */
function SearchBox({ heading, redirectUrl, getWord }) {

    const word = useRef(null)
    const router = useRouter();
    function handleClick(e) {
        let inputWord = word.current.value.trim()
        inputWord = inputWord.split(" ").join("-")
        // checking if input field is empty then do nothin
        if (word.current.value.trim() == "") {
            return;
        }

        //
        if (redirectUrl != undefined) {
            router.push(`${redirectUrl}${inputWord}`)
        }
        else {

            getWord(inputWord)
        }

    }

    return (
        <div className={styles.searchmain}>
            <div className="container">
                <div className="row">
                    <div className="col-10" >
                        <input ref={word} className={styles.searchinput} type="text" placeholder={heading} />
                    </div>
                    <div className="col-2">
                        <div className={styles.btn}
                            onClick={handleClick}
                        >
                            <Button>Search</Button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SearchBox

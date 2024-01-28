
import { Grid, Paper } from "@mui/material"
import styles from "../../Css/form.module.css"
import FormPage from "./FormPage"
function PostTuition() {



    return (
        <div>
            <Grid container justifyContent="center">
                <Grid item md={12}>
                    <FormPage>

                        <div className="form">
                            <h1 className={styles.heading}>Registration</h1>
                            <form action="" method="post">
                                <label >Name:</label>
                                <input type="text" id="name" name="name" placeholder="Your Name" required />
                                <label >Name:</label>
                                <input type="text" id="name" name="name" placeholder="Your Name" required />

                                <label >Name:</label>
                                <input type="text" id="name" name="name" placeholder="Your Name" required />

                                <label >Name:</label>
                                <input type="text" id="name" name="name" placeholder="Your Name" required />

                                <label >Email:</label>
                                <input type="email" id="email" name="email" placeholder="Your Email" />

                                <label >Message:</label>
                                <textarea id="message" name="message" placeholder="Type your message"></textarea>
                                <input type="submit" value="Submit"></input>
                            </form>

                        </div>

                    </FormPage>

                </Grid>
            </Grid>
        </div>
    )
}

export default PostTuition

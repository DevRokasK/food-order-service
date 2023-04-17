import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewReviewForm.module.css'
import Link from 'next/link';

export default function NewReviewForm(props) {
    const authorInputRef = useRef();
    const scoreInputRef = useRef();
    const commentInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredAuthor = authorInputRef.current.value;
        const enteredScore = scoreInputRef.current.value;
        const enteredComment = commentInputRef.current.value;

        const reviewData = {
            author: enteredAuthor,
            score: enteredScore,
            comment: enteredComment
        };

        props.onAddReview(reviewData);
    }

    return (
        <div>
            <div className='navigation'>
                <div className='navigation-content'>
                    <div className='admin-command-bar'>
                        <button className='navigation-right-button'><Link href="/restaurants/3">Cancel</Link></button>
                    </div>
                </div>
            </div>
            <Card>
                <form className={classes.form} onSubmit={submitHandler}>

               
                    <div className={classes.control}>
                        <label htmlFor='author'>Name Surname</label>
                        <input type='text' required id='author' ref={authorInputRef} />
                    </div>

                    <div className={classes.control}>
                        <label htmlFor='score'>Score</label>
                        <input type='text' required id='score' ref={scoreInputRef} />
                    </div>

                    <div className={classes.control}>
                        <label htmlFor='comment'>Comment</label>
                        <textarea
                            id='comment'
                            required
                            rows='5'
                            ref={commentInputRef}
                        ></textarea>
                    </div>

                    <div className={classes.actions}>
                        <button>Add review</button>
                    </div>
                </form>
            </Card>
        </div>
    );
}


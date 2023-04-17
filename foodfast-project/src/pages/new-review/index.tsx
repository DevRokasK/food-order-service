import NewReviewForm from '../../components/Reviews/NewReviewForm'

function NewReviewPage() {

    function addReviewHandler(enteredReviewData) {

        console.log(enteredReviewData);
    }

    return <NewReviewForm onAddReview={addReviewHandler} />
}

export default NewReviewPage;
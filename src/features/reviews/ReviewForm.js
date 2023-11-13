import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Button, Modal, ModalHeader, FormGroup, Label } from 'reactstrap';
import { validateReviewForm } from '../../utils/validateReviewForm';
import { addReview } from './reviewsSlice';

const ReviewForm = ({ category }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const review = {
      category: category,
      author: values.author,
      text: values.reviewText,
      date: new Date(Date.now()).toISOString()
    };

    dispatch(addReview(review));
    setModalOpen(false);
  };

  const initialValues = {
    author: '',
    reviewText: '',
  };

  return (
    <>
      <Button outline onClick={() => setModalOpen(true)}>
        <i className='fa fa-pencil fa-lg' /> Review Item
      </Button>
      <Modal isOpen={modalOpen}>
        <ModalHeader toggle={() => setModalOpen(false)}>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validate={validateReviewForm}>
            <Form>
              <FormGroup>
                <Label htmlFor='author'>Name</Label>
                <Field
                  name='author'
                  placeholder='Name...'
                  className='form-control'
                />
                <ErrorMessage name='author'>
                  {(msg) => <p className='text-danger'>{msg}</p>}
                </ErrorMessage>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='reviewText'>Comment</Label>
                <Field
                  name='reviewText'
                  as='textarea'
                  rows='12'
                  className='form-control'
                />
                <ErrorMessage name='reviewText'>
                  {(msg) => <p className='text-danger'>{msg}</p>}
                </ErrorMessage>
              </FormGroup>
              <Button type='submit' color='success'>
                Submit
              </Button>
            </Form>
          </Formik>
        </ModalHeader>
      </Modal>
    </>
  );

};

export default ReviewForm;
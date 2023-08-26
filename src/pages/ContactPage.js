import { useEffect } from 'react';
import { Container, Row, Col, FormGroup, Label, Button } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import PageTitle from '../components/PageTitle';

const pageTitle = 'Contact Us';

const ContactPage = () => {

    useEffect(() => {
        document.title = pageTitle;
    }, []);

    const handleSubmit = (values, { resetForm }) => {
        console.log('form values:', values);
        console.log('JSON:', JSON.stringify(values));
        resetForm();
    };

    function validateEmail(value) {
        let error;
        if (!value) {
            error = 'Email is Required.';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = 'Please enter a valid email address.';
        }
        return error;
    }

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        emailList: false
    };

    return (
        <>
            <PageTitle title={pageTitle} />
            <Container>
                <Row className='mb-4'>
                    <Col className='offset-1 col-10 d-flex justify-content-center'>
                        <p>Questions? Comments? Have a design in mind or need something
                            custom-made? Please get in touch at
                            <a class="text-link" href="mailto:CreativeCrafting@gmail.com"> CreativeCrafting@gmail.com</a> or use the form below.
                            We'd love to hear from you!
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col className='col-12'>
                        <h2>Send us a Message</h2>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col lg='10'>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={handleSubmit}>
                            <Form>
                                <FormGroup>
                                    <Label htmlFor='firstName'>First Name</Label>
                                    <Field
                                        name='firstName'
                                        placeholder='First Name'
                                        maxlength='20'
                                        className='form-control'
                                    />
                                    {/* <ErrorMessage name='firstName'>
                                            {(msg) => <p className='text-danger'>{msg}</p>}
                                        </ErrorMessage> */}
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor='lastName'>Last Name</Label>
                                    <Field
                                        name='lastName'
                                        placeholder='Last Name'
                                        maxlength='20'
                                        className='form-control'
                                    />
                                    {/* <ErrorMessage name='lastName'>
                                            {(msg) => <p className='text-danger'>{msg}</p>}
                                        </ErrorMessage> */}
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor='email'>Email</Label>
                                    <Field
                                        name='email'
                                        placeholder='Email'
                                        maxlength='50'
                                        className='form-control'
                                        validate={validateEmail}
                                    />
                                    <ErrorMessage name='email'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor='message'>Your Message</Label>
                                    <Field
                                        name='message'
                                        as='textarea'
                                        rows='8'
                                        maxlength='1000'
                                        className='form-control'
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Field
                                        name='emailList'
                                        type='checkbox'
                                    />
                                    <Label htmlFor='emailList'> Would you like to join our low volume email list?</Label>
                                </FormGroup>
                                <Button type='submit' color='success' className='mb-5'>
                                    Submit
                                </Button>
                            </Form>
                        </Formik>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ContactPage;
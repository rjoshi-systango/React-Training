import { useFormik } from 'formik';
import * as Yup from "yup";
import  './SignUp.css';

const SignUp = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, "Must be 15 characters or less than 15 ")
                .required("Required"),
            lastName: Yup.string()
                .max(15, "Must be 15 characters or less than 15 ")
                .required("Required"),    
            email: Yup.string()
                .email("Invalid email")
        }),

        onSubmit: (values) => {
            console.log(values);
        }
    })
    // console.log(formik.errors);

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className='input-container'>
                <input 
                  id="firstName"
                  name="firstName"
                  type= "text"
                  placeholder='First Name'
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                />
                {formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null}
            </div>
            <div className='input-container'>
                <input 
                  id="lastName"
                  name="lastName"
                  type= "text"
                  placeholder='Last Name'
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                />
                {formik.errors.lastName ? <p>{formik.errors.lastName}</p> : null}

            </div>
            <div className='input-container'>
                <input 
                  id="email"
                  name="email"
                  type= "email"
                  placeholder='email'
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                {formik.errors.email ? <p>{formik.errors.email}</p> : null}

            </div>
            <button type="text" >Submit</button>
        </form>
    )
}

export default SignUp;
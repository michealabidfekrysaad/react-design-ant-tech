import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  subject: "",
  content: "",
};
const onSubmit = (values, onSubmitProps) => {
  // console.log(onSubmitProps);
  console.log(values);
  onSubmitProps.resetForm();
};
const validationSchema = Yup.object({
  name: Yup.string()
    .required("Required")
    .trim("Empty sapces!!")
    .min(5, "Length is too samll"),
  email: Yup.string().email("Invalid email address").required("Required"),
  subject: Yup.string().required("Required"),
  content: Yup.string().required("Required").max(900, "You are taking to much"),
});

const AppContact = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  // console.log(formik.touched);

  return (
    <div id="contact" className="block contactBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Get in Touch</h2>
          <p>Dolore nam rerum obcaecati fugit odio nobis Molestiae rerum</p>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="complete-field">
            <label htmlFor="name">name</label>
            <i className="fa fa-user fa-lg icon"></i>
            <input
              type="text"
              id="name"
              name="name"
              // onBlur={formik.handleBlur}
              // onChange={formik.handleChange}
              // value={formik.values.name}
              {...formik.getFieldProps("name")}
            />
            {formik.errors.name && formik.touched.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="complete-field">
            <label htmlFor="email">Email address</label>
            <i className="fa fa-envelope fa-lg icon"></i>
            <input
              type="email"
              id="email"
              name="email"
              // onBlur={formik.handleBlur}
              // onChange={formik.handleChange}
              // value={formik.values.email}
              {...formik.getFieldProps("email")}
            />
            {formik.errors.email && formik.touched.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="complete-field">
            <label htmlFor="subject">Subject</label>
            <i className="fas fa-check fa-lg icon"></i>
            <input
              // className={formik.errors.subject && formik.touched.subject? 'border-red': ''}
              type="text"
              id="subject"
              name="subject"
              // onBlur={formik.handleBlur}
              // onChange={formik.handleChange}
              // value={formik.values.subject}
              {...formik.getFieldProps("subject")}
            />
            {formik.errors.subject && formik.touched.subject ? (
              <div className="error">{formik.errors.subject}</div>
            ) : null}
          </div>
          <div className="complete-field">
            <label htmlFor="content">Content</label>
            <textarea
              style={{ paddingLeft: "20px" }}
              id="content"
              name="content"
              placeholder="Write something.."
              // onBlur={formik.handleBlur}
              // onChange={formik.handleChange}
              // value={formik.values.content}
              {...formik.getFieldProps("content")}
            />
            {formik.errors.content && formik.touched.content ? (
              <div className="error">{formik.errors.content}</div>
            ) : null}
          </div>
          <div className="btn-submit">
            <button type="submit" disabled={true}>
              <i className="fas fa-reply"></i>&nbsp;&nbsp;Contact
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppContact;
